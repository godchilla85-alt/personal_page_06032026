import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import Particles from "@tsparticles/vue3";
import { loadStarsPreset } from "@tsparticles/preset-stars";

const app = createApp(App);

app.use(Particles, {
  init: async engine => {
    // Das lädt das Stars-Preset in die Engine
    await loadStarsPreset(engine);
  },
});

app.use(router)
app.mount('#app');