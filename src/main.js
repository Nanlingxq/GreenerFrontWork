import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import { createPinia } from 'pinia';
import router from '@/router/index'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(ElementPlus);
app.use(router);
app.mount('#app');