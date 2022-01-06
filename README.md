# vue3结合vue-cli4搭建

## 安装vue-cli4.x的脚手架
    npm i -g @vue-cli
## 目录结构(模仿element-ui)
    libary_ui
        |______dist打包文件
        |______examples本地演示案例
        |______node_modules
        |______packagages发布到npm上的组件
        |______public
        |______gitgnore
        |______npmignore打包忽视文件
        |______.......

## vue.congfig.jse配置打包入口文件和扩展webpack配置,将packages加入编译
    const path = require('path')
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
## package.json 配置打包命令&npm发布配置
    打包命令 ："lib": "vue-cli-service build --target lib packages/index.js"
    npm发布配置："private"改为 false;  添加main入口："main":"dist/libary_ui_lihui.umd.min.js"
    "main":"dist/libary_ui_lihui.umd.min.js" 就是打包后的js文件