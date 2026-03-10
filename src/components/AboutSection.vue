<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { inject } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const playTransition = inject('playTransition');


import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Aos from 'aos';
import AnimatedLink from './AnimatedLink.vue';

import Profile from '../assets/img/profile.png';


const scopeRef = ref(null);
const aboutRef = ref(null);
let splitInstance = null;

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  Aos.init({ once: true });

  if (aboutRef.value) {
    splitInstance = new SplitType(aboutRef.value, {
      types: 'words',
      wordClass: 'reveal-word',
    });

    const words = aboutRef.value.querySelectorAll('.reveal-word');
    
    // Prüfe kurz in der Konsole, ob er was gefunden hat
    console.log("Gefundene Wörter:", words.length); 

    if (words.length > 0) {
      gsap.set(words, { opacity: 0.1, willChange: 'opacity' });

      gsap.to(words, {
        opacity: 1,
        ease: 'none',
        stagger: 0.05,
        scrollTrigger: {
          trigger: aboutRef.value,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
          markers: false // <--- AKTIVIERE DIES ZUM TESTEN!
        },
      });
    }
  }
});

onUnmounted(() => {
  // Aufräumen, um Memory Leaks zu verhindern
  if (splitInstance) splitInstance.revert();
  ScrollTrigger.getAll().forEach(t => t.kill());
});
const handleInternalNavigation = (e) => {
  // 1. Verhindert das Standard-Scrollen/Springen des Browsers
  e.preventDefault(); 
  
  // 2. Starte die elegante Transition
  playTransition('ABOUT', () => {
    router.push('/about');
    // Der Scroll-to-top passiert hier erst, wenn der Vorhang zu ist!
  });
};
</script>

<template>
    <div ref="scopeRef" class="min-h-screen flex flex-col justify-center items-center container px-5 relative lg:flex-row lg:px-10">
        <div class="absolute top-[15%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#3150aa] opacity-45 blur-[240px] transform-gpu-blur"></div>
    <div class="absolute top-[15%] left-[30%] w-[50vw] h-[30vw] rounded-full bg-[#d6876d] opacity-45 blur-[250px] transform-gpu-blur"></div>
    <div class="absolute top-[20%] -left-[-70%] w-[80vw] h-[60vw] rounded-full bg-[#3150aa] opacity-45 blur-[240px] transform-gpu-blur"></div>
        <div class="w-full relative z-50 order-2 mt-10 lg:w-1/2 lg:mt-0">
            <p ref="aboutRef" class="about-reveal text-4xl">Hi, Ich bin <span class="text-highlight-green">Sebastian Pohl,</span> Baujahr
        85 und Webdesigner aus Hamburg. Seit 2015 baue ich interaktive Webseiten
        und helfe Unternehmen, neue Features zu entwickeln und umzusetzen.
        Sicherlich kann ich auch dir bei etwas helfen?</p>
                <AnimatedLink 
                text="Mehr über mich"
                href="/about" 
                @click.prevent="handleInternalNavigation"></AnimatedLink>
              
        </div>
        <div class="w-full relative z-50 order-1 mt-10 lg:w-1/2 lg:mt-0"
        data-aos='fade-up'
        data-aos-duration="2000"
        data-aos-delay="50">
            <img class="w-fit m-auto" :src="Profile" alt="That's me">
        </div>
    </div>
</template>

<style scoped>
.about-reveal {
  -webkit-font-smoothing: antialiased;
}

:deep(.reveal-word) {
  display: inline-block;
  margin-right: 0.2em;
}
</style>