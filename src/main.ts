import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import Oruga from '@oruga-ui/oruga-next'
import { bulmaConfig } from './plugins/oruga'

import './assets/scss/plugin.scss'

import '@fortawesome/fontawesome-free/scss/fontawesome.scss'
import '@fortawesome/fontawesome-free/scss/regular.scss'
import '@fortawesome/fontawesome-free/scss/solid.scss'

createApp(App)
    .use(router)
    .use(Oruga, {
        iconPack: 'fas',
        ...bulmaConfig
    })
    .mount('#app')