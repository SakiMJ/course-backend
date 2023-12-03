const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
// const userRouter = require('roter/user.js');
// app.use('/api/user/v1', userRouter);

app.get('/test', (req, res) => {
	res.send('请求成功');
});

app.listen(8081, () => {
	console.log('服务器启动成功');
});
