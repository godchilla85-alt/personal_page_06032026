<script setup>
import Airbus from '../assets/img/airbus-logo.png'; 
import Jimdo from '../assets/img/jimdo-logo.png'; 
import Accenture from '../assets/img/accenture-logo.png'; 
import MediaMarkt from '../assets/img/media-markt-logo.png'; 
import Transfermarkt from '../assets/img/transfermarkt-logo.png'; 
import Aos from 'aos';

 Aos.init({ once: true });
</script>

<template>
    <div class="h-[20vh] mt-20 container flex flex-col"
    data-aos='fade-up'
        data-aos-duration="2000"
        data-aos-delay="50">
        <div class="text-center">
            <p>Unternehmen mit und für die ich Gearbeitet habe</p>
        </div>
    <div class="flex flex-row flex-wrap justify-around mt-5 lg:mt-20">
        <img class="h-6 m-3 lg:h-8" :src="Airbus">
        <img class="h-6 m-3 lg:h-8" :src="Jimdo">
        <img class="h-6 m-3 lg:h-8" :src="Accenture">
        <img class="h-6 m-3 lg:h-8" :src="MediaMarkt">
        <img class="h-6 m-3 lg:h-8" :src="Transfermarkt">
    </div>
    </div>
</template>