<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: { type: String, default: 'Anschauen' },
  href: { type: String, default: '#' }
});


const isExternal = computed(() => {
  return props.href.startsWith('http') || props.href.startsWith('//');
});
</script>

<template>
  <a 
    :href="href" 
    :target="isExternal ? '_blank' : '_self'"
    :rel="isExternal ? 'noopener noreferrer' : ''"
    class="group inline-flex items-center gap-4 py-2 cursor-pointer mt-5"
  >
    <div class="relative overflow-hidden h-[1.5em] leading-[1.5em] text-xl font-medium">
      <div class="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2">
        <span class="text-white block h-[1.5em]">{{ text }}</span>
        <span class="text-highlight-green block h-[1.5em]">{{ text }}</span>
      </div>
    </div>

    <div class="relative w-8 h-8 rounded-full border border-white/20 flex items-center justify-center overflow-hidden transition-colors duration-500 group-hover:border-highlight-green/50 bg-white/5">
      <div class="relative w-5 h-5 overflow-hidden">
        <div class="flex w-[200%] transition-transform duration-500 ease-in-out -translate-x-1/2 group-hover:translate-x-0">
          <div class="w-1/2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-highlight-green"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
          <div class="w-1/2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>
      </div>
      <div class="absolute inset-0 bg-highlight-green scale-0 rounded-full transition-transform duration-500 group-hover:scale-100 opacity-20 -z-10"></div>
    </div>
  </a>
</template>

<style scoped>

.w-5 { width: 1.25rem; }
.h-5 { height: 1.25rem; }
</style>