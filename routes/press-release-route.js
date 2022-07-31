const express = require('express');
const {insertPressRelease,
       getPressRelease,
       getPressReleaseById,
       getPressReleaseByPressReleaseId,
       updatePressReleaseBytId,
       deletePressReleaseBytId
      } = require('../controllers/pressReleaseController');

const router = express.Router();

router.post('/press-release', insertPressRelease);
router.get('/press-releases', getPressRelease);
router.get('/press-release/:id', getPressReleaseById);
router.get('/press-release/:id/id', getPressReleaseByPressReleaseId);
router.patch('/press-release/:id', updatePressReleaseBytId);
router.delete('/press-release/:id', deletePressReleaseBytId);
// router.get('/student/:id', getStudent);
// router.put('/student/:id', updateStudent);
// router.delete('/student/:id', deleteStudent);


module.exports = {
    routes: router
}