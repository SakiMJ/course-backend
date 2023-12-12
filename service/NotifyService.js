const svgCaptcha = require('svg-captcha');
const redisconfig = require('../config/redisConfig');
const aliyunMessage = require('../config/aliyunMessage');
const dayjs = require('dayjs');
const BackCode = require('../utils/BackCode.js');
const CodeEnum = require('../utils/CodeEnum.js');
const NotifyService = {
	captcha: (key, type) => {
		let captcha = svgCaptcha.create({
			size: 4, // 验证码⻓度
			ignoreChars: '0o1i', // 验证码字符中排除 0o1i
			noise: 1, //⼲扰线
			background: '#aaa', // 背景颜⾊
		});
		redisconfig.set(`${type}:captcha:${key}`, captcha.text, 600);

		return captcha.data;
	},
	sendCode: async (phone, captcha, type, key, randomCode) => {
		// if (await redisconfig.exists(`${type}:over:${phone}`)) {
		//   return BackCode.buildResult(CodeEnum.CODE_LIMITED);
		// }

		//方案二
		if (await redisconfig.exists(`${type}:code:${phone}`)) {
			let dateRedis = dayjs(
				Number(
					(await redisconfig.get(`${type}:code:${phone}`)).split(
						'_'
					)[0]
				)
			);

			if (dayjs(Date.now()).diff(dateRedis, 'second') <= 60) {
				return BackCode.buildResult(CodeEnum.CODE_LIMITED);
			}
		}

		if (!(await redisconfig.exists(`${type}:captcha:${key}`))) {
			return BackCode.buildError({ msg: '请发送图形验证码' });
		}

		if (!captcha) {
			return BackCode.buildError({ msg: '缺少captch参数' });
		}

		let captchaRedis = await redisconfig.get(`${type}:captcha:${key}`);
		if (!(String(captcha).toLowerCase() === captchaRedis.toLowerCase())) {
			return BackCode.buildError({ msg: '图形验证码错误' });
		}

		let codeRes = (await aliyunMessage(phone, randomCode)).data;
		// //设置手机验证码
		// redisconfig.set(`${type}:code:${phone}`, randomCode, 600);
		// //设置60秒判断的key
		// redisconfig.set(`${type}:over:${phone}`, '1', 60);

		//获取当前时间拼接验证码，优化方案二
		let randomCodeTime = `${Date.now()}_${randomCode}`;
		redisconfig.set(`${type}:code:${phone}`, randomCodeTime, 600);

		//删除发送验证码使用的图形验证码
		redisconfig.del(`${type}:captcha:${key}`);

		if (codeRes.code == '0') {
			return BackCode.buildSuccessAndMsg({ msg: '发送成功' });
		} else {
			return BackCode.buildError({ msg: '发送失败' });
		}
	},
};

module.exports = NotifyService;
