const express = require('express');
const {insertActivityPicture,
       getActivityPicture,
       getActivityPictureById,
       getActivityPictureByActivityPictureId,
       updateActivityPictureBytId,
       deleteActivityPictureBytId
      } = require('../controllers/activityPictureController');

const router = express.Router();

router.post('/activity-picture', insertActivityPicture);
router.get('/activity-pictures', getActivityPicture);
router.get('/activity-picture/:id', getActivityPictureById);
router.get('/activity-picture/:id/id', getActivityPictureByActivityPictureId);
router.patch('/activity-picture/:id', updateActivityPictureBytId);
router.delete('/activity-picture/:id', deleteActivityPictureBytId);
// router.get('/student/:id', getStudent);
// router.put('/student/:id', updateStudent);
// router.delete('/student/:id', deleteStudent);


module.exports = {
    routes: router
}