import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json()); // Body parser middleware for JSON requests

// MongoDB connection
const mongoURI = 'mongodb+srv://raghvigupta2005:raghvigupta@diabetes.a7d63.mongodb.net/'; // Ensure the connection string is correct

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error:", err));

// Prediction endpoint
app.post('/api/predict', async (req, res) => {
    try {
        const response = await axios.post('http://127.0.0.1:5000/predict', req.body);
        res.json(response.data);
    } catch (error) {
        console.error("Error during prediction:", error);
        res.status(500).send("Error making prediction");
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

