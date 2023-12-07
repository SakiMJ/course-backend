const axios = require('axios');
const AppCode = 'a064508830c54b8f818e79a7455625e5';
const sendLoginMsgCode = (phone, randomCode) => {
	return axios({
		method: 'post',
		param: {
			'**code**': randomCode,
			'**minute**': '5分钟',
		},
		url: `https://gyytz.market.alicloudapi.com/sms/smsSend?mobile=${phone}&templateId=908e94ccf08b4476ba6c876d13f084ad&smsSignId=2e65b1bb3d054466b82f0c9d125465e2`,
		headers: { Authorization: 'APPCODE ' + AppCode },
	});
};

module.exports = sendLoginMsgCode;
