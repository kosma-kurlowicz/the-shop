import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'
import './assets/main.css'

const app = createApp(App)

app.use(router).use(plugin, defaultConfig)

app.mount('#app')

