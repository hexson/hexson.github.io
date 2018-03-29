const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const dev = NODE_ENV === 'development';

const package = fs.readFileSync('package.json', 'utf8');
let { version } = JSON.parse(package);

module.exports = () => ({
    entry: {
        app: './src/index.js',
        bundle: './src/bundle.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: dev ? `${version}/[name].js` : `${version}/[name].[chunkhash:8].js`,
        chunkFilename: dev ? `${version}/[name].chunk.js` : `${version}/[name].chunk.[chunkhash:8].js`
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.json', '.css', '.less']
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/,
                use: 'url-loader?name=/[name].[hash:8].[ext]&limit=10240'
            },
            {
                test: /\.(css|less)$/,
                use: [
                    'style-loader',
                    dev ? 'css-loader' : 'css-loader?minimize',
                    'less-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'es2015']
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './public/favicon.ico',
            title: 'hexson'
        }),
        new CopyWebpackPlugin([
            {
                from: './public',
                to: './'
            }
        ])
    ]
});