const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    mode: 'development',   // dev（不带注释等） prod
    entry: {
        app: path.resolve(__dirname, './src/app.js'),
        // list: path.resolve(__dirname, './src/js/list.js')  // 多页面开发
    },
    output: {
        path: path.resolve(__dirname + '/dist'),  // 打包到哪一个文件夹下
        filename: '[name].js',  // name是规则
    },
    module: {  // 创建模块时，匹配请求的规则数组。这些规则能够修改模块的创建方式。 这些规则能够对模块(module)应用 loader，或者修改解析器(parser)。
        rules: [{   // 模块打包规则
            test: /\.js$/,   // 匹配文件后缀名
            use: ['babel-loader', {
                loader: path.resolve(__dirname, 'loaders/cleanlog-loader')
            } ],
            exclude: path.resolve(__dirname, 'node_modules'),
        }, {
            test: /\.css$/,
            use: ['style-loader','css-loader']   // 从右到左倒着处理，先处理css-loader,再处理style-loader
        }, {
            test: /\.scss$/,
            use: ['style-loader','css-loader', 'scss-loader']
        }, {
            test: /\.tpl$/,
            use: [
                'babel-loader',
                {
                    loader: path.resolve(__dirname, 'loaders/tpl-loader'),
                    options: {
                        log: true
                    }
                }
            ]
        }] 
    },
    plugins: [   // 里面都是实例化对象
        new HtmlWebpackPlugin({   // 每个插件基本都是一个构造函数
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html'),
            chunks: ['app'],
            excludeChunks: ['node_modules']
        })
    ],
    devServer: {   // 开发服务器
        open: true,   // 启动项目后，自动打开浏览器
        host: 'localhost',
        port: 8014
    }
}