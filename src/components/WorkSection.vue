<script setup>
import { ref } from 'vue';
import Aos from 'aos';
import movData from '../assets/img/movData-thumb.jpg';
import shoeShop from '../assets/img/shoerus-thumb.jpg';
import hamburgRedesign from '../assets/img/hamburg-redesign-thumb.jpg';
import weatherApp from '../assets/img/weather_app_vue_thumb.png';
import AnimatedLink from './AnimatedLink.vue';

const workCards = ref([
    { title: "Shoe R Us UI Concept", type: "Concept, Interface", image: shoeShop, link: 'https://www.behance.net/gallery/245561621/SneakRus'},
    { title: "movData Concept", type: "Concept, Interface", image: movData, link: 'https://www.behance.net/gallery/115330089/movData-Movie-Database'},
    { title: "Hamburg Redesign", type: "Concept, Interface", image: hamburgRedesign, link: 'https://www.behance.net/gallery/245567095/Hamburg-Redesign'},
    { title: "Weather App", type: "Interface, Code", image: weatherApp, link: 'https://glistening-quokka-77aa6a.netlify.app/'},
]);

 Aos.init({ once: true });
</script>
<template>
    <div id="work" class="min-h-screen px-10 flex flex-col container relative mt-10 lg:mt-0">
        <div class="absolute top-[15%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#3150aa] opacity-45 blur-[240px] transform-gpu-blur"></div>
    <div class="absolute top-[15%] left-[50%] w-[50vw] h-[30vw] rounded-full bg-[#d6876d] opacity-45 blur-[250px] transform-gpu-blur"></div>
    
        <div
        v-for="(card, index) in workCards"
        :key="index"
        class="top-20 p-5 bg-white/10 rounded-4xl backdrop-blur-sm mb-20 flex flex-row h-[35vh]"
        data-aos='fade-up'
                data-aos-duration="2000"
                data-aos-delay="500"
                data-aos-once="true">
        <div class="h-full w-2/4 flex flex-col justify-center">
            <h3 class="text-[1.2em] lg:text-4xl mb-5">{{card.title}}</h3>
            <p class="text-[1em] lg:text-2xl">{{ card.type }}</p>
            <AnimatedLink text="Anschauen" :href="card.link" />
        </div>
        <div 
        class="h-full w-2/4 rounded-4xl bg-cover bg-center"
        :style="{ backgroundImage: `url(${card.image})` }"></div>
        
    </div>
    </div>
</template>