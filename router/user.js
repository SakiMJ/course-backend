const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController.js');
//图形验证码
router.post('/register', UserController.register);

module.exports = router;
