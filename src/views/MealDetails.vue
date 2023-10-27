<template>
    <div>
        <h1 class="text-xl font-bold mb-5 ">{{ meal.strMeal }}</h1>

        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="  object-cover rounded-t-[20px] " />
        <div class="flex mb-5">
            <div>Cartgory: {{ meal.strCategory }}</div>
            <div>Area: {{ meal.strArea }}</div>
            <div>Tags: {{ meal.strTags }}</div>
        </div>

<div>
    {{ meal.strInstructions }}
</div>

        <div class="flex gap-10 mb-28">
            <div>
                <h1 class="text-xl font-bold mb-3">Ingredients:{{ }}</h1>
                <ul>
                    <template v-for="(element, index) of new Array(20)">
                        <li v-if="meal[`strIngredient${index + 1}`]">
                            {{ index + 1 }} {{ meal[`strIngredient${index + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>

            <div>
                <h1 class="text-xl font-bold mb-3">Measures:{{ }}</h1>
                <ul>
                    <template v-for="(element, index) of new Array(20)">
                        <li v-if="meal[`strMeasure${index + 1}`]">
                            {{ index + 1 }} {{ meal[`strMeasure${index + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
            </div>
            <div class="bg-blue-200">
                <YoutubeButton :href="meal.strSource">View Origial Source</YoutubeButton>
            </div>
        </div>


    </div>
</template>

<script setup>

import axiosClient from "../axiosClient"
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router";
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRoute()
const meal = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
            meal.value = data.meals[0] || {}
        })
})

</script>