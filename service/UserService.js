import { Account } from '../config/sequelize';
const UserService = {
	login: async (phone, password) => {
		let userInfo = await Account.findAll({ where: { phone }, raw: true });
		if (userInfo.length === 0) {
			return { code: '-1', data: '', msg: '用户不存在' };
		}

		if (password) {
		}

		let token = 'hjsdfhjsdj';
		return { code: '0', data: token, msg: '登录成功' };
	},
};

module.exports = UserService;
