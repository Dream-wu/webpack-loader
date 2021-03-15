module.exports = function (source) {
    return source.replace(/console\.log\(.*\);?\n/g, '');
}