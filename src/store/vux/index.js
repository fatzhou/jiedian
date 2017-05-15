const state = {
  demoScrollTop: 0,
  isLoading: false,
  direction: 'forward',
}

const mutations = {
  updateDemoPosition(state, payload) {
    state.demoScrollTop = payload.top;
  },
  updateLoadingStatus(state, payload) {
    state.isLoading = payload.isLoading;
  },
  updateDirection(state, payload) {
    state.direction = payload.direction;
  },
}

const actions ={
  updateDemoPosition({ commit }, top) {
    commit({ type: 'updateDemoPosition', top: top });
  }
}

export default {
  state,
  mutations,
  actions
}
