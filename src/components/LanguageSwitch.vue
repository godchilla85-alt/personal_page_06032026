<script setup>
import { inject, onMounted, watch, ref } from 'vue';
import gsap from 'gsap';

const currentLang = inject('currentLang');
const toggleLanguage = inject('toggleLanguage');


const deBtn = ref(null);
const enBtn = ref(null);
const line = ref(null);

const moveLine = (lang, animate = true) => {
  const target = lang === 'de' ? deBtn.value : enBtn.value;
  if (!target || !line.value) return;


  const { offsetLeft, offsetWidth } = target;

  gsap.to(line.value, {
    x: offsetLeft,
    width: offsetWidth,
    duration: animate ? 0.4 : 0, 
    ease: "power2.inOut"
  });
};


onMounted(() => moveLine(currentLang.value, false));


watch(currentLang, (newLang) => moveLine(newLang));

const setLanguage = (lang) => {
  if (currentLang.value !== lang) {
    toggleLanguage();
  }
};
</script>

<template>
  <div class="relative flex items-center gap-6 text-xl font-medium tracking-widest uppercase py-1 mt-5">
    
    <button 
      ref="deBtn"
      @click="setLanguage('de')"
      class="transition-colors duration-300 z-10"
      :class="currentLang === 'de' ? 'text-white' : 'text-white/30 hover:text-white/60'"
    >
      de
    </button>

    <button 
      ref="enBtn"
      @click="setLanguage('en')"
      class="transition-colors duration-300 z-10"
      :class="currentLang === 'en' ? 'text-white' : 'text-white/30 hover:text-white/60'"
    >
      en
    </button>

    <div 
      ref="line"
      class="absolute bottom-0 left-0 h-[2px] bg-highlight-green pointer-events-none"
      style="width: 0px;" 
    ></div>

  </div>
</template>