<template>
    <div class="flex flex-col flex-1 rounded-md bg-white shadow-md hover:shadow-lg hover:-translate-y-1 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-md dark:bg-slate-800 text-left p-4 transition-all duration-300">
        <!-- Content Section -->
        <h3 class="text-xl font-extrabold mb-1">{{ certification.title }}</h3>
        <p class="text-base text-slate-600 dark:text-slate-400 mb-2">
            <span v-if="certification.issuer">{{ certification.issuer }}</span>
        </p>
        <p class="text-sm text-slate-500 dark:text-slate-500 mb-3">
            <span v-if="certification.issueDate">{{ certification.issueDate }}</span>
            <span v-if="certification.expiryDate"> - {{ certification.expiryDate }}</span>
            <span v-if="!certification.expiryDate && certification.issueDate"> - No Expiration</span>
        </p>
        
        <div v-if="certification.credentialId" class="text-sm text-slate-500 dark:text-slate-500 mb-4">
            <span class="font-semibold">Credential ID:</span> {{ certification.credentialId }}
        </div>
        
        <!-- Image Section - Below description (only if image exists) -->
        <div v-if="certification.image" class="mb-4 cursor-pointer" @click="openImage">
            <div class="w-64 h-40 overflow-hidden rounded-md bg-slate-100 dark:bg-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300">
                <img 
                    :src="getImageUrl(certification.image)" 
                    :alt="certification.title"
                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 italic">Click to view full certificate</p>
        </div>
        
        <div v-if="certification.skills && certification.skills.length > 0" class="text-slate-600 flex flex-wrap mt-auto pt-3 border-t border-slate-200 dark:border-slate-700">
            <p v-for="skill in certification.skills" :key="skill" class="pr-4 last:pr-0">#{{ skill }}</p>
        </div>
        
        <div v-if="certification.verifyLink" class="mt-3">
            <a 
                :href="certification.verifyLink" 
                target="_blank"
                class="text-sm text-button-color hover:underline inline-flex items-center gap-1"
                @click.stop
            >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Verify Certificate
            </a>
        </div>
    </div>

    <!-- Lightbox Modal (only if image exists) -->
    <Teleport to="body">
        <Transition name="fade">
            <div 
                v-if="showLightbox && certification.image" 
                class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
                @click="closeLightbox"
            >
                <button 
                    class="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl leading-none z-10"
                    @click="closeLightbox"
                >
                    &times;
                </button>
                <img 
                    :src="getImageUrl(certification.image)" 
                    :alt="certification.title"
                    class="max-w-full max-h-full object-contain"
                    @click.stop
                />
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    certification: Object
})

const showLightbox = ref(false)

const openImage = () => {
    showLightbox.value = true
}

const closeLightbox = () => {
    showLightbox.value = false
}

// Static Images
const getImageUrl = (path) => {
    return new URL(`../assets/${path}`, import.meta.url).href
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
