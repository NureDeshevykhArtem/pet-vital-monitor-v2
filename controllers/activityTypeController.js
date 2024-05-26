const {ActivityType} = require("../models/models");

// Create a new ActivityType
const createActivityType = async (req, res) => {
    try {
        const activityType = new ActivityType(req.body);
        await activityType.save();
        res.status(201).json(activityType);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all ActivityTypes
const getActivityTypes = async (req, res) => {
    try {
        const activityTypes = await ActivityType.find();
        res.status(200).json(activityTypes);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a single ActivityType by ID
const getActivityTypeById = async (req, res) => {
    try {
        const activityType = await ActivityType.findById(req.params.id);
        if (!activityType) {
            return res.status(404).json({ error: 'ActivityType not found' });
        }
        res.status(200).json(activityType);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update an ActivityType by ID
const updateActivityType = async (req, res) => {
    try {
        const activityType = await ActivityType.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!activityType) {
            return res.status(404).json({ error: 'ActivityType not found' });
        }
        res.status(200).json(activityType);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete an ActivityType by ID
const deleteActivityType = async (req, res) => {
    try {
        const activityType = await ActivityType.findByIdAndDelete(req.params.id);
        if (!activityType) {
            return res.status(404).json({ error: 'ActivityType not found' });
        }
        res.status(200).json({ message: 'ActivityType deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createActivityType,
    getActivityTypes,
    getActivityTypeById,
    updateActivityType,
    deleteActivityType
};