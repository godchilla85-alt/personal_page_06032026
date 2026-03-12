<template>
    <div class="min-h-[50vh] px-10 flex flex-col justify-center items-center container relative my-20 lg:flex-row">
        <div class="absolute top-[15%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#3150aa] opacity-45 blur-[240px] transform-gpu-blur"></div>
    <div class="absolute top-[15%] left-[30%] w-[50vw] h-[30vw] rounded-full bg-[#d6876d] opacity-45 blur-[250px] transform-gpu-blur"></div>
    <div class="absolute top-[20%] -left-[-70%] w-[80vw] h-[60vw] rounded-full bg-[#3150aa] opacity-45 blur-[240px] transform-gpu-blur"></div>
        <div class="w-full order-2 relative z-50 lg:w-1/2 lg:order-1"
        data-aos='fade-up'
        data-aos-duration="2000"
        data-aos-delay="50">
            <p class="text-4xl pr-0 lg:pr-10">Moinsen. Ich, Programmierer mit über 6 Jahren Erfahrung und einer großen Leidenschaft für Computer und die Technik dahinter. Mein Interesse begann bereits mit 15 Jahren, als ich angefangen habe, mich intensiver mit Computern zu beschäftigen. Seitdem habe ich unzählige Stunden auch privat investiert, um neue Technologien, Programmiersprachen und Programme zu lernen und mein Wissen ständig zu erweitern.

In meiner Freizeit spiele ich gerne Games, verbringe Zeit mit meinem Familie, höre Musik oder fiebere bei Spielen des Hamburger SV mit. Manchmal genieße ich es aber auch einfach, zu entspannen und abzuschalten.</p>
                <AnimatedLink text="Mein Resume"  href="https://www.sebastian-pohl.eu/Resume_Sebastian_Pohl.pdf"></AnimatedLink>
       
        </div>
        <div class="w-full relative z-50 mb-10 order-1 lg:w-1/2 lg:order-2"
        data-aos='fade-up'
        data-aos-duration="2000"
        data-aos-delay="250">
            <img class="w-fit m-auto" :src="Me" alt="That's me">
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Aos from 'aos';
import AnimatedLink from './AnimatedLink.vue';

import Me from '../assets/img/me-about-page.jpg';

onMounted(() => {
  Aos.init({ 
    once: true,
    offset: 100
  });
});



</script>