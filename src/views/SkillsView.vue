<template>
    <section class="w-full py-12" ref="skillsSection" id="skills-section">
        <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
            <h1 class="text-3xl font-bold pr-5">🚀 Skills & Technologies</h1>
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
        </div>
        
        <div :class="['relative overflow-hidden mt-8 mb-12 transition-all motion-reduce:transition-none duration-500 delay-300', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
            <!-- Gradient overlays for fade effect -->
            <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
            <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
            
            <!-- Scrolling container -->
            <div class="flex gap-8">
                <div class="flex gap-8 animate-scroll">
                    <div v-for="(skill, index) in content" :key="`skill-1-${index}`" class="flex-shrink-0">
                        <div class="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-32 h-32">
                            <TechIcon v-if="!skill.customIcon" :name="skill.name" :fallback="skill.icon" class="mb-2" />
                            <div v-else class="text-4xl mb-2">{{ skill.customIcon }}</div>
                            <p class="text-sm font-semibold text-center">{{ skill.name }}</p>
                        </div>
                    </div>
                </div>
                <div class="flex gap-8 animate-scroll" aria-hidden="true">
                    <div v-for="(skill, index) in content" :key="`skill-2-${index}`" class="flex-shrink-0">
                        <div class="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-32 h-32">
                            <TechIcon v-if="!skill.customIcon" :name="skill.name" :fallback="skill.icon" class="mb-2" />
                            <div v-else class="text-4xl mb-2">{{ skill.customIcon }}</div>
                            <p class="text-sm font-semibold text-center">{{ skill.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { onIntersect } from '../composables/onIntersect'
import TechIcon from '../components/TechIcon.vue'

const props = defineProps({
    content: Array,
    transitions: Object
})

const skillsSection = ref({})
const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? onIntersect(skillsSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption }) : true

// Static Images
let getImageUrl = (path) => {
    return new URL(`../assets/${path}`, import.meta.url).href
}
</script>

<style scoped>
@keyframes scroll {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(calc(-100% - 2rem));
    }
}

.animate-scroll {
    animation: scroll 30s linear infinite;
}

.animate-scroll:hover {
    animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
    .animate-scroll {
        animation: none;
    }
}
</style>
