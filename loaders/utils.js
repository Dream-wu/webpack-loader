function tplReplace(template, replaceObject) {
    return template.replace(/\{\{(.*?)\}\}/g, (node, key) => {
        return replaceObject[key]
    })
}
// 在node服务器上运行，遵循commonjs模块规范
module.exports = {
    tplReplace
}