import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]

const state = {
    layers: [],
    curZIndex: 0
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
        console.log(type)
        commit(types.ADD_LAYER, type)
    }
}

// mutations
const mutations = {

    [types.ADD_LAYER] (state, { type }) {
        state.layers.forEach((layer) => {
            layer.selected = false
        })
        state.layers.push({
            content: '请输入的文字',
            style: {
                position: 'absolute',
                left: Math.random() * 300 + 'px',
                top: Math.random() * 300 + 'px',
                'background-color': 'green',
                height: 'auto',
                width: '200px',
                zIndex: state.curZIndex + 1
            },
            selected: true,
            type
        })
        state.curZIndex++
    },

    [types.EDIT_LAYER] (state, { id }) {
        state.lastCheckout = null
        const record = state.added.find(p => p.id === id)
        if (!record) {
            state.added.push({
                id,
                quantity: 1
            })
        } else {
            record.quantity++
        }
    },

    [types.DELETE_LAYER] (state) {
        state.added = []
        state.checkoutStatus = null
    },

    [types.SAVE_LAYER] (state) {
        state.checkoutStatus = 'successful'
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}
