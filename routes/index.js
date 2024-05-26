var express = require('express');
var Task = require('../models/task');

var router = express.Router();

const {Pet, Owner, Report, MedicalRecord, ActivityTable, ActivityType, Admin, Specialization, Veterinarian} = require("../models/models");

/* GET home page. */
router.get('/', async function(req, res, next) {
    try {
        const pets = await Pet.find();
        const owners = await Owner.find();
        const medicalRecords = await MedicalRecord.find();
        const activityTables = await ActivityTable.find();
        const activityTypes = await ActivityType.find();
        const admins = await Admin.find();
        const reports = await Report.find();
        const specializations = await Specialization.find();
        const veterinarians = await Veterinarian.find();

        // Рендер страницы, когда все данные получены
        res.render('index', {
            pets,
            owners,
            medicalRecords,
            activityTables,
            activityTypes,
            admins,
            reports,
            specializations,
            veterinarians
        });
    } catch (err) {
        console.error(err);
        res.send('Sorry! Something went wrong.');
    }
});

router.post('/addTask', function(req, res, next) {
  const taskName = req.body.taskName;
  const createDate = Date.now();
  
  var task = new Task({
    taskName: taskName,
    createDate: createDate
  });
  console.log(`Adding a new task ${taskName} - createDate ${createDate}`)

  task.save()
      .then(() => { 
        console.log(`Added new task ${taskName} - createDate ${createDate}`)        
        res.redirect('/'); })
      .catch((err) => {
          console.log(err);
          res.send('Sorry! Something went wrong.');
      });
});

router.post('/completeTask', function(req, res, next) {
  console.log("I am in the PUT method")
  const taskId = req.body._id;
  const completedDate = Date.now();

  Task.findByIdAndUpdate(taskId, { completed: true, completedDate: Date.now()})
    .then(() => { 
      console.log(`Completed task ${taskId}`)
      res.redirect('/'); }  )
    .catch((err) => {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    });
});


router.post('/deleteTask', function(req, res, next) {
  const taskId = req.body._id;
  const completedDate = Date.now();
  Task.findByIdAndDelete(taskId)
    .then(() => { 
      console.log(`Deleted task $(taskId)`)      
      res.redirect('/'); }  )
    .catch((err) => {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    });
});

// Import controllers
const {
    createActivityTable,
    getActivityTables,
    getActivityTableById,
    updateActivityTable,
    deleteActivityTable
} = require('../controllers/activityTableController');

const {
    createActivityType,
    getActivityTypes,
    getActivityTypeById,
    updateActivityType,
    deleteActivityType
} = require('../controllers/activityTypeController');

const {
    createAdmin,
    getAdmins,
    getAdminById,
    updateAdmin,
    deleteAdmin
} = require('../controllers/adminController');

const {
    createMedicalRecord,
    getMedicalRecords,
    getMedicalRecordById,
    updateMedicalRecord,
    deleteMedicalRecord
} = require('../controllers/medicalRecordController');

const {
    createOwner,
    getOwners,
    getOwnerById,
    updateOwner,
    deleteOwner
} = require('../controllers/ownerController');

const {
    createPet,
    getPets,
    getPetById,
    updatePet,
    deletePet
} = require('../controllers/petController');

const {
    createReport,
    getReports,
    getReportById,
    updateReport,
    deleteReport
} = require('../controllers/reportController');

const {
    createSpecialization,
    getSpecializations,
    getSpecializationById,
    updateSpecialization,
    deleteSpecialization
} = require('../controllers/specializationController');

const {
    createVeterinarian,
    getVeterinarians,
    getVeterinarianById,
    updateVeterinarian,
    deleteVeterinarian
} = require('../controllers/veterinarianController');

// Define routes for ActivityTable
router.post('/activityTable', createActivityTable);
router.get('/activityTables', getActivityTables);
router.get('/activityTable/:id', getActivityTableById);
router.put('/activityTable/:id', updateActivityTable);
router.delete('/activityTable/:id', deleteActivityTable);

// Define routes for ActivityType
router.post('/activityType', createActivityType);
router.get('/activityTypes', getActivityTypes);
router.get('/activityType/:id', getActivityTypeById);
router.put('/activityType/:id', updateActivityType);
router.delete('/activityType/:id', deleteActivityType);

// Define routes for Admin
router.post('/admin', createAdmin);
router.get('/admins', getAdmins);
router.get('/admin/:id', getAdminById);
router.put('/admin/:id', updateAdmin);
router.delete('/admin/:id', deleteAdmin);

// Define routes for MedicalRecord
router.post('/medicalRecord', createMedicalRecord);
router.get('/medicalRecords', getMedicalRecords);
router.get('/medicalRecord/:id', getMedicalRecordById);
router.put('/medicalRecord/:id', updateMedicalRecord);
router.delete('/medicalRecord/:id', deleteMedicalRecord);

// Define routes for Owner
router.post('/owner', createOwner);
router.get('/owners', getOwners);
router.get('/owner/:id', getOwnerById);
router.put('/owner/:id', updateOwner);
router.delete('/owner/:id', deleteOwner);

// Define routes for Pet
router.post('/pet', createPet);
router.get('/pets', getPets);
router.get('/pet/:id', getPetById);
router.put('/pet/:id', updatePet);
router.delete('/pet/:id', deletePet);

// Define routes for Report
router.post('/report', createReport);
router.get('/reports', getReports);
router.get('/report/:id', getReportById);
router.put('/report/:id', updateReport);
router.delete('/report/:id', deleteReport);

// Define routes for Specialization
router.post('/specialization', createSpecialization);
router.get('/specializations', getSpecializations);
router.get('/specialization/:id', getSpecializationById);
router.put('/specialization/:id', updateSpecialization);
router.delete('/specialization/:id', deleteSpecialization);

// Define routes for Veterinarian
router.post('/veterinarian', createVeterinarian);
router.get('/veterinarians', getVeterinarians);
router.get('/veterinarian/:id', getVeterinarianById);
router.put('/veterinarian/:id', updateVeterinarian);
router.delete('/veterinarian/:id', deleteVeterinarian);

module.exports = router;
