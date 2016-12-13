// vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'
import viewport from './modules/viewport'

import * as actions from './actions'
import * as getters from './getters'
// import cart from './modules/cart'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,

    // 组合各个模块
    modules: {
        viewport
    }
})
