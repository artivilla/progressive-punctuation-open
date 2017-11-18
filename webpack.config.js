
const path = require('path');

module.exports = {
	entry: './client.js',
	output: {
		path: path.resolve(`${__dirname}/dist`),
		filename: 'punctuations.js',
		library: 'punctuations'
	}
};
