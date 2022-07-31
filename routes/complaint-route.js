const express = require('express');
const {insertComplaint,
       getComplaint,
       getComplaintById,
       getComplaintByComplaintId,
       updateComplaintBytId,
       deleteComplaintBytId
      } = require('../controllers/complaintController');

const router = express.Router();

router.post('/complaint', insertComplaint);
router.get('/complaints', getComplaint);
router.get('/complaint/:id', getComplaintById);
router.get('/complaint/:id/id', getComplaintByComplaintId);
router.patch('/complaint/:id', updateComplaintBytId);
router.delete('/complaint/:id', deleteComplaintBytId);
// router.get('/student/:id', getStudent);
// router.put('/student/:id', updateStudent);
// router.delete('/student/:id', deleteStudent);


module.exports = {
    routes: router
}