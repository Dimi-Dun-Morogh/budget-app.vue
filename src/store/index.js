import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    list: {
      1: {
        type: 'INCOME',
        value: 100,
        comment: 'amg a payday!',
        id: 1,
      },
      2: {
        type: 'Outcome',
        value: -50,
        comment: 'McDonalds Takeout',
        id: 2,
      },
    },
  },
  mutations: {
    ADD_LIST_VAL(state, value) {
      Vue.set(state.list, value.id, value);
      console.log(state.list);
    },
    DELETE_LIST_VAL(state, id) {
      Vue.delete(state.list, id);
      console.log(`deleted id ${id}`);
    },
  },
  getters: {
    budgetList: ({ list }) => list,
  },
  actions: {
    addNewListValue({ commit }, data) {
      const newObj = {
        ...data,
        id: String(Math.random()),
      };
      commit('ADD_LIST_VAL', newObj);
    },
    deleteListItem({ commit }, id) {
      commit('DELETE_LIST_VAL', id);
    },
  },
  modules: {},
});
