<template>

    <!-- Fitness Level Tab -->
    <div v-if="state.currentTab == CurrentTab.FITNESS_LEVEL" class="mx-2 md:mx-0">
        <h1 class="text-3xl font-semibold mb-6 leading-10"> Select your <span class="text-accent font-bold bg-base-content py-1 px-3 lg:py-2 lg:px-4 rounded-full">current</span> level of Fitness... </h1>
        <p class="text-gray-500 font-light mb-10"> If nothing is selected, this option will be ommitted from the workout. </p>
        <fitness-level-card></fitness-level-card>
    </div>
    
    <div v-if="state.currentTab == CurrentTab.GOALS">
        <h1 class="text-3xl font-semibold mb-6 leading-10"> Select your <span class="text-accent font-bold bg-base-content py-1 px-3 lg:py-2 lg:px-4 rounded-full">primary</span> goal for this workout... </h1>
        <p class="text-gray-500 font-light mb-10"> If nothing is selected, this option will be ommitted from the workout. </p>
        <goals-tab></goals-tab>
    </div>

    <div v-if="state.currentTab == CurrentTab.CONSTRAINTS"> 
        <h1 class="text-3xl font-semibold mb-6 leading-10"> Select any <span class="text-accent font-bold bg-base-content py-1 px-3 lg:py-2 lg:px-4 rounded-full">limitations</span> you have for this workout... </h1>
        <constraints-tab></constraints-tab>
    </div>

    <div class="w-full flex justify-center items-center">
        <button class="btn btn-accent my-10 max-w-sm w-full" @click="router.push('/generate-workout')"> Generate </button>
    </div>
  
  </template>
  
  <script setup lang="ts">
  
    import { CurrentTab } from '../models/CurrentTab'
    import { useStore } from '../stores/useStore'
    
    const state = useStore()
    const router = useRouter()

    definePageMeta({
        layout: "generate-workout-layout",
    });
  
  </script>
  