import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import vueDrag from './plugin/drag'

// 登陆页面
import LoginPage from './components/LoginPage'
// 主页面
import MainPage from './components/MainPage'
// 预览页面
import PreviewPage from './components/PreviewPage'
// store仓库
import store from './vuex/store'

import './assets/reset.css'

Vue.use(VueRouter)

Vue.use(VueResource)

Vue.use(vueDrag)

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置

// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
const router = new VueRouter({
    routes: [
        // 动态路径参数 以冒号开头
        {
            path: '/login',
            component: LoginPage
        },
        {

            path: '/preview',
            component: PreviewPage
        },
        {

            path: '/work',
            component: MainPage
        },
        {
            path: '/',
            component: MainPage
        }
    ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const bus = new Vue()
new Vue({
    router,
    store,
    bus
}).$mount('#app')

