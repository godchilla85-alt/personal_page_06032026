<template>
    <div class="min-h-full px-10 flex flex-row justify-center items-center container relative border-t">
        <div class="absolute top-[45%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#3150aa] opacity-45 blur-[240px] transform-gpu-blur"></div>
    <div class="absolute top-[15%] left-[70%] w-[50vw] h-[30vw] rounded-full bg-[#d6876d] opacity-45 blur-[250px] transform-gpu-blur"></div>
   

    <div class="pt-20 text-white flex flex-col w-full gap-10 lg:flex-row">
    
    <div class="w-full lg:w-1/2">
      <h2 
        class="text-4xl font-bold top-20"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Meine Erfahrungen
      </h2>
    </div>

    <div class="w-full flex flex-col gap-16 lg:w-1/2">
      
      <div 
        v-for="(job, index) in Erfahrungen" 
        :key="index"
        class="flex flex-col gap-2"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
        data-aos-duration="1200"
      >
        <h3 class="text-2xl font-bold text-highlight-green">
          {{ job.title }}
        </h3>
        
        <h4 class="text-xl font-semibold">
          {{ job.company }}
        </h4>
        
        <span class="text-sm opacity-60 italic mb-2">
          {{ job.timeframe }}
        </span>
        
        <p class="text-white/80 leading-relaxed text-lg">
          {{ job.work }}
        </p>
      </div>

    </div>
  </div>
    
     
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Aos from 'aos';

// AOS Initialisierung im Lifecycle Hook für bessere Performance in Vue
onMounted(() => {
  Aos.init({ 
    once: true,
    offset: 100
  });
});

const Erfahrungen = ref([
  { 
    title: "Developer", 
    company: "BPOut X GmbH", 
    timeframe: 'seit 06/2021', 
    work: 'Erstellung von Dashboards für Airbus mit Hauseigener Software Skywise (basierend auf Palantir) und Ebam per HTML, CSS und JavaScript. Erstellung von Datasets anhand Palantir Contour. Aufbereitung von Daten anhand SQL und PostgreSQL. Umsetzung der Dashboards für Mobile Devices. Erstellung von Logos und Printmedien. Einarbeitung von Mitarbeitern. Kundenpräsentation von Projekten.'
  },
  { 
    title: "Junior Developer", 
    company: "Transfermarkt GmbH", 
    timeframe: '01/2020 - 07/2020', 
    work: 'Refreshing des Quellcodes per TypeScript und React.js. Testen der Elemente per Wallaby.js und Jest.js. Erstellung von Prototypen anhand eines vorgegeben UI per HTML, CSS und JavaScript.'
  },
  { 
    title: "Web Developer", 
    company: "Surf Media GmbH", 
    timeframe: '11/2018 - 06/2019', 
    work: 'Konzeption und Erstellung von Werbebannern, Newslettern sowie Landingpages für diverse Kunden als auch dessen Umsetzung anhand HTML, CSS und JavaScript.'
  },
  { 
    title: "UI Designer", 
    company: "Syneo Tools GmbH", 
    timeframe: '12/2017 - 10/2018', 
    work: 'Konzeption und Erstellung moderner Interfaces von Werbetafeln oder Verkaufsassistenten. Umsetzung per HTML und CSS der Plattform Scorelead (scorelead.de).'
  },
  { 
    title: "Product Manager", 
    company: "Esome Advertising", 
    timeframe: '02/2017 - 11/2017', 
    work: 'Qualitätsicherung sowie die Konzeption neuer Funktionen für hauseigene Tools, Schreiben von Bug Tickets sowie Erstellung von Image Videos.'
  },
  { 
    title: "Webdesigner", 
    company: "Jimdo", 
    timeframe: '04/2015 - 05/2016', 
    work: 'Konzeption sowie Umsetzung neuer Landingpages sowie neuer Features für den Webseiten Baukasten. Erstellung von Prototypen per HTML, CSS (Sass) und JavaScript.'
  }
]);
</script>