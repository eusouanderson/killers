// Plugins
import { registerPlugins } from '@/plugins'

import '@/assets/main.css'

// Routes
import router from '@/router'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
// Styles
import 'unfonts.css'

const app = createApp(App)
registerPlugins(app)
app.use(router)
app.mount('#app')
