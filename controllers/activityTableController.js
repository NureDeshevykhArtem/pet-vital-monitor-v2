const ActivityTable = require('models/models').ActivityTable;

// Create a new ActivityTable
const createActivityTable = async (req, res) => {
    try {
        const activityTable = new ActivityTable(req.body);
        await activityTable.save();
        res.status(201).json(activityTable);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all ActivityTables
const getActivityTables = async (req, res) => {
    try {
        const activityTables = await ActivityTable.find().populate('pet activityType');
        res.status(200).json(activityTables);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a single ActivityTable by ID
const getActivityTableById = async (req, res) => {
    try {
        const activityTable = await ActivityTable.findById(req.params.id).populate('pet activityType');
        if (!activityTable) {
            return res.status(404).json({ error: 'ActivityTable not found' });
        }
        res.status(200).json(activityTable);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update an ActivityTable by ID
const updateActivityTable = async (req, res) => {
    try {
        const activityTable = await ActivityTable.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!activityTable) {
            return res.status(404).json({ error: 'ActivityTable not found' });
        }
        res.status(200).json(activityTable);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete an ActivityTable by ID
const deleteActivityTable = async (req, res) => {
    try {
        const activityTable = await ActivityTable.findByIdAndDelete(req.params.id);
        if (!activityTable) {
            return res.status(404).json({ error: 'ActivityTable not found' });
        }
        res.status(200).json({ message: 'ActivityTable deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createActivityTable,
    getActivityTables,
    getActivityTableById,
    updateActivityTable,
    deleteActivityTable
};