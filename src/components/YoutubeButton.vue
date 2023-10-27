<template>
    <a :href="href" target="_blank">
        <slot>YouTube</slot>
    </a>



    
</template>




<script setup>

const props = defineProps({
    href: String
})

</script>