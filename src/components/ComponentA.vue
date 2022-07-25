<script>
import { store } from "./store.js";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div>
    <button @click="store.commit('increment')">
      From A Increment 1: {{ store.state.count }}</button
    ><br />
    <button @click="store.commit({ type: 'increments', amount: 5 })">
      From A Increment Amount: {{ store.state.count }}
    </button><br/>
  </div>
</template>
