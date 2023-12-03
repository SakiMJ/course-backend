const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');
router.get('/login', UserController.login);

module.export = router;
