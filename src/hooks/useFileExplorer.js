const fs = require('fs');
const path = require('path');

module.exports = {
	useCurrentDirectoryBase: () => {
		return path.basename(process.cwd());
	},

	useDirectoryExists: (filePath) => {
		return fs.existsSync(filePath);
	}
};
