const express = require('express');
const router = express.Router();
const NotifyController = require('../controller/NotifyController');

router.get('/captcha', NotifyController.captcha);

module.exports = router;
