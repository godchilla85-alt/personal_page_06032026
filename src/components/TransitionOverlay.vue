<template>
  <div id="overlay-container" class="fixed inset-0 z-100 flex items-center justify-center pointer-events-none">
    <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
      <path id="overlay-path" d="M 0 100 V 100 Q 50 100 100 100 V 100 Z" fill="#6c733d" />
    </svg>
    
    <h1 class="text-6xl font-bold text-white uppercase tracking-widest opacity-0" id="overlay-text">
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

  // 1. Reset: Startzustand für SVG und Text
  tl.set("#overlay-path", { attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 Z" } })
    .set("#overlay-text", { opacity: 0, y: 30, scale: 0.95 });

  // 2. Warp-Phase: Vorhang krümmt sich nach oben
  tl.to("#overlay-path", { 
    attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 Z" }, 
    duration: 0.8, 
    ease: "power2.in" 
  })
  
  // 3. Text einblenden (mit force3D für flüssige Performance)
  .fromTo("#overlay-text", 
    { opacity: 0, y: 30, scale: 0.5 }, 
    { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      duration: 0.6, 
      force3D: true, // Zwingt GPU-Layer für flüssige Animation
      ease: "power2.out" 
    }, 
    "-=0.3" // Synchronisation mit dem Vorhang
  )

  // 4. Volle Abdeckung des Screens
  .to("#overlay-path", { 
    attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 Z" }, 
    duration: 0.4, 
    ease: "power2.out" 
  })
  
  // 5. Seitenwechsel (Router-Navigation)
  .add(() => {
    navigate();
    window.scrollTo(0, 0);
  })

  // 6. Ausblenden: Text geht zuerst weg
  .to("#overlay-text", { opacity: 0, duration: 0.2 }, "+=0.5") 
  
  // 7. Vorhang zieht nach oben weg
  .to("#overlay-path", { 
    attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 Z" }, 
    duration: 0.8, 
    ease: "power4.inOut" 
  }, "-=0.2"); 
};

defineExpose({ playTransition });
</script>
