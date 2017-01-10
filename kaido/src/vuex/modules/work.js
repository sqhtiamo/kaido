import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]

const state = {
    curLayer: {
        layers: [],
        layerNum: 0,
        curIndex: -1
    },
    pages: [{
        layers: [],
        layerNum: 0,
        curIndex: -1
    }],
    curPage: 1
}

// getters
const getters = {
    layerFormatData: state => {
        return state.curLayer.layers.map((layer) => {
            return {
                style: Object.keys(layer.style).map((styleKey) => {
                    return styleKey + ':' + layer.style[styleKey] + ';'
                }).join(''),
                index: layer.index,
                content: layer.content
            }
        })
    }
}

// actions
const actions = {
    addLayer ({ commit, state }, type) {
        commit(types.ADD_LAYER, type)
    },

    updateLayer ({ commit, state }, {index, options}) {
        commit(types.UPDATE_LAYER, {index, options})
    },

    selectLayer ({ commit, state }, {index}) {
        commit(types.SELECT_LAYER, {index})
    },

    selectPage ({commit, state}, {pageIndex}) {
        commit(types.SAVE_LAYER)
        commit(types.SELECT_PAGE, {pageIndex})
    },

    addPage ({commit, state}) {
        commit(types.SAVE_LAYER)
        commit(types.ADD_PAGE)
    },

    deletePage ({commit, state}, {pageIndex}) {
        commit(types.DELETE_PAGE, {pageIndex})
    },

    saveWork ({ commit, state }) {
        // this.$http.get('/someUrl').then((response) => {
        // // success callback
        // }, (response) => {
        // // error callback
        // })
    }
}

// mutations
const mutations = {

    [types.ADD_LAYER] (state, { type }) {
        state.curLayer.layers.forEach((layer) => {
            layer.selected = false
        })
        state.curLayer.layers.push({
            content: '请输入的文字',
            style: {
                position: 'absolute',
                left: Number(Math.random() * 200) + 'px',
                top: Number(Math.random() * 300) + 'px',
                'text-align': 'center',
                height: 'auto',
                width: '200px',
                padding: '10px',
                opacity: 1,
                'background-color': 'transparent',
                color: '#000',
                // 'line-height': '16',
                zIndex: state.curLayer.layerNum
            },
            selected: true,
            type,
            index: state.curLayer.layerNum
        })
        state.curLayer.curIndex = state.curLayer.layerNum
        state.curLayer.layerNum++
    },

    [types.UPDATE_LAYER] (state, {index, options}) {
        const layer = state.curLayer.layers.find(p => p.index === index)
        Object.keys(options).forEach((styleKey) => {
            layer.style[styleKey] = options[styleKey]
        })
    },

    [types.SELECT_LAYER] (state, {index}) {
        state.curLayer.curIndex = index
    },

    [types.DELETE_LAYER] (state) {
        state.added = []
        state.checkoutStatus = null
    },

    [types.SAVE_LAYER] (state) {
        state.pages[state.curPage - 1] = state.curLayer
    },

    [types.ADD_PAGE] (state) {
        state.curLayer = {
            layers: [],
            layerNum: 0,
            curIndex: -1
        }
        state.pages.push(state.curLayer)
        state.curPage = state.pages.length
    },

    [types.SELECT_PAGE] (state, {pageIndex}) {
        state.curLayer = state.pages[pageIndex]
        state.curPage = pageIndex + 1
    },

    [types.DELETE_PAGE] (state, {pageIndex}) {
        // 如果只剩一页不得删除
        if (state.pages.length === 1) {
            return
        }

        console.log(pageIndex)
        state.pages.splice(pageIndex, 1)
        // 删除的是最后一个
        if (pageIndex === state.pages.length) {
            state.curPage--
        }
        // 删除之后当前layer展示下一页
        state.curLayer = state.pages[state.curPage - 1]
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
