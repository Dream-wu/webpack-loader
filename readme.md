# 一、安装的基本插件
## 安装webpack 三大件：
webpack
webpack-cli
webpack-dev-server

## 第二步：处理JS的插件 
处理JS -> ES6,ES7：
babel-loader@7
babel-core
babel-preset-env

babel-plugin-transform-runtime(ES8)

babel-plugin-transform-decorators(装饰器)
babel-plugin-transform-decorators-legacy(装饰器)


## 第三步：处理样式文件
处理sass -> css -> style
sass-loader
node-sass
css-loader
style-loader(放到内部样式表)

postcss-loader autoprefixer(自动加css前缀，可配置浏览器版本) autofixer是postcss的功能插件，主要是给css中的一些属性添加-webkit-这种前缀做兼容的，postcss-loader则是webpack的loader组件，主要作用是webpack在读取css模块的时候调用postcss和postcss的插件处理css内容的。


## 第四步：处理模板
ejs -> ejs-loader

## 第五步：处理HTML
html-webpack-plugin

# 其他
--save-dev 简写：-D     安装在开发环境下(以上安装在开发环境即可)
--save     简写：-S     安装在线上环境

# 二、配置webpack.config.js
## 1、根目录下新建webpack.config.js文件（比较头疼的部分）
文件导出的是一个对象，用module.exports={}
对象中有几个部分：


# 三、配置启动想脚本命令 package.json


# 四、启动
npm run dev 启动
报错：Error: Cannot find module 'webpack-cli/bin/config-yargs'
原因：webpack-cli4  要换成webpack-cli@3


# 五、模板编译loader



