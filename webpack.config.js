var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var copy = require('quickly-copy-file');
var del = require('del');

var isDev = function(){
	return process.env.NODE_ENV.trim() === 'development';
}

var isProd = function(){
	return process.env.NODE_ENV.trim() === 'production';
}

operateFiles();

module.exports = {
	plugins: getPlugins(),
	devtool: isProd() ? false : 'inline-source-map',
	entry: {
		index: './js/index.js',
		vendor: [
			'react',
			'react-dom',
			'react-router'
		]
	},
	output: {
		path: './dist',
		filename: isProd() ? '[name].[chunkhash:8].js' : '[name].js',
		chunkFilename: isProd() ? '[name].chunk.[chunkhash:8].js' : '[name].chunk.js',
		publicPath: isProd() ? './dist/' : '/dist/'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style', 'css', {
					publicPath: '.'
				})
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'file?name=/[name].[hash:8].[ext]'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader/webpack', 'babel?presets[]=react,presets[]=es2015']
			}
		]
	}
	// resolve: {}
};

function operateFiles(){
	var file = 'html/index.html';
	copy(file, 'index.html', function(err){
		if (err){
			return console.log(err);
		}
	});
	if (isProd()) del(['dist']);
}

function getPlugins(){
	var plugins = [
		new webpack.DefinePlugin({
			__DEV__ : isDev(),
			__PROD__: isProd(),
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV.trim())
		}),
		new webpack.optimize.CommonsChunkPlugin('vendor', isProd() ? 'vendor.[chunkhash:8].js' : 'vendor.js'),
		new ExtractTextPlugin(isProd() ? '[name].[chunkhash:8].css' : '[name].css')
	];

	if (isDev()){
		plugins.push( new OpenBrowserPlugin({ url: 'http://localhost:8080' }) );
	}

	if (isProd()){
		plugins.push(
			new webpack.optimize.UglifyJsPlugin({
				minimize: true,
				output: {
					comments: false,
				},
				compress: {
					warnings: false
				}
			}),
			new WebpackMd5Hash()
		);
	}

	return plugins
}