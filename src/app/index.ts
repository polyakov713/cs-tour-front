import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { router } from './router'
import App from './App.vue'

import './style.css'

const pinia = createPinia()

export const app = createApp(App)
  .use(router)
  .use(pinia)
