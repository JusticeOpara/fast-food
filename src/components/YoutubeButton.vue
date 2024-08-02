<template>
    <a :href="href" target="_blank" class="bg-[#FF0000] border-black text-white font-bold px-2 rounded py-1 font-Satoshi  ">
        <slot>YouTube</slot>
    </a>



    
</template>




<script setup>

const props = defineProps({
    href: String
})

</script>