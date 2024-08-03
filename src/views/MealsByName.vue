<template>
  <div class="px-28 max-md:px-0 mt-5">
    <div class="mb-3">
      <p class="text-lg font-medium font-Commissioner">Hey there!</p>
      <h1 class="font-bold text-4xl font-ClashDisplay">Find your food now</h1>
    </div>

    <div class="flex gap-10 h-[50px]">
      <input
        type="text"
        class="rounded-2xl text-lg border border-black w-full h-full pl-5 outline-none"
        placeholder="Search for Meals"
        v-model="keyword"
        @change="searchMeals"
      />
      <div
        v-if="!keyword"
        class="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none font-bold text-4xl flex justify-center items-center inset-0"
      >
        Start searching for any meal and hit Enter
      </div>

      <div
        class="bg-[#f9b111] w-[50px] h-full flex items-center justify-center rounded-xl"
      >
        <img src="../assets/filter.svg" class="w-full" alt="filter" />
      </div>
    </div>

    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import store from "../store";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);


console.log(meals, "--meals meals");

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals;
  }
});
</script>
