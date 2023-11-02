<template>
    <div class=" h-full w-full px-28 max-md:px-0 mt-5  max-sm:mt-5">

        <img :src="meal.strMealThumb" :alt="meal.strMeal"
            class="object-cover rounded-t-[20px] w-full h-[400px] relative " />


        <div
            class="bg-white rounded-t-[50px] flex flex-col justify-between absolute top-[450px] w-[82.5%]  max-md:w-full py-10 px-10 max-md:px-5">
            <div class="flex gap-2 items-center mb-4">
                <h1 class="text-2xl max-sm:text-xl font-bold font-ClashDisplay pl-2 ">{{ meal.strMeal }}</h1>
                <div class="flex text-gray-500">
                    <img src="../assets/clock.svg" class="w-[20px]" alt="clock" />
                    <span>45min</span>
                </div>
                <div class="flex text-gray-500">
                    <img src="../assets/bar.svg" class="w-[20px]" allt="bar"/>
                    <span>Easy</span>
                </div>
            </div>



            <div class="flex justify-between mb-5 ">

                <div class="max-sm:hidden">
                    <h1 class="text-xl font-bold font-ClashDisplay">Cartgory</h1>
                    <p class="text-sm font-Satoshi leading-normal"> {{ meal.strCategory }}</p>
                </div>
                <div class="max-sm:hidden">
                    <h1 class="text-xl font-bold font-ClashDisplay">Area</h1>
                    <p class="text-sm font-Satoshi leading-normal"> {{ meal.strArea }}</p>
                </div>

                <div>
                    <h1 class="text-xl font-bold font-ClashDisplay max-sm:text-lg">Ingredients {{ }}</h1>
                    <ul>

                        <template v-for="(element, index) of new Array(20)">
                            <li v-if="meal[`strIngredient${index + 1}`]" class="text-sm font-Satoshi leading-normal">
                                {{ meal[`strIngredient${index + 1}`] }}
                            </li>
                        </template>
                    </ul>
                </div>

                <div>
                    <h1 class="text-xl font-bold font-ClashDisplay max-sm:text-lg">Measures {{ }}</h1>
                    <ul>
                        <template v-for="(element, index) of new Array(20)">
                            <li v-if="meal[`strMeasure${index + 1}`]" class="text-sm font-Satoshi leading-normal">
                                {{ meal[`strMeasure${index + 1}`] }}
                            </li>
                        </template>
                    </ul>
                </div>

            </div>

            <div class="bg-white w-full  ">
                <h1 class="font-ClashDisplay text-xl font-bold max-sm:text-lg">Procedure</h1>
                <p class="text-base font-Satoshi mb-5">
                    {{ meal.strInstructions }}
                </p>
                <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
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