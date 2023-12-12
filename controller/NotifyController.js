const NotifyService = require('../service/NotifyService.js');
const GetUserInfoTool = require('../utils/GetUserInfoTool.js');
const SecretTool = require('../utils/SecretTool.js');
const RandomTool = require('../utils/RandomTool.js');

const NotifyController = {
	captcha: (req, res) => {
		let { type } = req.query;
		let _key = SecretTool.md5(
			GetUserInfoTool.getIp(req) + GetUserInfoTool.getUseragent(req)
		);
		let handleRes = NotifyService.captcha(_key, type);
		res.set('content-type', 'image/svg+xml');
		res.send(handleRes);
	},
	sendCode: async (req, res) => {
		let { phone, captcha, type } = req.body;
		let _key = SecretTool.md5(
			GetUserInfoTool.getIp(req) + GetUserInfoTool.getUseragent(req)
		);
		let handleRes = await NotifyService.sendCode(
			phone,
			captcha,
			type,
			_key,
			RandomTool.randomcode()
		);
		res.send(handleRes);
	},
};

module.exports = NotifyController;
