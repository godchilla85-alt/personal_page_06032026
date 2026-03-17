<script setup>
import { ref, onMounted, inject, watch, onUnmounted } from 'vue';
import Typed from 'typed.js';

const t = inject('t');
const el = ref(null);
let typed = null;

const initTyped = () => {

  if (typed) {
    typed.destroy();
  }

  typed = new Typed(el.value, {
    strings: t.value.hero.subtitle_array, 
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000, 
    loop: true,
    showCursor: true,
    cursorChar: "|",
  });
};

onMounted(() => {
  initTyped();
});


watch(t, () => {
  initTyped();
});


onUnmounted(() => {
  if (typed) typed.destroy();
});
</script>

<template>
    <div class="min-h-screen container bg-white/10 rounded-4xl backdrop-blur-sm shadow-xl">
        <div class="flex min-h-screen flex-col justify-center px-10">
            <div class="intro">
            <h1 class="text-highlight-green text-[5em] font-bold lg:text-[12em]"
            data-aos='fade-up'
            data-aos-duration="2000"
            data-aos-delay="50">{{ t.hero.title }}</h1>
            <h2 class="text-default-color font-bold text-3xl lg:text-[3em] lg:pl-5"
            data-aos='fade-up'
            data-aos-duration="2000"
            data-aos-delay="500">{{ t.hero.subtitle }} <span class="text-highlight-green">{{ t.hero.subtitle_name }}</span></h2>
            <h2 class="text-default-color font-bold text-3xl lg:text-[3em] lg:pl-5"
            data-aos='fade-up'
            data-aos-duration="2000"
            data-aos-delay="1000">{{ t.hero.subtitle_hardtext }} <span ref="el"></span></h2>
            </div>
        </div>     
  </div>
</template>