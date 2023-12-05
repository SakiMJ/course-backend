const NotifyService = require('../service/NotifyService');
const GetUserInfoTool = require('../utils/GetUserInfoTool');
const SecretTool = require('../utils/SecretTool');

const getKey = () => {
	return SecretTool.md5(GetUserInfoTool.getIp + GetUserInfoTool.getUseragent);
};

const NotifyController = {
	captcha: async (req, res) => {
		let { type } = req.query;
		let _key = getKey();

		let handleRes = await NotifyService.captcha(_key, type);
		res.set('content-type', 'image/svg+xml');
		res.send(handleRes);
	},
};

module.exports = NotifyController;
