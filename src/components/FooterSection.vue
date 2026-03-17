<script setup>
import { inject } from 'vue';
import FooterCopyright from './FooterCopyright.vue';
import Aos from 'aos';
Aos.init({ once: true });
const t = inject('t');
</script>

<template>
    <div class="relative min-h-[20vh] container bg-white/10 rounded-t-4xl backdrop-blur-sm shadow-xl pt-10"
    data-aos='fade-down'
            data-aos-duration="2000"
            data-aos-delay="50">
        
        
        <div class="h-full flex flex-col px-10 py-5 relative z-10">
            
            <div class="grow flex flex-col justify-center">
                <h3 class="text-4xl text-white/70">{{ t.footer.text }}</h3>
                <a class="text-highlight-green text-[3em] font-bold" href="mailto:moin@sebastian-pohl.eu">
                    {{ t.footer.link_text }}
                </a>
            </div>

            <div class="pt-15">
                <FooterCopyright />
            </div>
            
        </div>
    </div>
</template>