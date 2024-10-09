const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Prediction endpoint
app.post('/api/predict', (req, res) => {
    const pythonProcess = exec(`python3 predict.py '${JSON.stringify(req.body)}'`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python script: ${error}`);
            return res.status(500).send("Server error during prediction.");
        }

        res.json(JSON.parse(stdout));
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
