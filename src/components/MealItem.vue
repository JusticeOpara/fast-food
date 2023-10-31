<template>
  <div class="hover:shadow-2xl rounded-[20px] ho0ver:scale-105 transition-all">

    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-[20px] w-full h-[18rem] object-cover" />
    </router-link>

    <div class="p-4  flex flex-col gap-2">
      <h3 class="font-bold font-ClashDisplay text-xl">{{ meal.strMeal }}</h3>
      <div className="rating rating-sm gap-1">
        <input type="radio" name="rating-8" className="mask mask-star-2  bg-[#f9b111]" />
        <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#f9b111]" checked />
        <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#f9b111]" />
        <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#f9b111]" />
        <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#f9b111]" />
      </div>
      
      <p class="mb-2 font-Satoshi">
        {{ truncateWords(meal.strInstructions, 20) }}
      </p>
      <div class="flex items-center justify-between font-Satoshi">
        <YoutubeButton :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>
  
<script setup>

import YoutubeButton from './YoutubeButton.vue';



const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})

function truncateWords(str, count) {
  if (!str) return str;
  return str.split(" ").slice(0, count).join(" ");
}


</script>