import axios from 'axios'
import { createStore } from 'vuex'
import type { User, State } from '@/types/types'

const users = createStore({
  state: {
    users: [],
    currentUser: null,
    loading: false,
    error: null,
  },
  mutations: {
    setUsers(state: State, users: [User]) {
      state.users = users
    },
    setCurrentUser(state: State, user: User) {
      state.currentUser = user
    },
    setLoading(state: State, isLoading: boolean) {
      state.loading = isLoading
    },
    setError(state: State, error: string) {
      state.error = error
    },
  },
  actions: {
    async fetchUsers({ commit }, url: string) {
      commit('setLoading', true)
      try {
        const response = await axios.get(url)
        commit('setUsers', response.data)
        commit('setCurrentUser', null)
      } catch (error) {
        commit('setError', error)
		commit('setUsers', [])
      	commit('setCurrentUser', null)
      } finally {
        commit('setLoading', false)
      }
    },
    clearUsers({ commit }) {
      commit('setUsers', [])
      commit('setCurrentUser', null)
    },
    setCurrentUser({ commit }, user) {
      commit('setCurrentUser', user)
    },
  },
  getters: {
    getUsers(state) {
      return state.users
    },
    getCurrentUser(state) {
      return state.currentUser
    },
    getLoading(state) {
      return state.loading
    },
    getError(state) {
      return state.error
    },
  },
})

export default users
