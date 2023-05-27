import { createApp } from 'vue';
import '@/styles/index.less';
import App from './App.vue';
import 'amfe-flexible';
import router from '@/router';
import store from '@/store';
createApp(App).use(router).use(store).mount('#app');
