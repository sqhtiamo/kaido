import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]

const state = {
    layers: [],
    curZIndex: 0
}

// getters
const getters = {
    checkoutStatus: state => state.checkoutStatus
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
        console.log(21)
        state.layers.push({
            content: '请输入的文字',
            style: {
                zIndex: state.curZIndex + 1
            },
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
