import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
    pregnancies: Number,
    glucose: Number,
    bloodPressure: Number,
    skinThickness: Number,
    insulin: Number,
    bmi: Number,
    diabetesPedigreeFunction: Number,
    age: Number,
});

// Export the model
export default mongoose.model('Patient', PatientSchema);
