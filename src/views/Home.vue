<template>
    <div class="px-28 max-md:px-6 ">
        <div
            class="h-[60vh] max-md:items-center max-sm:h-[100%] w-full rounded-[20px] flex my-10 justify-between max-md:justify-center">
            <div
                class="h-full w-[60%] rounded-l-[20px] max-md:rounded-[20px] bg-[#f9b111] font-ClashDisplay flex flex-col gap-[18px] max-md:gap-3 justify-center pl-14 max-md:p-6 max-md:w-full ">

                <h1
                    className="font-bold text-3xl w-[500px] max-md:w-full max-md:text-4xl max-sm:text-3xl bg-redd-300 leading-normal 2xl:text-5xl ">
                    Welcome to <span class="">Foodie. </span>
                </h1>

                <h1 className="text-xl font-bold max-sm:font-Satoshi max-sm:font-bold 2xl:text-2xl"> Explore our menu by letter,
                    ingredient, and more. </h1>

                <h2 className="text-xl font-bold max-sm:font-Satoshi max-sm:hidden 2xl:text-2xl"> Savor flavors that dance on your taste
                    buds,</h2>

                <h1 className="text-xl  font-bold max-sm:font-Satoshi max-sm:font-bold w-[400px] max-md:w-full"> Unlock
                    exclusive up to <span className=""> 30% </span> discounts for a taste-filled journey!"</h1>

            </div>


            <div class="h-full w-[50%] bg-black rounded-r-[20px] flex justify-end max-md:hidden ">
                <img src="../assets/eating.jpeg" class="h-full w-full object-cover rounded-r-[20px]" alt="eating" />
            </div>

        </div>

        <Meals :meals="meals" />
    </div>
</template>
  
<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";

import Meals from "../components/Meals.vue";
import axiosClient from "../axiosClient.js";

const meals = ref([]);

onMounted(async () => {
    for (let i = 0; i < 100; i++) {
        axiosClient
            .get(`random.php`)
            .then(({ data }) => meals.value.push(data.meals[0]));
    }
});
</script>
  