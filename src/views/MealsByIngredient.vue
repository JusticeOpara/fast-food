<template>
    <div class="px-28 max-md:px-6">
        <div class="mt-6">
            <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ ingredient?.strIngredient }}</h1>
        </div>
        <!-- <pre>{{ ingredient }}</pre> -->
        <Meals :meals="meals" />
    </div>
</template>
  
<script setup>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from '../components/Meals.vue'


const route = useRoute();
const ingredient = computed(() => store.state.ingredient)
console.log(ingredient, "--ingredient")
const meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {

    store.dispatch('searchMealsByIngredient', route.params.ingredient)
})

</script>