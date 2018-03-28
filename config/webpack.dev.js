const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const webpackCommon = require('./webpack.common');
const NODE_ENV = process.env.NODE_ENV;
const env = 'process.env.NODE_ENV';

module.exports = () => webpackMerge(webpackCommon(), {
    optimization: {
        splitChunks: {
            cacheGroups: {
                bundle: {
                    chunks: 'initial',
                    name: 'bundle'
                }
            }
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            [env]: JSON.stringify(NODE_ENV)
        })
    ],
    devServer: {
        port: 3030
    }
});