//暴露install方法,作为vue接受的参数，如果使用use注册插件，所有的组件都会被注册

// const install = function(){
//     console.log("pppppp")
// }

//导入封装的组件，如果有字体图标也要导进来
import button from  './button/defined_button.vue'
import dialog from  './dialog/defined_dialog.vue'
import icon from './icon/defined_icon.vue'
//祖册组件的列表
let components = [
    button,
    dialog,
    icon
]

const install  = function(Vue){
    components.forEach(componentItem=>{
        Vue.component(componentItem.name,componentItem)
    })
}
//vue官方提供了一些插件，会自动调用Vue.use()，比如vue-router
//判断是否直接引入文件，直接引入就不用调用Vue.use(),注册
if(typeof window!=='undefined' && window.Vue){
    install(window.Vue)
}

export default install