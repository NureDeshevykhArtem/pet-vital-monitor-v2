const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ActivityTable Schema
const activityTableSchema = new Schema({
    pet: { type: Schema.Types.ObjectId, ref: 'Pet', required: true },
    timestamp: { type: Date, required: true },
    activityType: { type: Schema.Types.ObjectId, ref: 'ActivityType', required: true },
    duration: { type: Number, required: true },
    notes: { type: String, required: false }
});

// ActivityType Schema
const activityTypeSchema = new Schema({
    name: { type: String, required: true }
});

// Admin Schema
const adminSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

// MedicalRecord Schema
const medicalRecordSchema = new Schema({
    pet: { type: Schema.Types.ObjectId, ref: 'Pet', required: true },
    visitDate: { type: Date, required: true },
    diagnosis: { type: String, required: true },
    medications: { type: String, required: true },
    veterinarian: { type: Schema.Types.ObjectId, ref: 'Veterinarian', required: true }
});

// Owner Schema
const ownerSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true }
});

// Pet Schema
const petSchema = new Schema({
    species: { type: String, required: true },
    breed: { type: String, required: true },
    name: { type: String, required: true },
    birthday: { type: Date, required: true },
    gender: { type: String, required: true },
    weight: { type: Number, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'Owner', required: true }
});

// Report Schema
const reportSchema = new Schema({
    pet: { type: Schema.Types.ObjectId, ref: 'Pet', required: true },
    createDate: { type: Date, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true }
});

// Specialization Schema
const specializationSchema = new Schema({
    name: { type: String, required: true }
});

// Veterinarian Schema
const veterinarianSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    specialization: { type: Schema.Types.ObjectId, ref: 'Specialization', required: true }
});

// Models
const ActivityTable = mongoose.model('ActivityTable', activityTableSchema);
const ActivityType = mongoose.model('ActivityType', activityTypeSchema);
const Admin = mongoose.model('Admin', adminSchema);
const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);
const Owner = mongoose.model('Owner', ownerSchema);
const Pet = mongoose.model('Pet', petSchema);
const Report = mongoose.model('Report', reportSchema);
const Specialization = mongoose.model('Specialization', specializationSchema);
const Veterinarian = mongoose.model('Veterinarian', veterinarianSchema);

module.exports = {
    ActivityTable,
    ActivityType,
    Admin,
    MedicalRecord,
    Owner,
    Pet,
    Report,
    Specialization,
    Veterinarian
};