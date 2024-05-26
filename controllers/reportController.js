const Report = require('models/models').Report;

// Create a new Report
const createReport = async (req, res) => {
    try {
        const report = new Report(req.body);
        await report.save();
        res.status(201).json(report);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all Reports
const getReports = async (req, res) => {
    try {
        const reports = await Report.find().populate('pet');
        res.status(200).json(reports);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a single Report by ID
const getReportById = async (req, res) => {
    try {
        const report = await Report.findById(req.params.id).populate('pet');
        if (!report) {
            return res.status(404).json({ error: 'Report not found' });
        }
        res.status(200).json(report);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a Report by ID
const updateReport = async (req, res) => {
    try {
        const report = await Report.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!report) {
            return res.status(404).json({ error: 'Report not found' });
        }
        res.status(200).json(report);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a Report by ID
const deleteReport = async (req, res) => {
    try {
        const report = await Report.findByIdAndDelete(req.params.id);
        if (!report) {
            return res.status(404).json({ error: 'Report not found' });
        }
        res.status(200).json({ message: 'Report deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createReport,
    getReports,
    getReportById,
    updateReport,
    deleteReport
};