
<template>
    <header class="bg-blue-300 w-full  h-16 flex justify-between items-center">
        <router-link :to="{ name: 'Home' }" class="px-5 inline-flex items-center h-full text-base font-medium ">
            Foodie
        </router-link>

        <div class="flex items-center gap-1">
            <router-link :to="{ name: 'byName' }" class=" inline-flex items-center px-2 h-full hover:bg-purple-200">Search
                Meals</router-link>

            <router-link :to="{ name: 'byLetter' }" class=" inline-flex items-center px-2 h-full hover:bg-purple-200">Meals
                By Letter</router-link>

            <router-link :to="{ name: 'ingredients' }"
                class=" inline-flex items-center px-2 h-full hover:bg-purple-200">Meals By Ingredients</router-link>
        </div>

    </header>
</template>

<script setup>

</script>
