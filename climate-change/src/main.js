import './assets/css/main.scss'

import { createApp } from 'vue'
import Chart from 'chart.js/auto'
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(router)

app.mount('#app')
