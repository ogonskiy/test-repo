const state = {
  modalWindow: {
    text: '',
    status: true
  }
}

const mutations = {
  'SET_MODAL_WINDOW' (state, payload) {
    state.modalWindow = payload
    setTimeout(() => {
      state.modalWindow = {
        text: '',
        status: true
      }
    }, 3000)
  }
}

const actions = {
  setModalWindow: ({commit}, payload) => {
    commit('SET_MODAL_WINDOW', payload)
  }
}

const getters = {
  modalWindow: state => {
    return state.modalWindow
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
