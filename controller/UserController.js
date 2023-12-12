const UserService = require('../service/UserService.js');
const GetUserInfoTool = require('../utils/GetUserInfoTool.js');
const SecretTool = require('../utils/SecretTool.js');
const RandomTool = require('../utils/RandomTool.js');
const UserController = {
	register: async (req, res) => {
		let { phone, code } = req.body;
		let handleRes = await UserService.register(phone, code);
		res.send(handleRes);
	},
};

module.exports = UserController;
