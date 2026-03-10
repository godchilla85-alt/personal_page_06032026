<template>
  <div class="flex flex-col items-center gap-6">
    <AboutPageHero />
    <AboutPageMe />
    <AboutPageSkills />
    <AboutPageErfahrungen />
    <FooterSection class="mt-30" />
  </div>
</template>

<script setup>
import AboutPageHero from './AboutPageHero.vue';
import AboutPageMe from './AboutPageMe.vue';
import AboutPageSkills from './AboutPageSkills.vue';
import AboutPageErfahrungen from './AboutPageErfahrungen.vue';
import FooterSection from './FooterSection.vue';

import { onUnmounted } from 'vue';
import ScrollTrigger from 'gsap/ScrollTrigger';

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(st => st.kill());
});
</script>