const city = window.sessionStorage.getItem('city')
const state = {
  curCity: city ? JSON.parse(window.sessionStorage.getItem('city')) : null
}
const mutations = {
  SET_CURCITY (state, payload) {
    state.curCity = payload
    window.sessionStorage.setItem('city', JSON.stringify(state.curCity))
  }
}
const getters = {
  curCityName (state) {
    return state.curCity ? state.curCity.name : ''
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations
}
