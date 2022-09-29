import { createPinia } from "pinia";
import { createApp } from "vue";

// auto-import-svg
import "virtual:svg-icons-register";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
