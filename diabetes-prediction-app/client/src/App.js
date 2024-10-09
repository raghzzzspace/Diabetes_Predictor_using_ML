import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'; // Import the CSS file

function App() {
  const [formData, setFormData] = useState({
    pregnancies: '',
    glucose: '',
    bloodPressure: '',
    skinThickness: '',
    insulin: '',
    bmi: '',
    diabetesPedigreeFunction: '',
    age: '',
  });

  const [prediction, setPrediction] = useState(null);

  // Handle changes to form inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/predict', formData);
      console.log(response.data);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error making prediction', error);
    }
  };

  return (
    <div className="App">
      <h1>Diabetes Prediction</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="pregnancies"
          placeholder="Number of Pregnancies"
          value={formData.pregnancies}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="glucose"
          placeholder="Glucose Level"
          value={formData.glucose}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="bloodPressure"
          placeholder="Blood Pressure"
          value={formData.bloodPressure}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="skinThickness"
          placeholder="Skin Thickness"
          value={formData.skinThickness}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="insulin"
          placeholder="Insulin Level"
          value={formData.insulin}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="bmi"
          placeholder="Body Mass Index (BMI)"
          value={formData.bmi}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="diabetesPedigreeFunction"
          placeholder="Diabetes Pedigree Function"
          value={formData.diabetesPedigreeFunction}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <button type="submit">Predict</button>
      </form>
      {prediction !== null && (
        <p class="prediction"> Prediction: {prediction === 1 ? "Diabetes" : "No Diabetes"}</p>
      )}
      
    </div>
  );
}

export default App;
