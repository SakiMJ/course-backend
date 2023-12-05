const Redis = require('ioredis');

const redis = new Redis({
	port: 6379,
	host: '121.41.166.120',
	password: 'xdclass.net',
});

const redisconfig = {
	set: (key, value, time) => {
		time ? redis.set(key, value, 'EX', time) : redis.set(key, value);
	},
	get: (key) => {
		return redis.get(key);
	},
};

module.exports = redisconfig;
