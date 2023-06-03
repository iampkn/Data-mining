from flask import Flask, request, jsonify
from sklearn.preprocessing import StandardScaler
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the Random Forest model
model = joblib.load(r'D:\HeartRate Classification\NB.pkl')
# Define the mapping for field names

mapping = {
'age': 'age',
'sysBP': 'sysBP',
'prevalentHyp': 'prevalentHyp',
'diaBP': 'diaBP',
'diabetes': 'diabetes',
'Gender': 'gender',
'BPMeds': 'BPMeds',
'BMI': 'BMI'
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