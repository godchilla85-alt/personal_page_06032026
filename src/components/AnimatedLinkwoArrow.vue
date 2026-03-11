<script setup>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

import { computed } from 'vue';

const props = defineProps({
  text: { 
    type: String, 
    required: true 
  },
  href: { 
    type: String, 
    default: '#' 
  }
});

const handleNavigation = async (e) => {

  if (isExternal.value) {
    return; 
  }


  e.preventDefault();

  if (props.href.startsWith('/#')) {
    const hash = props.href.split('#')[1];
    
    if (route.path === '/') {
      const element = document.getElementById(hash);
      if (element) {
        const headerOffset = 100; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      await router.push('/');
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  } else {
    router.push(props.href);
  }
};
const isExternal = computed(() => {
  return props.href.startsWith('http') || props.href.startsWith('//');
});
</script>

<template>
  <a 
    :href="props.href.trim()" 
    @click="handleNavigation" 
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
  </a>
</template>