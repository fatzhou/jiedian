import { apiUserInfo } from 'api'

const state = {
  userInfo: {
    
  }
}

const mutations = {
  setUserInfo(state, payload) {
    state.userInfo = payload.userInfo;
  }
}

const actions ={
  getUserInfo({ commit }, userInfo) {
    apiUserInfo().then((res) => {
      res = res.data
      if (res.errcode === 0) {
        commit({ type: 'setUserInfo', userInfo: res.data });
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
