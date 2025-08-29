import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import { router } from '@/router';
import '@/shared/styles/root.less';

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app');
