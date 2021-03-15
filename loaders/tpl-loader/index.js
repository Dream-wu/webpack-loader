const { tplReplace } = require('../utils.js');
// tplLoader本身是拿不到传入的Option配置选项的，需要借助一个工具
const { getOptions } = require('loader-utils');

function tplLoader(source) {
    source = source.replace(/\s+/g, '');
    const { log } = getOptions(this);
    const _log = log ? `console.log('compiled the file which is from ${ this.resourcePath}')` : '';
    console.log('log:', _log, _log.toString()) 
    return `
        export default (options) => {
            ${ tplReplace.toString() }
            ${ _log.toString()}
            return tplReplace('${source}', options);
        }
    `
}
module.exports = tplLoader;