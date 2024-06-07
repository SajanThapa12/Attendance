const express = require ('express');
const router = express.Router();
const authController= require('../Controllers/authControllers');

router.post('/register', authController.register);
router.post('/login', authController.login);
//router.post('/delete', authController.delete);
module.exports = router;