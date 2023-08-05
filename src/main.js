import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import { Store } from './stores/index.js';
import { Quasar, Notify, Dialog } from "quasar";
import piniaPersist from 'pinia-plugin-persist'

import App from './App.vue'
import router from './router'

// Vue Axios

import axios from 'axios'
import VueAxios from 'vue-axios'

// import icon library

import '@quasar/extras/material-icons/material-icons.css';
// import Quasar css
import 'quasar/src/css/index.sass';

import './assets/main.css'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPersist)

const store = Store;
pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(pinia)

app.use(router)

// Use quasar

app.use(Quasar, {
  plugins: {
    Notify,
    Dialog
  }
});


// Use vue-axios
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'

// Provide Pinia Store globally
app.provide('store', store);

app.mount('#app')
