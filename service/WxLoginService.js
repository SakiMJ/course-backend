const SecretTool = require('../utils/SecretTool.js');
const { getQR } = require('../config/wechatLogin');
const redisconfig = require('../config/redisConfig.js');
const BackCode = require('../utils/BackCode.js');
const WxDataTool = require('../utils/WxDataTool.js');
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
	wechat_message: async (req) => {
		let xmlData = await WxDataTool.getXMLStr(req);
		let objectData = await WxDataTool.getObject(xmlData);
		let lastData = WxDataTool.getLastData(objectData.xml);
		return '成功';
	},
};

module.exports = WxLoginService;
