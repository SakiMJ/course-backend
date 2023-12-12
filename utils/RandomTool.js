class RandomTool {
	//随机生成四位数
	static randomcode() {
		return Math.floor(Math.random() * (9999 - 1000) + 1000);
	}
	//随机生成头像
	static randomAvatar() {
		let imgList = [
			'https://xd-video-pc-img.oss-cnbeijing.aliyuncs.com/xdclass_pro/default/head_img/10.jpeg',
			'https://xd-video-pc-img.oss-cnbeijing.aliyuncs.com/xdclass_pro/default/head_img/11.jpeg',
			'https://xd-video-pc-img.oss-cnbeijing.aliyuncs.com/xdclass_pro/default/head_img/12.jpeg',
			'https://xd-video-pc-img.oss-cnbeijing.aliyuncs.com/xdclass_pro/default/head_img/13.jpeg',
			'https://xd-video-pc-img.oss-cnbeijing.aliyuncs.com/xdclass_pro/default/head_img/14.jpeg',
			'https://xd-video-pc-img.oss-cnbeijing.aliyuncs.com/xdclass_pro/default/head_img/15.jpeg',
			'https://xd-video-pc-img.oss-cnbeijing.aliyuncs.com/xdclass_pro/default/head_img/16.jpeg',
			'https://xd-video-pc-img.oss-cnbeijing.aliyuncs.com/xdclass_pro/default/head_img/17.jpeg',
			'https://xd-video-pc-img.oss-cnbeijing.aliyuncs.com/xdclass_pro/default/head_img/18.jpeg',
			'https://xd-video-pc-img.oss-cnbeijing.aliyuncs.com/xdclass_pro/default/head_img/19.jpeg',
		];
		let num = Math.floor(Math.random() * 10);
		return imgList[num];
	}
	//随机生成昵称
	static randomName() {
		let name = [
			'编程⼩⽩23423',
			'编程⼩⽩94352',
			'编程⼩⽩46597',
			'编程⼩⽩46236',
			'编程⼩⽩73453',
			'编程⼩⽩07848',
			'编程⼩⽩44462',
			'编程⼩⽩36688',
			'编程⼩⽩23665',
			'编程⼩⽩84562',
		];
		let num = Math.floor(Math.random() * 10);
		return name[num];
	}
}

module.exports = RandomTool;
