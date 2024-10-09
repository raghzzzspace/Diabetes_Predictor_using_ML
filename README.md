# Diabetes Predictor using Machine Learning

## Algorithm Overview

This project employs the **Random Forest Classifier**, an ensemble learning method that utilizes multiple decision trees to enhance prediction accuracy and reduce overfitting. With hyperparameter tuning using **GridSearchCV**, we achieved an impressive accuracy of **83%** on the test dataset. The model effectively handles imbalanced data through **SMOTE (Synthetic Minority Over-sampling Technique)**, generating synthetic samples for the minority class. The performance is further evaluated using metrics such as precision, F1-score, and ROC AUC, along with visualizations like confusion matrices and feature importance plots, providing insights into the key health parameters influencing diabetes prediction.

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

## Technologies Used

- Python
- Flask
- NumPy
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
2. Install the required dependencies:

         pip install -r requirements.txt

Usage:

Start the Flask server:

      python app.py

Open your web browser and navigate to http://127.0.0.1:5000.

Enter the necessary health parameters in the provided fields and click on the "Predict" button to get the diabetes prediction.

Contributing:

Contributions are welcome! 
If you'd like to contribute, please fork the repository and submit a pull request.

