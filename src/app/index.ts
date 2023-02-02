import { createApp } from 'vue'

import { router } from './router'
import App from './App.vue'

import './style.css'

export const app = createApp(App).use(router)
