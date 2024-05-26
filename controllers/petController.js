const {Pet} = require("../models/models");

// Create a new Pet
const createPet = async (req, res) => {
    try {
        const pet = new Pet(req.body);
        await pet.save();
        res.status(201).json(pet);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all Pets
const getPets = async (req, res) => {
    try {
        const pets = await Pet.find().populate('owner');
        res.status(200).json(pets);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a single Pet by ID
const getPetById = async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id).populate('owner');
        if (!pet) {
            return res.status(404).json({ error: 'Pet not found' });
        }
        res.status(200).json(pet);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a Pet by ID
const updatePet = async (req, res) => {
    try {
        const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!pet) {
            return res.status(404).json({ error: 'Pet not found' });
        }
        res.status(200).json(pet);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a Pet by ID
const deletePet = async (req, res) => {
    try {
        const pet = await Pet.findByIdAndDelete(req.params.id);
        if (!pet) {
            return res.status(404).json({ error: 'Pet not found' });
        }
        res.status(200).json({ message: 'Pet deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createPet,
    getPets,
    getPetById,
    updatePet,
    deletePet
};