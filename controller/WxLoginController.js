const WxLoginService = require('../service/WxLoginService.js');

/**
 * @param wechat_insert 验证微信接入
 */
const WxLoginController = {
	wechat_insert: (req, res) => {
		let handleRes = WxLoginService.wechat_insert();
		res.send(handleRes);
	},
	login: async (req, res) => {
		let handleRes = WxLoginService.login();
		res.send(handleRes);
	},
	wechat_message: async (req, res) => {
		let handleRes = await WxLoginService.wechat_message();
		res.send(handleRes);
	},
};

module.exports = WxLoginController;
