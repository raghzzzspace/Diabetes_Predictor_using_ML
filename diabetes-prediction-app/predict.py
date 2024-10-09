import sys
import json
import joblib
import numpy as np

# Load the model and scaler
model = joblib.load('model.pkl')
scaler = joblib.load('scaler.pkl')

def predict(data):
    try:
        # Parse the input JSON data (this comes from Node.js)
        data = json.loads(data)

        # Extract the features from the input
        features = np.array([[
            data['pregnancies'],
            data['glucose'],
            data['bloodPressure'],
            data['skinThickness'],
            data['insulin'],
            data['bmi'],
            data['diabetesPedigreeFunction'],
            data['age']
        ]], dtype=float)

        # Scale the features using the loaded scaler
        scaled_features = scaler.transform(features)

        # Make the prediction using the model
        prediction = model.predict(scaled_features)[0]

        # Return the result as a JSON object
        result = {'prediction': int(prediction)}
        print(json.dumps(result))  # Print the result as JSON

    except Exception as e:
        # In case of error, return a JSON error message
        error_message = {'error': str(e)}
        print(json.dumps(error_message))

if __name__ == "__main__":
    # The argument passed from Node.js will be sys.argv[1]
    if len(sys.argv) > 1:
        predict(sys.argv[1])
    else:
        print(json.dumps({"error": "No input data provided"}))
