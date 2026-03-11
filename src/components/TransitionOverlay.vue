<template>
  <div 
    id="overlay-container" 
    class="fixed inset-0 z-100 flex items-center justify-center bg-highlight-green opacity-0 pointer-events-none"
  >
    <h1 
      id="overlay-text" 
      class="text-6xl font-bold text-white uppercase tracking-widest opacity-0"
    >
      {{ pageName }}
    </h1>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import gsap from 'gsap';

const pageName = ref('');

const playTransition = (nextPageName, navigate) => {
  pageName.value = nextPageName;

  const tl = gsap.timeline();


  tl.set("#overlay-container", { pointerEvents: "all" }) 
    .to("#overlay-container", { 
      opacity: 1, 
      duration: 0.5, 
      ease: "power2.inOut" 
    })
    

    .to("#overlay-text", { 
      opacity: 1, 
      y: 0, 
      duration: 0.4, 
      ease: "power2.out" 
    }, "-=0.2")


    .add(() => {
      navigate();
      window.scrollTo(0, 0);
    })


    .to({}, { duration: 0.5 }) 


    .to("#overlay-text", { 
      opacity: 0, 
      duration: 0.3 
    })
    .to("#overlay-container", { 
      opacity: 0, 
      duration: 0.5, 
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set("#overlay-container", { pointerEvents: "none" }); 
      }
    }, "-=0.1");
};

defineExpose({ playTransition });
</script>