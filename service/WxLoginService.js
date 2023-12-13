const SecretTool = require('../utils/SecretTool.js');
const { getQR } = require('../config/wechatLogin');
const redisconfig = require('../config/redisConfig.js');
const BackCode = require('../utils/BackCode.js');

const WxLoginService = {
	wechat_insert: (signature, timestamp, nonce, echostr) => {
		let token = 'testxdclass';
		let str = SecretTool.sha1([token, timestamp, nonce].sort().join(''));

		if (signature === str) {
			return echostr;
		}
	},
	login: async () => {
		//获取二维码url
		let { qrcodeUrl, ticket } = await getQR();
		//ticket存入redis库
		let key = `wechat:ticket:${ticket}`;
		redisconfig.set(key, JSON.stringify({ isScan: 'no' }), 120);
		return BackCode.buildSuccessAndData({
			data: {
				qrcodeUrl,
				ticket,
			},
		});
	},
};

module.exports = WxLoginService;
