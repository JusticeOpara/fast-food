<template>
  <div  class="px-28 max-md:px-6 mt-5">
    <div class="flex gap-2 justify-center w-full flex-wrap">

      <router-link :to="{ name: 'byLetter', params: { letter } }" v-for='letter of letters'
        class="text-3xl font-ClashDisplay font-bold  focus:text-[#f9b111] hover:text-[#f9b111]" :key="letter">

        {{ letter }}

      </router-link>

    </div>
    <!-- <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3
               xl:grid-cols-3 2xl:grid-cols-6 gap-5 px-20 pb-20 mt-[40px] max-md:p-0 bg-black ">

<MealItem  v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>

</div> -->
    <Meals :meals="meals" />
  </div>
</template>



<script setup>

import { computed } from '@vue/reactivity';
import { onMounted, watch } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';


const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

</script>