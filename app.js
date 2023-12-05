const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const { expressjwt: jwt } = require('express-jwt');
const { jwtSecretKey } = require('./config/jwtSecretKey');
app.use(cors());

const DB = require('./config/sequelize');

// 解析json数据格式
app.use(bodyParser.json());
// 解析urlencoded字符数据格式 false：返回的对象属性值为string或者array，true：任何类型
app.use(bodyParser.urlencoded({ extended: false }));

//用户认证中间件
app.use(
	jwt({ secret: jwtSecretKey, algorithms: ['HS256'] }).unless({
		path: [
			/^\/api\/user\/v1\/register/, //注册
			/^\/api\/user\/v1\/login/, //登录
			/^\/api\/notify\/v1/,
		],
	})
);
const notifyRouter = require('./router/notify');
app.use('/api/notify/v1', notifyRouter);

app.use((err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {
		return res.send({ code: -1, data: null, msg: '请先登录！' });
	}
	//其他的错误
	res.send({ code: -1, data: null, msg: err.message });
});

app.listen(8081, () => {
	console.log('服务器启动成功');
});
