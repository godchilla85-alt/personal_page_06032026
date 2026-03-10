<template>
  <div class="flex flex-col items-center gap-6">
    <Hero />
    <AboutSection />
    <WorkSection />
    <CustomerSection />
     <FooterSection />
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue';
import AboutSection from '../components/AboutSection.vue';
import WorkSection from '../components/WorkSection.vue';
import CustomerSection from '../components/CustomerSection.vue';
import FooterSection from '../components/FooterSection.vue';

import { onUnmounted } from 'vue';
import ScrollTrigger from 'gsap/ScrollTrigger';

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(st => st.kill());
});
</script>