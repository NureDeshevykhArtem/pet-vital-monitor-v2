const Veterinarian = require('models/models').Veterinarian;

// Create a new Veterinarian
const createVeterinarian = async (req, res) => {
    try {
        const veterinarian = new Veterinarian(req.body);
        await veterinarian.save();
        res.status(201).json(veterinarian);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all Veterinarians
const getVeterinarians = async (req, res) => {
    try {
        const veterinarians = await Veterinarian.find().populate('specialization');
        res.status(200).json(veterinarians);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a single Veterinarian by ID
const getVeterinarianById = async (req, res) => {
    try {
        const veterinarian = await Veterinarian.findById(req.params.id).populate('specialization');
        if (!veterinarian) {
            return res.status(404).json({ error: 'Veterinarian not found' });
        }
        res.status(200).json(veterinarian);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a Veterinarian by ID
const updateVeterinarian = async (req, res) => {
    try {
        const veterinarian = await Veterinarian.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!veterinarian) {
            return res.status(404).json({ error: 'Veterinarian not found' });
        }
        res.status(200).json(veterinarian);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a Veterinarian by ID
const deleteVeterinarian = async (req, res) => {
    try {
        const veterinarian = await Veterinarian.findByIdAndDelete(req.params.id);
        if (!veterinarian) {
            return res.status(404).json({ error: 'Veterinarian not found' });
        }
        res.status(200).json({ message: 'Veterinarian deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createVeterinarian,
    getVeterinarians,
    getVeterinarianById,
    updateVeterinarian,
    deleteVeterinarian
};