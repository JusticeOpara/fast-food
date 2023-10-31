
<template>
    <nav class=" w-full bgg-[#d4e1ec]  h-[70px] px-28 max-md:px-0 flex justify-between items-center">
        <router-link :to="{ name: 'Home' }" class="inline-flex items-center h-full text-base font-medium ">
            <img src="../assets/foodie.png" class="w-[50px] h-auto" alt=" A food image" />
            <p class=" font-bold text-3xl font-ClashDisplay text-[#f9b111]">Foodie</p>

        </router-link>



        <div v-show="!mobile" class="flex items-center gap-1 font-Satoshi max-md:hidden">
            <router-link :to="{ name: 'byName' }"
                class=" inline-flex font-semibold text-base items-center px-2 h-full hover:bg-[#f9b111] ">Explore</router-link>

            <router-link :to="{ name: 'byLetter' }" 
            class="font-semibold inline-flex items-center px-2 h-full hover:bg-[#f9b111]">Alphacuisine</router-link>

            <router-link :to="{ name: 'ingredients' }"
                class="font-semibold inline-flex items-center px-2 h-full hover:bg-[#f9b111]">Culinary</router-link>
        </div>

        <div @click="toggleMobileNav"
            class="h-[45px] w-[45px] justify-center  max-md:flex max-md: xl:hidden  cursor-pointer hover:text-primary transition-all ease-in-out duration-300">
            <img v-show="mobile" :class="{ 'icon-active': mobileNav }" src="../assets/navbar-icon.svg"
                class="w-[33.75px] h-auto cursor-pointer transition-[0.8s]" alt="navbar" />
        </div>

        <Transition name="mobile-nav">
            <ul v-show="mobileNav" @click.stop=""
                class="flex fixed flex-col items-center justify-evenly w-full max-w-[250px] h-screen z-[100]  bg-white top-0  left-0 font-Satoshi">

                <li class=" bg-white ">

                    <router-link :to="{name: 'byName'}" class="hover:text-[#007aff]  mr-0  text-[#000]">Explore</router-link>
                </li>

                <li class="">

                    <router-link :to="{name: 'byLetter'}" class="hover:text-[#007aff]  mr-0 text-[#000]">Alphacuisine</router-link>
                </li>

                <li>
                    <router-link :to="{name: 'ingredients'}" class=""> Culinary</router-link>
                </li>
                <li>
                    <router-link  to="" class="">kitchen tips </router-link>
                </li>

                <li>
                    <router-link to="" class="">About Us</router-link>
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
 
