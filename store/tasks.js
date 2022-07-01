export const state = () => ({
  tasks: [],
})

export const getters = {
  getTasks: (state) => state.tasks,
}

export const mutations = {
  SET_TASKS: (state, payload) => state.tasks.push(payload),
}
