<template>
    <section class="w-full" ref="certificationsSection" id="certifications-section">
        <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
            <h1 class="text-3xl font-bold pr-5">📜 Certifications</h1>
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
        </div>
        
        <div :class="['flex flex-col space-y-4 mb-12 transition-all motion-reduce:transition-none duration-500 delay-300', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
            <CertificationCard
                v-for="(certification, index) in content"
                :key="index"
                :certification="certification"
            />
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import CertificationCard from '../components/CertificationCard.vue'
import { onIntersect } from '../composables/onIntersect'

const props = defineProps({
    content: Array,
    transitions: Object
})

const certificationsSection = ref({})
const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? onIntersect(certificationsSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption }) : true
</script>
