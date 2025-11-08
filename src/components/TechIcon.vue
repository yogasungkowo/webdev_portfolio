<template>
    <div v-if="iconData" class="tech-icon" v-html="iconSvg" :style="{ color: iconColor }"></div>
    <div v-else class="text-4xl">{{ fallbackIcon }}</div>
</template>

<script setup>
import { computed } from 'vue'
import * as SimpleIcons from 'simple-icons'

const props = defineProps({
    name: String,
    fallback: String,
    size: {
        type: String,
        default: '48'
    }
})

// Konversi nama ke format simple-icons (contoh: "Vue.js" -> "siVuedotjs")
const getIconKey = (name) => {
    const normalized = name.toLowerCase()
        .replace(/\s+/g, '')
        .replace(/\./g, 'dot')
        .replace(/-/g, '')
        .replace(/\+/g, 'plus')
    return `si${normalized.charAt(0).toUpperCase() + normalized.slice(1)}`
}

const iconKey = getIconKey(props.name)
const iconData = computed(() => SimpleIcons[iconKey])

const iconSvg = computed(() => {
    if (!iconData.value) return ''
    return iconData.value.svg
})

const iconColor = computed(() => {
    if (!iconData.value) return ''
    return `#${iconData.value.hex}`
})

const fallbackIcon = computed(() => props.fallback || '📦')
</script>

<style scoped>
.tech-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tech-icon :deep(svg) {
    width: 100%;
    height: 100%;
    fill: currentColor;
}
</style>
