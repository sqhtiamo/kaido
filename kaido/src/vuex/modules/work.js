import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]

const state = {
    layers: [],
    layerNum: 0,
    curIndex: -1
}

// getters
const getters = {
    layerFormatData: state => {
        return state.layers.map((layer) => {
            return {
                style: Object.keys(layer.style).map((styleKey) => {
                    return styleKey + ':' + layer.style[styleKey] + ';'
                }).join(''),
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
        state.layers.forEach((layer) => {
            layer.selected = false
        })
        state.layerNum++
        state.layers.push({
            content: '请输入的文字',
            style: {
                position: 'absolute',
                left: Number(Math.random() * 200) + 'px',
                top: Number(Math.random() * 300) + 'px',
                'text-align': 'center',
                height: 'auto',
                width: '200px',
                padding: '10px',
                'background-color': '#00ff00',
                color: '#ffffff',
                zIndex: state.layerNum
            },
            selected: true,
            type,
            index: state.layerNum
        })
        state.curIndex = state.layerNum
    },

    [types.UPDATE_LAYER] (state, {index, options}) {
        const layer = state.layers.find(p => p.index === index)
        Object.keys(options).forEach((styleKey) => {
            layer.style[styleKey] = options[styleKey]
        })
        console.log(layer)
        // const record = state.added.find(p => p.id === id)
        // if (!record) {
        //     state.added.push({
        //         id,
        //         quantity: 1
        //     })
        // } else {
        //     record.quantity++
        // }
    },

    [types.DELETE_LAYER] (state) {
        state.added = []
        state.checkoutStatus = null
    },

    [types.SAVE_LAYER] (state) {
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}
