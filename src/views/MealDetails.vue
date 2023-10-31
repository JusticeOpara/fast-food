<template>
    <div class="bg-red-500 h-full w-full px-28 max-sm:px-0 mt-10">

        <img :src="meal.strMealThumb" :alt="meal.strMeal"
            class="object-cover rounded-t-[20px] w-full h-[400px] relative " />


        <div class="bg-orange-300 rounded-t-[50px] flex flex-col justify-center absolute top-[450px] w-[82.5%] max-md:w-full h-full px-10">
            <h1 class="text-xl font-bold font-ClashDisplay pl-2">{{ meal.strMeal }}</h1>


            <div class="flex justify-between px-">

                <div>
                    <h1 class="text-xl font-bold font-ClashDisplay">Cartgory</h1>
                    <p class="text-sm font-Satoshi leading-normal"> {{ meal.strCategory }}</p>
                </div>
                <div>
                    <h1 class="text-xl font-bold font-ClashDisplay">Area</h1>
                    <p class="text-sm font-Satoshi leading-normal">  {{ meal.strArea }}</p>
                </div>
                <div>
                    <h1 class="text-xl font-bold font-ClashDisplay">Tags</h1>
                    <p class="text-sm font-Satoshi leading-normal">{{ meal.strTags }}</p>
                </div>
                <div>
                    <h1 class="text-xl font-bold font-ClashDisplay ">Ingredients {{ }}</h1>
                    <ul>

                        <template v-for="(element, index) of new Array(20)">
                            <li v-if="meal[`strIngredient${index + 1}`]" class="text-sm font-Satoshi leading-normal">
                                {{ meal[`strIngredient${index + 1}`] }}
                            </li>
                        </template>
                    </ul>
                </div>

                <div>
                    <h1 class="text-xl font-bold font-ClashDisplay">Measures {{ }}</h1>
                    <ul>
                        <template v-for="(element, index) of new Array(20)">
                            <li v-if="meal[`strMeasure${index + 1}`]" class="text-sm font-Satoshi leading-normal">
                                {{ meal[`strMeasure${index + 1}`] }}
                            </li>
                        </template>
                    </ul>
                </div>

            </div>

            <div class="bg-white mb-20">
                <h1 class="font-ClashDisplay">Procedure</h1>
                <p class="font-bold font-Satoshi">
                    {{ meal.strInstructions }}
                </p>

            </div>

        </div>


        <!-- <div>
            <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
        </div>
        <div class="bg-blue-200">
            <YoutubeButton :href="meal.strSource">View Origial Source</YoutubeButton>
        </div> -->

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