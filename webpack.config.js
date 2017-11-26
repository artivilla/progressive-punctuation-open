const path = require('path');

module.exports = {
	entry: './client.js',

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	},

	output: {
		path: path.resolve(`${__dirname}/dist`),
		filename: 'punctuations.js',
		library: 'punctuations'
	}
};
