const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/dist/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: "[local]__[hash:base64:5]",
                        minimize: false
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/app/index.html',
            inject: "body"
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [precss, autoprefixer]
            }
        })
    ]
};
