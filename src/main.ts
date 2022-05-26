import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router";
import 'lib-flexible/flexible.js'
import {axiosPlugin} from './plugins/axios'

const app = createApp(App)
app.use(router).use(axiosPlugin)
app.mount('#app')