import { createApp } from 'vue'
import App from './App.vue';

import Ele from '@mono-demo/components'

const app = createApp(App)

app.use(Ele)

app.mount('#app');
