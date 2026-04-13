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
        {{ t.experience.headline }}
      </h2>
    </div>

    <div class="w-full flex flex-col gap-16 lg:w-1/2">
      
      <div v-for="(item, index) in Erfahrungen"
        :key="index"
        class="flex flex-col gap-2"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
        data-aos-duration="1200"
      >
        <h3 class="text-2xl font-bold text-highlight-green">
          {{ item.title }}
        </h3>
        
        <h4 class="text-xl font-semibold">
          {{ item.company }}
        </h4>
        
        <span class="text-sm opacity-60 italic mb-2">
          {{ item.timeframe }}
        </span>
        
        <ul class="list-disc list-outside ml-5 flex flex-col gap-2">
  <li 
    v-for="(task, taskIndex) in item.work" 
    :key="taskIndex"
    class="text-white/80 leading-relaxed text-lg"
  >
    {{ task }}
  </li>
</ul>
      </div>

    </div>
  </div>
    
     
    </div>
</template>

<script setup>
import { computed, onMounted, inject } from 'vue';
import Aos from 'aos';


onMounted(() => {
  Aos.init({ 
    once: true,
    offset: 100
  });
});

const t = inject('t');

const Erfahrungen = computed(() => [
  { 
    title: "Developer", 
    company: "BPOut X GmbH (Projekt: Airbus)", 
    timeframe: t.value.experience.bpout_timeframe, 
    work: t.value.experience.bpout_text_array
  },
  { 
    title: "Junior Developer", 
    company: "Transfermarkt GmbH", 
    timeframe: '01/2020 - 07/2020', 
    work: t.value.experience.transfermarkt_text_array
  },
  { 
    title: "Web Developer", 
    company: "Surf Media GmbH", 
    timeframe: '11/2018 - 06/2019', 
    work: t.value.experience.surf_media_text_array
  },
  { 
    title: "UI Designer", 
    company: "Syneo Tools GmbH", 
    timeframe: '12/2017 - 10/2018', 
    work: t.value.experience.syneo_text_array
  },
  { 
    title: "Product Manager", 
    company: "Esome Advertising", 
    timeframe: '02/2017 - 11/2017', 
    work: t.value.experience.esome_text_array
  },
  { 
    title: "Webdesigner", 
    company: "Jimdo", 
    timeframe: '04/2015 - 05/2016', 
    work: t.value.experience.jimdo_text_array
  }
]);

</script>