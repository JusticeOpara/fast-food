<template>
    <div class="px-28">
        <div class="h-[60vh] w-full bg-orange-500 rounded-[20px] flex my-10 justify-between">
            <div class="h-full w-[60%] rounded-l-[20px] bg-[#f9b111] font-ClashDisplay flex flex-col gap-[18px] justify-center pl-14 ">
      
                    <h1 className="font-bold text-3xl w-[500px] bg-red-300 leading-normal">
                       Welcome to <span class="">Foodie </span>
                    </h1>

                    <h1 className="text-xl font-bold"> Explore our menu by letter, ingredient, and more. </h1>

                    <h2 className="text-xl font-bold"> Savor flavors that dance on your taste buds,</h2>

                    <h1 className="text-xl font-bold w-[400px] bg-slate-100"> Unlock exclusive up to <span className=""> 30% </span> discounts for a taste-filled journey!"</h1>
                    
            </div>


            <div class="h-full w-[50%] bg-black rounded-r-[20px] flex justify-end">
                <img src="../assets/eating.jpeg" class="h-full w-full object-cover rounded-r-[20px]" alt="" />
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
    for (let i = 0; i < 10; i++) {
        axiosClient
            .get(`random.php`)
            .then(({ data }) => meals.value.push(data.meals[0]));
    }
});
</script>
  