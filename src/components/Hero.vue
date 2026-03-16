<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Typed from 'typed.js';
import Aos from 'aos';

const el = ref(null);
let typed = null;

onMounted(() => {
     Aos.init({ once: true });

  typed = new Typed(el.value, {
    strings: ["Web Designer", "Developer", "Nerdy", "Ehemann", "Vater", "Gamer", "Filme und Serien Junk", "Hobby Koch", "HSVer"],
    typeSpeed: 150,
    backSpeed: 20,
    loop: true,
    showCursor: true,
    cursorChar: "|",
  });
});

onUnmounted(() => {
  typed.destroy();
});
</script>

<template>
    <div class="min-h-screen container bg-white/10 rounded-4xl backdrop-blur-sm shadow-xl">
        <div class="flex min-h-screen flex-col justify-center px-10">
            <div class="intro">
            <h1 class="text-highlight-green text-[5em] font-bold lg:text-[12em]"
            data-aos='fade-up'
            data-aos-duration="2000"
            data-aos-delay="50">Moin.</h1>
            <h2 class="text-default-color font-bold text-3xl lg:text-[3em] lg:pl-5"
            data-aos='fade-up'
            data-aos-duration="2000"
            data-aos-delay="500">Ich bin <span class="text-highlight-green">Sebastian.</span></h2>
            <h2 class="text-default-color font-bold text-3xl lg:text-[3em] lg:pl-5"
            data-aos='fade-up'
            data-aos-duration="2000"
            data-aos-delay="1000">Ich bin <span ref="el"></span></h2>
            </div>
        </div>     
  </div>
</template>