<template>
    <div class="flex flex-col flex-1 rounded-md bg-white shadow-md hover:shadow-lg hover:-translate-y-1 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-md dark:bg-slate-800 text-left p-4 transition-all duration-300">
        <h3 class="text-xl font-extrabold">
            {{ organisation.position }} 
            <a v-if="organisation.organisation.link" :href="organisation.organisation.link" class="hover:text-link-color" target="_blank">@{{ organisation.organisation.name }}</a>
            <span v-else>@{{ organisation.organisation.name }}</span>
        </h3>
        <p class="italic">{{ organisation.duration }}</p>
        <div class="pt-4 text-slate-500 dark:text-slate-300">
            <ul class="list-['\1F449'] pl-6 pt-4">
                <li v-for="activity in organisation.activities" class="pl-2 pb-2">{{ activity }}</li>
            </ul>
        </div>
        <div class="text-slate-600 pt-4 flex flex-wrap mt-auto">
            <p v-for="hashtag in organisation.hashtags" class="pr-4 last:pr-0">#{{ hashtag }}</p>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    organisation: Object,
})

</script>
