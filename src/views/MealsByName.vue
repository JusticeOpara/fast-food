
<template>
    <div class="p-8">
        <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals" v-model="keyword"
            @change="searchMeals" />
    </div>

    <Meals :meals="meals" />
</template>


<script setup>

import { computed } from '@vue/reactivity';
import store from '../store';
import { onMounted,ref } from 'vue';
import { useRoute } from 'vue-router'
import Meals from '../components/Meals.vue';

const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

console.log(meals, "--meals meals");


function searchMeals() {
if(keyword.value){
    store.dispatch("searchMeals", keyword.value);
}else{
    store.commit("setSearchedMeals",[])
}
  
}
onMounted(()=>{
   keyword.value =  route.params.name
   if(keyword.value){
    searchMeals
   }
})

</script>