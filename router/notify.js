const express = require('express');
const router = express.Router();
const NotifyController = require('../controller/NotifyController');
//图形验证码
router.get('/captcha', NotifyController.captcha);
//手机验证码
router.post('/send_code', NotifyController.sendCode);

module.exports = router;
