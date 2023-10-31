

<template>
   
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 gap-8 pb-20 max-md:p-0 mt-[40px] max-md:mt-[20px] ">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
     <!-- <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
      There are no meals
    </div>  -->
  </template>
  
  <script setup>
  import MealItem from './MealItem.vue';
  
  const { meals } = defineProps({
    meals: {
      required: true,
      type: Array,
    }
  })
  
  </script>
 
  

