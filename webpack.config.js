var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	plugins: [commonsPlugin],
	entry: {
		react: './public/jsx/react.js',
		reactdom: './public/jsx/react-dom.js',
		ReactRouter: './public/jsx/ReactRouter.js',
		app: './public/jsx/app.js',
		example: './public/jsx/example.js'
	},
	output: {
		path: 'public/js',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/, exclude: /node_modules/, loader: 'babel'
			}
			// {
			// 	test: /\.js$/, loader: 'babel!jsx-loader?harmony'
			// }
		]
	},
	resolve: {
		root: './public/js/',
		alias: {
			'app': 'app.js',
			'react': 'react.js'
		}
	}
};