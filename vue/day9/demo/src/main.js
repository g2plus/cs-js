//vue2
import Vue from 'vue'
import App from './App.vue'
import router from './router'

//导入elementui
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

//使用elementui
Vue.use(ElementUI)

const app = new Vue({
    router, render: h => h(App)
})

app.$mount('#app')
