import './assets/styles.css';

import Aura from '@primevue/themes/aura';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';

import App from './App.vue';
import { router } from './core/router';

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.mount('#app');
