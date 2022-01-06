const path = require('path')
// examples主要是后期UI组件库做测试的，也可以删掉--不建议删除，  
//packages 是核心，打包的就是packages
module.exports = {
    publicPath:'./',
    pages: {
        index: {
            // page 的入口
            entry: 'examples/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html'
        }
    },
    //扩展webpack配置,将packages加入编译,
    chainWebpack: config => {
        config.module
            .rule('js')
            .include.add(path.resolve(__dirname,'packages')).end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
    }
}