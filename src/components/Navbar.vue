
<template>
    <nav class=" w-full h-[70px] px-28 max-md:px-6 flex justify-between items-center">
        <router-link :to="{ name: 'Home' }" class="inline-flex items-center h-full text-base font-medium ">
            <img src="../assets/foodie.png" class="w-[50px] h-auto" alt=" A food image" />
            <p class=" font-extrabold text-3xl font-ClashDisplay text-[#f9b111]">Foodie</p>

        </router-link>



        <div v-show="!mobile" class="flex items-center gap-1 font-Satoshi max-md:hidden">
            <router-link :to="{ name: 'byName' }"
                class="inline-flex font-bold text-base items-center px-2 h-full hover:text-[#f9b111] focus:text-[#f9b111]">Search Meals</router-link>

            <router-link :to="{ name: 'byLetter' }" 
            class="font-bold inline-flex items-center px-2 h-full hover:text-[#f9b111] focus:text-[#f9b111]">Meal-by-Alphabet</router-link>

            <router-link :to="{ name: 'ingredients' }"
                class="font-bold inline-flex items-center px-2 h-full hover:text-[#f9b111] focus:text-[#f9b111]">Meals-By-Ingerdients</router-link>
        </div>

        <div @click="toggleMobileNav"
            class="h-[45px] w-[45px] justify-center  max-md:flex max-md: xl:hidden  cursor-pointer hover:text-primary transition-all ease-in-out duration-300">
            <img v-show="mobile" :class="{ 'icon-active': mobileNav }" src="../assets/navbar-icon.svg"
                class="w-[33.75px] h-auto cursor-pointer transition-[0.8s]" alt="navbar" />
        </div>

        <Transition name="mobile-nav">
            <ul v-show="mobileNav" @click.stop=""
                class="flex fixed flex-col items-center justify-evenly w-full max-w-[250px] h-screen z-[100]  bg-[#1D232B] top-0  left-0 font-Satoshi">

                <li class=" ">

                    <router-link :to="{name: 'byName'}" class="hover:text-[#f9b111] focus:text-[#f9b111] text-2xl  mr-0">Explore</router-link>
                </li>

                <li class="">

                    <router-link :to="{name: 'byLetter'}" class="hover:text-[#f9b111] focus:text-[#f9b111] text-2xl  mr-0 ">MealsbyLetter</router-link>
                </li>

                <li>
                    <router-link :to="{name: 'ingredients'}" class="hover:text-[#f9b111] focus:text-[#f9b111] text-2xl"> Meal by Category</router-link>
                </li>
                <li>
                    <router-link  to="/" class="text-2xl hover:text-[#f9b111] focus:text-[#f9b111]">kitchen tips </router-link>
                </li>

                <li>
                    <router-link to="/" class="text-2xl hover:text-[#f9b111] focus:text-[#f9b111]">About Us</router-link>
                </li>

            </ul>
        </Transition>
    </nav>
</template>


<script setup>

import { ref, onMounted } from 'vue';

const mobile = ref(false);
const mobileNav = ref(false); // Initialize mobileNav to false
const windowWidth = ref(window.innerWidth);

const toggleMobileNav = () => {
    console.log('toggleMobileNav called'); // Add this line for debugging
    mobileNav.value = !mobileNav.value;
};

const checkScreen = () => {
    windowWidth.value = window.innerWidth;
    if (windowWidth.value <= 915) {
        mobile.value = true;
    } else {
        mobile.value = false;
    }
};

onMounted(() => {
    window.addEventListener('resize', checkScreen);
    checkScreen();
});
</script>

 
  
<style>
.icon-active {
    transform: rotate(180deg);
}

.dropdown-nav {
    display: flex;
    position: fixed;
    flex-direction: column;
    background-color: brown;
    width: 100%;
    max-width: 250px;
    top: 10px;
    right: 0;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(-250px)
}

.mobile-nav-enter-to {
    transform: translateX(0);
}
</style>
 
