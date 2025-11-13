<template>
    <section class="w-full" ref="certificationsSection" id="certifications-section">
        <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
            <h1 class="text-3xl font-bold pr-5">📜 Certifications</h1>
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
        </div>
        
        <div :class="['flex flex-col space-y-4 mb-12 transition-all motion-reduce:transition-none duration-500 delay-300', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
            <CertificationCard
                v-for="(certification, index) in certInitial"
                :key="`initial-${index}`"
                :certification="certification"
            />
            <CertificationCard
                v-if="showMore"
                v-for="(certification, index) in remainingCerts"
                :key="`more-${index}`"
                :certification="certification"
            />

            <button v-show="showPreview" @click="toggleShowMore" class="w-52 py-2 px-6 mx-auto mt-6 bg-transparent border border-button-color text-button-color shadow-sm shadow-button-color transition ease-in-out hover:bg-button-color hover:text-white focus:bg-button-color focus:text-white active:bg-button-color active:text-white duration-300">
                {{ showMore ? "Show Less" : "Show More" }}
            </button>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import CertificationCard from '../components/CertificationCard.vue'
import { onIntersect } from '../composables/onIntersect'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
    content: Array,
    transitions: Object
})

const showPreview = props.content.length > 3
const showMore = ref(false)
const certInitial = showPreview ? props.content.slice(0, 3) : props.content
const remainingCerts = showPreview ? props.content.slice(3) : []

const certificationsSection = ref({})
const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? onIntersect(certificationsSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption }) : true

const toggleShowMore = () => {
    showMore.value = !showMore.value
    if (!showMore.value) {
        router.push('/#certifications-section')
    }
}
</script>
