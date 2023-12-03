const UserService = require('../service/UserService');
const UserController = {
	login: async (req, res) => {
		const { phone, password } = res.query;
		const resData = await UserService.login(phone, password);

		res.send(resData);
	},
};

module.exports = UserController;
