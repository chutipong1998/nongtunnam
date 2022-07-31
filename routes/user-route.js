const express = require('express');
const {insertUser,
       getUser,
       getUserById
      } = require('../controllers/userController');

const router = express.Router();

router.post('/user', insertUser);
router.get('/users', getUser);
router.get('/user/:id', getUserById);
// router.get('/student/:id', getStudent);
// router.put('/student/:id', updateStudent);
// router.delete('/student/:id', deleteStudent);


module.exports = {
    routes: router
}