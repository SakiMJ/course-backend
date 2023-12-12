const DB = require('../config/sequelize.js');
const redisconfig = require('../config/redisConfig.js');
const RandomTool = require('../utils/RandomTool.js');
const SecretTool = require('../utils/SecretTool.js');
const BackCode = require('../utils/BackCode.js');
const CodeEnum = require('../utils/CodeEnum.js');
const UserService = {
	register: async (phone, code) => {
		let existPhone = await DB.Account.findAll({ where: { phone } });
		console.log(existPhone);
		if (existPhone.length > 0) {
			return BackCode.buildResult(CodeEnum.ACCOUNT_REPEAT);
		}

		if (await redisconfig.exists(`register:code:${phone}`)) {
			let codeRes = (
				await redisconfig.get(`register:code:${phone}`)
			).split('_')[1];

			if (!code === codeRes) {
				return BackCode.buildError({ msg: '短信验证码不正确' });
			}
		} else {
			return BackCode.buildError({ msg: '请先获取短信验证码' });
		}

		//随机生成头像和昵称
		let avatar = RandomTool.randomAvatar();
		let name = RandomTool.randomName();

		//生成token 7天过期
		let user = { avatar, name, phone };
		let token = SecretTool.jwtSign(user, '168h');

		//用户信息存入数据库
		await DB.Account.create({ username: name, head_img: avatar, phone });
		return BackCode.buildSuccessAndData({
			data: `Bearer ${token}`,
		});
	},
};

module.exports = UserService;
