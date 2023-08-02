import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* version expired
import Vue from "vue"
import VueSimpleAlert from "vue-simple-alert" */

const app = createApp(App)

app.use(router)

app.mount('#app')
