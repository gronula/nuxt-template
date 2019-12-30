export const state = () => ({
  todoItems: [],
})

export const getters = {
  todoItems: s => s.todoItems,
}

export const mutations = {
  getTodos(state) {
    state.todoItems = JSON.parse(localStorage.getItem('todoItems') || '[]')
  },
  createTodo(state, item) {
    state.todoItems.push(item)

    localStorage.setItem('todoItems', JSON.stringify(state.todoItems))
  },
  clearTodos(state) {
    state.todoItems = []
    localStorage.setItem('todoItems', JSON.stringify(state.todoItems))
  },
}

export const actions = {
  getTodos({ commit }) {
    commit('getTodos')
  },
  createTodo({ commit }, item) {
    commit('createTodo', item)
  },
  clearTodos({ commit }) {
    commit('clearTodos')
  },
}
