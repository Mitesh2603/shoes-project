import { createStore, mapMutations } from "vuex";
// import { SOME_MUTATION } from "./Mutation-types";

export const store = createStore({
  state: {
    count: 0,
  },
  mutations: {
    // ...mapMutations(["increment"]),
    increment(state) {
      state.count++;
    },
    increments(state, payLoad) {
      state.count += payLoad.amount;
    },
  },
});

// [SOME_MUTATION](state){
//   state.count++;
// }
