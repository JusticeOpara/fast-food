<template>
    <a :href="href" target="_blank" class="bg-[#f9b111] border px-2 rounded py-1 font-Satoshi font-medium ">
        <slot>YouTube</slot>
    </a>



    
</template>




<script setup>

const props = defineProps({
    href: String
})

</script>