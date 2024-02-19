window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 


const app = createApp(App);
app.use(router);
app.mount('#app');
