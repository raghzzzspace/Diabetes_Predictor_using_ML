import joblib
import numpy as np
import sys
import json

# Load your model and scaler
model = joblib.load('model.pkl')
scaler = joblib.load('scaler.pkl')

def predict(features):
    scaled_features = scaler.transform([features])
    prediction = model.predict(scaled_features)[0]
    return int(prediction)

if __name__ == '__main__':
    data = json.loads(sys.argv[1])
    features = [
        data['pregnancies'],
        data['glucose'],
        data['bloodPressure'],
        data['skinThickness'],
        data['insulin'],
        data['bmi'],
        data['diabetesPedigreeFunction'],
        data['age']
    ]
    result = predict(features)
    print(json.dumps({"prediction": result}))
