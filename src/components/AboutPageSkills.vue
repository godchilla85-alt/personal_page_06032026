<template>
    <div class="min-h-[40vh] px-10 flex flex-row justify-center items-center container relative border-t">
        <div class="absolute top-[15%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#3150aa] opacity-45 blur-[240px] transform-gpu-blur"></div>
    <div class="absolute top-[15%] left-[30%] w-[50vw] h-[30vw] rounded-full bg-[#d6876d] opacity-45 blur-[250px] transform-gpu-blur"></div>
    <div class="absolute top-[20%] -left-[-70%] w-[80vw] h-[60vw] rounded-full bg-[#3150aa] opacity-45 blur-[240px] transform-gpu-blur"></div>

    
       <div class="text-white flex flex-col w-full gap-10 pt-10 pb-10 lg:flex-row">
    
    <div class="w-full lg:w-1/2">
      <h2 class="text-4xl font-bold"
        data-aos="fade-right"
        data-aos-delay="500"
        data-aos-duration="1000">{{ t.skills.headline }}</h2>
    </div>

    <div class="w-full flex flex-col gap-16 lg:w-1/2">
      
      <div class="flex flex-col gap-6"
      data-aos="fade-up"
        :data-aos-delay="index * 100"
        data-aos-duration="1200">
        <h3 class="text-2xl font-semibold opacity-90">Frontend
        </h3>
        <div class="flex flex-wrap gap-3">
          <span 
            v-for="skill in Frontend" 
            :key="skill"
            class="px-5 py-2 bg-white/15 backdrop-blur-md rounded-full text-sm border border-white/10 hover:bg-white/25 transition-all duration-300"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <div class="flex flex-col gap-6"
      data-aos="fade-up"
        :data-aos-delay="index * 100"
        data-aos-duration="1200">
        <h3 class="text-2xl font-semibold opacity-90">Backend & Tools</h3>
        <div class="flex flex-wrap gap-3">
          <span 
            v-for="item in Software" 
            :key="item"
            class="px-5 py-2 bg-white/15 backdrop-blur-md rounded-full text-sm border border-white/10 hover:bg-white/25 transition-all duration-300"
          >
            {{ item }}
          </span>
        </div>
      </div>

    </div>
  </div>
    </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
import Aos from 'aos';

onMounted(() => {
  Aos.init({ 
    once: true,
    offset: 100
  });
});



const Frontend = ref(['HTML', 'CSS', 'SASS/LESS', 'Tailwind', 'Bootstrap', 'JavaScript', 'React.js', 'Vue.js', 'jQuery', 'Responsive','Vite.js', 'Next.js'
]);
const Software = ref([ 'MySQL', 'PostgreSQL', 'Node.js', 'Git', 'Palantir', 'Figma', 'Visual Studio Code', 'Adobe Creative Suite', 'CI/CD', 'Sketch', 'REST'
]);
const t = inject('t');

</script>