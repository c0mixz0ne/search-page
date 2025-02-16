import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import users from './store/users'

const app = createApp(App)

app.use(router)
app.use(users)

app.mount('#app')
