import Vue from 'vue'
import VueRouter from 'vue-router'
// 登陆页面
import LoginPage from './components/LoginPage'
// 主页面
import MainPage from './components/MainPage'
// store仓库
import store from './vuex/store'

import './assets/reset.css'

Vue.use(VueRouter)

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
const router = new VueRouter()

// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
router.map({
    '/login': {
        component: LoginPage
    },
    '/': {
        component: MainPage
    }
})

// 现在我们可以启动应用了！
const App = Vue.extend({
    store
})

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')
