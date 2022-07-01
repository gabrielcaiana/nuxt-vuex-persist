export const state = () => ({
  user: {
    name: '',
    email: '',
  },
})

export const getters = {
  getUser: (state) => state.user,
}

export const mutations = {
  SET_USER: (state, payload) => {
    state.user = payload
  },
}
