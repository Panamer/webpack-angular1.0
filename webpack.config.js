/**
 * Created by 刘凯 on 2017/6/8.
 */
var path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //访问内置的插件
var projectRoot = path.resolve(__dirname, '../');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        vendor: ['angular', 'angular-ui-router'],
        app: [
            'webpack-dev-server/client?http://localhost:8082/',
            "./src/index.js",
            // 为 webpack-dev-server 的环境打包代码
            // 然后连接到指定服务器域名与端口，可以换成本机ip
            'webpack/hot/only-dev-server'
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
        filename: "[name].[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',  // 在babel-loader对源码进行编译前进行lint的检查
                include: projectRoot,  // src文件夹下的文件需要被lint
                use: [{
                    loader: 'eslint-loader',
                    options: {
                        emitWarning: true,
                        emitError: true,
                        failOnError: true,
                        formatter: require("eslint-friendly-formatter")
                    }
                }],
                exclude: /node_modules/ //可以不用定义这个字段的属性值，eslint会自动忽略node_modules和bower_
            },
            {
                test: /\.(html)$/,
                include: /src/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.js$/,
                include: /src/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin("styles.css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            // ( 公共chunk(commnons chunk) 的名称)

            filename: "vendor.[hash].js"
            // ( 公共chunk 的文件名)

            // minChunks: 3,
            // (模块必须被3个 入口chunk 共享)

            // chunks: ["pageA", "pageB"],
            // (只使用这些 入口chunk)
        })
    ]
};
