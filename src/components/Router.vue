<!-- <script lang="ts">
import Home from "./Home.vue";
import About from "./About.vue";
import NotFound from "./NotFound.vue";

const routes = {
  "/": Home,
  "/about": About,
};

export default {
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>

<template>
  <a href="#/">Home</a> | <a href="#/about">About</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <component :is="currentView" />
</template> -->

<template>
  <!-- <router-link to="/settings">Nested Names Views</router-link>
  <router-view v-slot="{ Component }">
  <transition name="fade">
    <component :is="Component" />
  </transition> -->
<!-- </router-view> -->
  <ul>
    <li>
      <router-link class="border-solid border-2 border-black p-1 inline-block rounded-2xl" to="/user/Mitesh/post/25">Users : 1</router-link>
      <!-- <router-link class="border-solid border-2 border-black p-1 inline-block rounded-2xl" :to="{name:'user', params:{username: 'mitesh'}}">Users : 1/5</router-link> -->
      <router-link class="border-solid border-2 border-black p-1 inline-block rounded-2xl" to="/user/eduardo/post/200">Users : 2</router-link>
    </li><br/>
    <!-- <li>
      <router-link to="/pathMatch" replace>Path Match</router-link>
    </li>
    <li>
      <router-link to="/about">About</router-link>
    </li>
    <li>
      <router-link to="/about/contactInfo">Contact Info</router-link>
    </li> -->
  </ul>
  <router-view class="view one"></router-view>
  <!-- <router-view class="view two" name="a"></router-view>
  <router-view class="view three" name="b"></router-view> -->
</template>

<script lang="ts">
// import { router } from "@/router";
// import { createRouter } from "vue-router";

export default {
  name: "App",
};
</script>
