import { router } from "./router";
import { createApp } from "vue";
import * as VeeValidate from 'vee-validate';
import App from "./App.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faXmark,
  faPenToSquare,
  faTrash,
  faAt,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

library.add(faXmark, faPenToSquare, faTrash, faAt, faCheck);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(VeeValidate);
app.mount("#app");
