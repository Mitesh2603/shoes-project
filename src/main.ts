// import "./index.css";
// import { createApp } from "vue";
// import { router } from "./router";
// import App from "./App.vue";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   faComments,
//   faDownload,
//   faShareNodes,
//   faGear,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// library.add(faComments, faDownload, faShareNodes, faGear);

// const app = createApp(App)
//   .use(router)
//   .component("font-awesome-icon", FontAwesomeIcon);

// app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import Cart from "./components/product/Cart.vue";
import product from "./components/product/product.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: product },
  { path: "/cart", component: Cart },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
