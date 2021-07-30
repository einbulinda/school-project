import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars);

createApp(App)
  .component("FontAwesome", FontAwesomeIcon)
  .use(router)
  .mount("#app");
