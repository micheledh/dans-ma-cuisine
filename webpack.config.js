var webpack = require('webpack');
var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var HTMLPlugin = new HTMLWebpackPlugin({
    filename: 'index.html',
    template: APP_DIR + '/index.tmp.html'
});

module.exports = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: "/"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: APP_DIR,
                use: [
                    'babel-loader',
                    {
                        loader: 'eslint-loader',
                        options: {
                            failOnError: true
                        }
                    }
                ]
            },
            {
                test: /\.jsx$/,
                include: APP_DIR,
                use: [
                    'babel-loader',
                    {
                        loader: 'eslint-loader',
                        options: {
                            failOnError: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                include: APP_DIR,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [require('autoprefixer')]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                include: APP_DIR,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        },
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.svg$/,
                include: APP_DIR,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 65000,
                            mimetype: 'image/svg+xml',
                            name: '[name]_[hash:base64:5].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:base64:5].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.jpg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:base64:5].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        modules: [APP_DIR, 'node_modules'],
        extensions: ['.js', '.jsx']
    },
    plugins: [
        HTMLPlugin,
        new ExtractTextPlugin('styles.css')
    ]
};