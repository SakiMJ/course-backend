const axios = require('axios');

const appId = 'wx5beac15ca207c40c';
const appSecret = '8189e5f14346ccaa3bd5f6909f31a362';
const accessTokenPc = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${appSecret}`;

//获取微信access_token
const getAccess_token = () => {
	return axios({
		method: 'get',
		url: accessTokenPc,
	});
};

//获取拼接微信二维码ticket
const ticketReq = (token) => {
	return axios({
		method: 'post',
		url: `https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=${token}`,
		data: {
			expire_seconds: 60 * 2, // ⼆维码有效时间
			action_name: 'QR_SCENE',
			action_info: { scene: { scene_id: 123 } },
		},
	});
};

//获取微信二维码url
const qrUrl = 'https://mp.weixin.qq.com/cgi-bin/showqrcode';
const wechatLogin = {
	// 获取微信登录⼆维码
	getQR: async () => {
		let token = (await getAccess_token()).data.access_token;
		console.log(await getAccess_token());
		console.log('token:', token);
		let ticket = (await ticketReq(token)).data.ticket;
		return { qrcodeUrl: `${qrUrl}?ticket=${ticket}`, ticket: ticket };
	},
};

module.exports = wechatLogin;
