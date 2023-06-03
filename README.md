# Heart Disease Classification Product

This is a classification product designed to predict the likelihood of heart disease in patients. It utilizes a machine learning model trained on relevant medical data to provide accurate predictions. The product consists of a front-end application developed using Next.js and deployed on Vercel, while the back-end is powered by Flask and deployed on Railway.

## Features

- Heart disease classification: The product employs a trained machine learning model to classify the likelihood of heart disease based on input data.

- User-friendly interface: The front-end application provides an intuitive and interactive user interface for seamless user experience.

- Fast and responsive: The Next.js framework ensures fast rendering and smooth performance on the front-end, while Flask handles back-end processing efficiently.

## Technologies Used

- Front-end: Next.js, React, JavaScript, HTML, CSS, Material UI

- Back-end: Flask, Python

- Deployment: Vercel (front-end), Railway (back-end)

## Getting Started

To use this product locally or deploy it on your own platforms, follow the instructions below:

### Front-end (Next.js)

1. Clone the repository: `git clone <repository-url>`

2. Navigate to the front-end directory: `cd frontend`

3. Install the dependencies: `npm install`

4. Run the development server: `npm run dev`

5. Access the application at `http://localhost:3000`

### Back-end (Flask)

1. Clone the repository: `git clone <repository-url>`

2. Navigate to the back-end directory: `cd backend`

3. Create a virtual environment (recommended): `python -m venv venv`

4. Activate the virtual environment:
   - For Windows: `venv\Scripts\activate`
   - For Unix/Linux: `source venv/bin/activate`

5. Install the dependencies: `pip install -r requirements.txt`

6. Run the Flask development server: `flask run`

7. Access the API at `http://localhost:5000`

## Deployment

To deploy the product on Vercel and Railway, follow the instructions below:

### Front-end Deployment (Vercel)

1. Create an account on Vercel (if not already done).

2. Install the Vercel CLI globally: `npm install -g vercel`

3. Navigate to the front-end directory: `cd frontend`

4. Run the Vercel deployment command: `vercel`

5. Follow the prompts and configure your deployment settings.

6. Access your deployed front-end application at the provided URL.

### Back-end Deployment (Railway)

1. Create an account on Railway (if not already done).

2. Install the Railway CLI globally: `npm install -g railway`

3. Authenticate the CLI with your Railway account: `railway login`

4. Navigate to the back-end directory: `cd backend`

5. Initialize the Railway project: `railway init`

6. Deploy the back-end to Railway: `railway up`

7. Follow the prompts and configure your deployment settings.

8. Access your deployed back-end API at the provided URL.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## Acknowledgments

We would like to acknowledge the data providers and researchers who contributed to the development of the machine learning model used in this product. Their efforts enable accurate heart disease classification and improve patient care.

## Contact

For any inquiries or support, please contact our team at [20521680@gm.uit.edu.vn](mailto:20521680@gm.uit.edu.vn).
