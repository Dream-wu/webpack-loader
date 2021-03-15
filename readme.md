# 模板编译loader示例
## 1、定义一个Loader函数，并导出
接收一个source字符串，并返回一个处理后的字符串
```javascript
module.exports = function (source) {
    return source.replace(/console\.log\(.*\);?\n/g, '');
}
```
## 2、webpack.config.js 配置本地loader
```javascript
{
    test: /\.js$/,
    use: ['babel-loader', {
        loader: path.resolve(__dirname, 'loaders/cleanlog-loader')
    } ],
    exclude: path.resolve(__dirname, 'node_modules'),
}
```


