var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	plugins: [commonsPlugin],
	entry: {
		example: './public/jsx/example.js'
	},
	output: {
		path: 'public/js',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/, loader: 'jsx-loader?harmony'
			}
		]
	}
};