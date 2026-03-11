<script setup>
import FooterCopyright from './FooterCopyright.vue';
import Aos from 'aos';
Aos.init({ once: true });
</script>

<template>
    <div class="relative min-h-[20vh] container bg-white/10 rounded-t-4xl backdrop-blur-sm shadow-xl pt-20"
    data-aos='fade-down'
            data-aos-duration="2000"
            data-aos-delay="50">
        
        
        <div class="h-full flex flex-col p-10 relative z-10">
            
            <div class="grow flex flex-col justify-center">
                <h3 class="text-4xl text-white/70">Überzeugt?</h3>
                <a class="text-highlight-green text-[3em] font-bold" href="mailto:s.pohl85@hotmail.de">
                    Lass uns schnacken!
                </a>
            </div>

            <div class="mb-1.25 pt-30">
                <FooterCopyright />
            </div>
            
        </div>
    </div>
</template>