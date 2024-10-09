# Diabetes Predictor using Machine Learning

This project is a Diabetes Predictor using Machine Learning algorithms. It aims to predict the likelihood of a person having diabetes based on various health parameters.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Dataset](#dataset)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Predicts the likelihood of diabetes based on user input(females only).
- Utilizes various machine learning algorithms for accurate predictions.
- User-friendly interface for easy interaction.
- Detailed output results including predictions and probabilities.

## Technologies Used

- Python
- Flask
- NumPy
- Pandas
- Scikit-learn
- Joblib
- Flask-CORS

## Dataset

The model is trained on the Pima Indians Diabetes Database, which contains various health parameters to predict diabetes. The dataset can be found at [Kaggle: Pima Indians Diabetes Database](https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database).

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/raghzzzspace/Diabetes_Predictor_using_ML.git
   cd Diabetes_Predictor_using_ML
Install the required dependencies:

bash
Copy code
pip install -r requirements.txt
Usage
Start the Flask server:

bash
Copy code
python app.py
Open your web browser and navigate to http://127.0.0.1:5000.

Enter the necessary health parameters in the provided fields and click on the "Predict" button to get the diabetes prediction.

Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.
