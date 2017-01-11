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
    plain: ['color', 'background-color', 'border-color', 'opacity', 'zIndex', 'border-style'],
    px: ['border-width', 'border-radius', 'width', 'line-height', 'font-size'],
    option: {
        // 'border-style': ['solid', 'dashed']
    }
}
// getters
const getters = {
    layerFormatData: state => {
        return state.curPage.layers.map((layer) => {
            return {
                style: Object.keys(layer.style).map((styleKey) => {
                    if (styleKeys.px.indexOf(styleKey) !== -1) {
                        return styleKey + ':' + layer.style[styleKey] + 'px;'
                    } else if (styleKeys.option[styleKey]) {
                        return styleKey + ':' + styleKeys.option[styleKey][layer.style[styleKey]] + ';'
                    }
                    return styleKey + ':' + layer.style[styleKey] + ';'
                }).join(''),
                animation: {
                    class: layer.animation.map((animation) => {
                        return animation.class
                    }).join(' '),
                    style: ''
                },
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
        commit(types.SAVE_LAYER)
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
            animation: [{
                class: 'tada',
                style: ''
            }],
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
