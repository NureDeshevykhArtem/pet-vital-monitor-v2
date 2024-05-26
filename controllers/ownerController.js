const {Owner} = require("../models/models");

// Create a new Owner
const createOwner = async (req, res) => {
    try {
        const owner = new Owner(req.body);
        await owner.save();
        res.status(201).json(owner);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all Owners
const getOwners = async (req, res) => {
    try {
        const owners = await Owner.find();
        res.status(200).json(owners);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a single Owner by ID
const getOwnerById = async (req, res) => {
    try {
        const owner = await Owner.findById(req.params.id);
        if (!owner) {
            return res.status(404).json({ error: 'Owner not found' });
        }
        res.status(200).json(owner);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update an Owner by ID
const updateOwner = async (req, res) => {
    try {
        const owner = await Owner.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!owner) {
            return res.status(404).json({ error: 'Owner not found' });
        }
        res.status(200).json(owner);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete an Owner by ID
const deleteOwner = async (req, res) => {
    try {
        const owner = await Owner.findByIdAndDelete(req.params.id);
        if (!owner) {
            return res.status(404).json({ error: 'Owner not found' });
        }
        res.status(200).json({ message: 'Owner deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createOwner,
    getOwners,
    getOwnerById,
    updateOwner,
    deleteOwner
};