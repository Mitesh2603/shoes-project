import { createStore, mapMutations } from "vuex";

export const store = createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    increments(state, payLoad) {
      state.count += payLoad.amount;
    },
  },
});
