import axios from 'axios'

export const state = () => ({
  sidebar: false,
  authUser: null,
})

export const mutations = {
  toggleSidebar(state) {
    state.sidebar = !state.sidebar
  },
  LOGIN(state, user) {
    state.authUser = user
  },
  LOGOUT() {
    state.authUser = null
  },
  SET_USER(state, user) {
    state.authUser = user
  },
  SET_MENU(state, data) {
    state.topMenu = data.topMenu
    state.aside = data.aside
  },
}

export const actions = {
  // nuxtServerInit는 모든 페이지를 서버 렌더링하기 전에 Nuxt.js에 의해 호출
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async login({ commit }, { id, pw }) {
    const { data } = await axios.post('/apis/login', { id, pw })
    if (!data.id) {
      throw new Error('로그인에 실패했습니다.')
    }
    commit('LOGIN', data.id)
  },
  async logout({ commit }) {
    await axios.post('/apis/logout').then(() => commit('LOGOUT'))
  },
  async register({ commit }, { id, pw, name }) {
    const { data } = await axios.post('/apis/register', { id, pw, name })
    if (!data.id) {
      throw new Error('등록에 실패했습니다.')
    }
    commit('LOGIN', data.id)
  },
}
