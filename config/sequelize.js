const { Sequelize } = require('sequelize');

const initModels = require('../models/init-models');

const sequelize = new Sequelize('xdclass-edu', 'root', 'xdclass.net168', {
	host: '121.41.166.120',
	dialect: 'mysql',
	timezone: '+08:00',
});

const models = initModels(sequelize);

(async function () {
	try {
		await sequelize.authenticate();
		console.log('数据库连接成功 successfully.');
	} catch (error) {
		console.error('数据库连接失败 database:', error);
	}
})();

module.exports = { ...models, sequelize };
