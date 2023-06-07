from flask import Flask, request, jsonify
from sklearn.preprocessing import StandardScaler
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the Random Forest model
model = joblib.load(r'D:\HeartRate Classification\model\NB.pkl')
# Define the mapping for field names

mapping = {
'Gender': 'gender',
'cigsPerDay': 'cigsPerDay',
'BPMeds': 'BPMeds',
'prevalentStroke': 'prevalentStroke',
'prevalentHyp': 'prevalentHyp',
'diabetes': 'diabetes',
'glucose': 'glucose'
}

# Define a route to handle prediction requests
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    
    input_data = [data[mapping[field]] for field in mapping]
    print(input_data)
    # Convert input data to numeric values
    input_data = [float(value) if isinstance(value, str) else value for value in input_data]

    predictions = model.predict([input_data])
   
    return jsonify({'predictions': predictions.tolist()})

if __name__ == '__main__':
    app.run()