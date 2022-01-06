import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/font/iconfont.css'
//本地测试
import defiendButton from './components/button/defined_button.vue'
import defiendDialog from './components/dialog/defined_dialog.vue'
import definedIcon from './components/icon/defined_icon.vue'
//发布npm上的
import libaryUI from '../packages/index'
let app = createApp(App);
app.use(libaryUI)
app.component(defiendButton.name,defiendButton)
app.component(defiendDialog.name,defiendDialog)
app.component(definedIcon.name,definedIcon)
app.use(store).use(router).mount('#app')
