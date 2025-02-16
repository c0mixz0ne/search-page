import axios from 'axios'
import { createStore } from 'vuex'

const ApiUrl = import.meta.env.VITE_API_URL

console.log(ApiUrl)

const users = createStore({
  state: {
    users: [],
    currentUser: null,
    loading: false,
    error: null,
  },
  mutations: {
    setUsers(state: any, users: any) {
      state.users = users
    },
    setCurrentUser(state: any, user: any) {
      state.currentUser = user
    },
    setLoading(state: any, isLoading: any) {
      state.loading = isLoading
    },
    setError(state: any, error: any) {
      state.error = error
    },
  },
  actions: {
    async fetchUsers({ commit }: any, url: string) {
      commit('setLoading', true)
      try {
        const response = await axios.get(url)
        commit('setUsers', response.data)
        commit('setCurrentUser', null)
      } catch (error) {
        commit('setError', error)
      } finally {
        commit('setLoading', false)
      }
    },
    clearUsers({ commit }: any) {
      commit('setUsers', [])
      commit('setCurrentUser', null)
    },
    setCurrentUser({ commit }: any, user) {
      commit('setCurrentUser', user)
    },
  },
  getters: {
    getUsers(state: any) {
      return state.users
    },
    getCurrentUser(state: any) {
      return state.currentUser
    },
    getLoading(state: any) {
      return state.loading
    },
    getError(state: any) {
      return state.error
    },
  },
})

export default users
