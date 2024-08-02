

<template>
  <div class="px-28 max-md:px-4">
    
    <div class="mb-3">
      <p class="text-lg font-medium font-Commissioner">Hey there!</p>
      <h1 class="font-bold text-4xl font-ClashDisplay">Find your food by ingredient</h1>
    </div>

    <!-- <div class="flex gap-10 h-[50px]"> -->

    <div class="">

      <div className='flex items-center cursor-pointer w-full bg-inherit border-[2px] border-black h-[50px] mb-5 rounded-xl pl-5 gap-4 pr-5'>
        <img src="../assets/search.svg" class="w-[20px] h-auto" alt="search bar" />
        <input type="text" v-model="keyword" class="rounded-2xl text-lg border-none h-full outline-none w-full"
          placeholder="Search for Ingredients" />

      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8 shadow bg-inherit">
        <a href="#" @click.prevent="openIngredient(ingredient)" v-for="ingredient of computedIngredients"
          :key="ingredient.idIngredient" class="flex justify-center item-center bg-[#f9b111] rounded md:p-36 p-24 shadow">
          <h3 class="md:text-4xl text-2xl text-center flex items-center justify-center  font-bold font-ClashDisplay">{{ ingredient.strIngredient }}</h3>
        </a>

      </div>
    </div>
  </div>
</template>
  
<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axiosClient from "../axiosClient";
import store from "../store";

const router = useRouter();
const keyword = ref("");
const ingredients = ref([]);
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

function openIngredient(ingredient) {
  store.commit('setIngredient', ingredient)
  router.push({
    name: "byIngredient",
    params: { ingredient: ingredient.strIngredient },
  });
}

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>