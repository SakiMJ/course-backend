class RandomTool {
	static randomcode() {
		return Math.floor(Math.random() * (9999 - 1000) + 1000);
	}
}

module.exports = RandomTool;