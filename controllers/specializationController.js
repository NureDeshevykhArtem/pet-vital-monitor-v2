const {Specialization} = require("../models/models");

// Create a new Specialization
const createSpecialization = async (req, res) => {
    try {
        const specialization = new Specialization(req.body);
        await specialization.save();
        res.status(201).json(specialization);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all Specializations
const getSpecializations = async (req, res) => {
    try {
        const specializations = await Specialization.find();
        res.status(200).json(specializations);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a single Specialization by ID
const getSpecializationById = async (req, res) => {
    try {
        const specialization = await Specialization.findById(req.params.id);
        if (!specialization) {
            return res.status(404).json({ error: 'Specialization not found' });
        }
        res.status(200).json(specialization);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a Specialization by ID
const updateSpecialization = async (req, res) => {
    try {
        const specialization = await Specialization.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!specialization) {
            return res.status(404).json({ error: 'Specialization not found' });
        }
        res.status(200).json(specialization);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a Specialization by ID
const deleteSpecialization = async (req, res) => {
    try {
        const specialization = await Specialization.findByIdAndDelete(req.params.id);
        if (!specialization) {
            return res.status(404).json({ error: 'Specialization not found' });
        }
        res.status(200).json({ message: 'Specialization deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createSpecialization,
    getSpecializations,
    getSpecializationById,
    updateSpecialization,
    deleteSpecialization
};