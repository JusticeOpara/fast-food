<template>
    <a :href="href" target="_blank" class="bg-[#f9b111] ">
        <slot>YouTube</slot>
    </a>



    
</template>




<script setup>

const props = defineProps({
    href: String
})

</script>