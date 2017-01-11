import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]

const state = {
    curPage: {
        layers: [],
        layerNum: 0,
        curIndex: -1,
        selectState: false
    },
    pages: [{
        layers: [],
        layerNum: 0,
        curIndex: -1
    }],
    curPageNum: 1
}

const styleKeys = {
    plainKey: ['color', 'background-color', 'border-color', 'opacity', 'zIndex'],
    pxKey: ['border-width', 'border-radius', 'width', 'line-height', 'font-size'],
    optKey: []
}
// getters
const getters = {
    layerFormatData: state => {
        return state.curPage.layers.map((layer) => {
            return {
                style: Object.keys(layer.style).map((styleKey) => {
                    if (styleKeys.plainKey.indexOf(styleKey) !== -1) {
                        return styleKey + ':' + layer.style[styleKey] + ';'
                    } else if (styleKeys.pxKey.indexOf(styleKey) !== -1) {
                        console.log(styleKey)
                        return styleKey + ':' + layer.style[styleKey] + 'px;'
                    }
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

    saveLayer ({commit, state}) {
        commit(types.SAVE_LAYER)
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
        state.curPage.layers.forEach((layer) => {
            layer.selected = false
        })
        state.curPage.layers.push({
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
                'border-width': '0',
                'border-radius': '0',
                'border-style': 'solid',
                'border-color': '#000000',
                color: '#000',
                'font-size': 14,
                'line-height': 16,
                zIndex: state.curPage.layerNum
            },
            selected: true,
            type,
            index: state.curPage.layerNum
        })
        state.curPage.selectState = true
        state.curPage.curIndex = state.curPage.layerNum
        state.curPage.layerNum++
    },

    [types.UPDATE_LAYER] (state, {index, options}) {
        const layer = state.curPage.layers.find(p => p.index === index)
        Object.keys(options).forEach((styleKey) => {
            console.log(styleKey)
            console.log(styleKeys)
            layer.style[styleKey] = options[styleKey]
        })
    },

    [types.SELECT_LAYER] (state, {index}) {
        state.curPage.selectState = true
        state.curPage.curIndex = index
    },

    [types.DELETE_LAYER] (state) {
        state.added = []
        state.checkoutStatus = null
    },

    [types.SAVE_LAYER] (state) {
        state.curPage.selectState = false
        state.pages[state.curPageNum - 1] = state.curPage
    },

    [types.ADD_PAGE] (state) {
        state.curPage = {
            layers: [],
            layerNum: 0,
            curIndex: -1,
            selectState: false
        }
        state.pages.push(state.curPage)
        state.curPageNum = state.pages.length
    },

    [types.SELECT_PAGE] (state, {pageIndex}) {
        state.curPage = state.pages[pageIndex]
        state.curPageNum = pageIndex + 1
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
            state.curPageNum--
        }
        // 删除之后当前layer展示下一页
        state.curPage = state.pages[state.curPageNum - 1]
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
