<script setup>
import { inject } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Logo from '../assets/img/logo.png';
import AnimatedLinkwoArrow from './AnimatedLinkwoArrow.vue';

const router = useRouter();
const route = useRoute(); // Aktuelle Route abfragen
const playTransition = inject('playTransition');

const handleLinkClick = (path, name) => {
  const isTargetHome = path === '/' || path.includes('/#');
  const isAlreadyOnHome = route.path === '/';

  // Fall 1: Wir sind auf Home und wollen zu Home oder Home/#work -> NUR SCROLLEN
  if (isAlreadyOnHome && isTargetHome) {
    if (path.includes('#')) {
      const hash = path.split('#')[1];
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  } 
  // Fall 2: Wir sind auf einer anderen Seite (z.B. About) und wollen irgendwohin -> ANIMATION
  else {
    playTransition(name, () => router.push(path));
  }
};
</script>

<template>
    <nav class="sticky w-full top-0 z-50">
        <div class="pt-4 md:pb-8">
            <div class="container mx-auto px-4 md:px-6 lg:px-12">
                <div class="flex items-center justify-between">
                    <div class="h-fit">
                        <div @click="handleLinkClick('/', 'HOME')">
                            <img :src="Logo" alt="Logo" class="cursor-pointer">
                        </div>
                    </div>
                    <div class="flex items-center gap-x-4.25 h-9">
                        <div class="items-center justify-center hidden lg:flex lg:gap-x-20">
                            <div @click="handleLinkClick('/', 'HOME')">
                                <AnimatedLinkwoArrow text="home" />
                            </div>
                            <div @click="handleLinkClick('/about', 'ABOUT')">
                                <AnimatedLinkwoArrow text="about" />
                            </div>
                            <div @click="handleLinkClick('/#work', 'WORK')">
                                <AnimatedLinkwoArrow text="work" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>