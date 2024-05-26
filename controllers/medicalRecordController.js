const MedicalRecord = require('models/models').MedicalRecord;

// Create a new MedicalRecord
const createMedicalRecord = async (req, res) => {
    try {
        const medicalRecord = new MedicalRecord(req.body);
        await medicalRecord.save();
        res.status(201).json(medicalRecord);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all MedicalRecords
const getMedicalRecords = async (req, res) => {
    try {
        const medicalRecords = await MedicalRecord.find().populate('pet veterinarian');
        res.status(200).json(medicalRecords);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a single MedicalRecord by ID
const getMedicalRecordById = async (req, res) => {
    try {
        const medicalRecord = await MedicalRecord.findById(req.params.id).populate('pet veterinarian');
        if (!medicalRecord) {
            return res.status(404).json({ error: 'MedicalRecord not found' });
        }
        res.status(200).json(medicalRecord);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a MedicalRecord by ID
const updateMedicalRecord = async (req, res) => {
    try {
        const medicalRecord = await MedicalRecord.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!medicalRecord) {
            return res.status(404).json({ error: 'MedicalRecord not found' });
        }
        res.status(200).json(medicalRecord);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a MedicalRecord by ID
const deleteMedicalRecord = async (req, res) => {
    try {
        const medicalRecord = await MedicalRecord.findByIdAndDelete(req.params.id);
        if (!medicalRecord) {
            return res.status(404).json({ error: 'MedicalRecord not found' });
        }
        res.status(200).json({ message: 'MedicalRecord deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createMedicalRecord,
    getMedicalRecords,
    getMedicalRecordById,
    updateMedicalRecord,
    deleteMedicalRecord
};