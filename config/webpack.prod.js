const del = require('del');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const WebpackMd5Hash = require('webpack-md5-hash');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const webpackCommon = require('./webpack.common');
const NODE_ENV = process.env.NODE_ENV;
const env = 'process.env.NODE_ENV';

del(['dist/*']);

module.exports = () => webpackMerge(webpackCommon(), {
    optimization: {
        splitChunks: {
            cacheGroups: {
                bundle: {
                    chunks: 'initial',
                    name: 'bundle'
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                uglifyOptions: {
                    compress: false,
                    mangle: true
                }
            })
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            [env]: JSON.stringify(NODE_ENV)
        }),
        new WebpackMd5Hash()
    ]
});