const express = require('express');
const {insertProcurement,
       getProcurement,
       getProcurementById,
       getProcurementByprocurementId,
       updateProcurementBytId,
       deleteProcurementBytId
      } = require('../controllers/procurementController');

const router = express.Router();

router.post('/procurement', insertProcurement);
router.get('/procurements', getProcurement);
router.get('/procurement/:id', getProcurementById);
router.get('/procurement/:id/id', getProcurementByprocurementId);
router.patch('/procurement/:id', updateProcurementBytId);
router.delete('/procurement/:id', deleteProcurementBytId);
// router.get('/student/:id', getStudent);
// router.put('/student/:id', updateStudent);
// router.delete('/student/:id', deleteStudent);


module.exports = {
    routes: router
}