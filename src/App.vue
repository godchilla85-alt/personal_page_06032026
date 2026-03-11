<template>
  <CustomCursor></CustomCursor>
  <TransitionOverlay ref="overlay" />
  <div class="relative min-h-screen overflow-x-clip">
    <vue-particles
      id="tsparticles"
      :options="particlesOptions"
    />
    <Navigation />

    <div class="absolute top-[-10%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#3150aa] opacity-45 blur-[240px] transform-gpu-blur"></div>
    <div class="absolute top-[10%] left-[80%] w-[30vw] h-[30vw] rounded-full bg-[#d6876d] opacity-45 blur-[250px] transform-gpu-blur"></div>
    

 
      <router-view />



  </div>
</template>
<script setup>

import Navigation from './components/Navigation.vue'
import CustomCursor from './components/CustomCursor.vue';
import TransitionOverlay from './components/TransitionOverlay.vue';

import { ref, provide } from 'vue';

const overlay = ref(null);


provide('playTransition', (name, nav) => overlay.value.playTransition(name, nav));

const particlesOptions = {
  preset: "stars",
  particles: {
    color: { value: "#ffffff" },
    number: {
      value: 150,
      density: { enable: true, area: 800 }
    },
    size: {
      value: { min: 1, max: 3 }
    },
    opacity: {
      value: { min: 0.1, max: 0.5 },
      animation: {
        enable: true,
        speed: 1,
        sync: false
      }
    },
    move: {
      enable: true,
      speed: 0.3,
      direction: "top",
      random: true,
      straight: false,
      outModes: { default: "out" }
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "bubble" }
    },
    modes: {
      bubble: { size: 4, distance: 100, duration: 2, opacity: 0.8 }
    }
  }
};

</script>
<style>

#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>