const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './client.js',
	output: {
		path: path.resolve(`${__dirname}/dist`),
		filename: 'punctuations.min.js',
		library: 'punctuations'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({minimize: true})
	]
};

