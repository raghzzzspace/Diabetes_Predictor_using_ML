from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
from sklearn.preprocessing import StandardScaler  # Import StandardScaler

app = Flask(__name__)
CORS(app)

# Load your model and scaler
model = joblib.load('model.pkl')
scaler = joblib.load('scaler.pkl')  # Load the StandardScaler used during training

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    # Extract features from JSON data
    features = np.array([
        data['pregnancies'],
        data['glucose'],
        data['bloodPressure'],
        data['skinThickness'],
        data['insulin'],
        data['bmi'],
        data['diabetesPedigreeFunction'],
        data['age']
    ], dtype=float).reshape(1, -1)

    # Scale the features using the loaded scaler
    scaled_features = scaler.transform(features)

    # Make prediction
    prediction = model.predict(scaled_features)[0]
    print(f'Prediction: {prediction}')

    return jsonify({'prediction': int(prediction)})

if __name__ == '__main__':
    app.run(debug=True)
