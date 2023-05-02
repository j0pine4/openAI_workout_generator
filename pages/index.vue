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

    <div v-if="state.currentTab == CurrentTab.EQUIPMENT"> 
        <h1 class="text-3xl font-semibold mb-6 leading-10"> Select all <span class="text-accent font-bold bg-base-content py-1 px-3 lg:py-2 lg:px-4 rounded-full">equipment</span> you have available for this workout... </h1>
        <equipment-tab></equipment-tab>
    </div>

    <div class="max-w-sm mx-auto">

        <button class="btn btn-accent w-full mt-10 mb-4" @click="router.push('/generate-workout')"> Generate </button>

        <div class="flex justify-center items-center gap-4 mb-10 w-full px-2">

            <!-- Previous Button -->
            <button class="btn btn-disabled w-1/2" v-if="state.currentTabIndex == 0" > Previous </button>
            <button class="btn btn-outline w-1/2" v-if="state.currentTabIndex != 0" @click="previousTab"> Previous </button>

            <button class="btn btn-disabled w-1/2" v-if="state.currentTabIndex == Object.values(CurrentTab).length - 1" > Next </button>
            <button class="btn btn-outline w-1/2" v-if="state.currentTabIndex != Object.values(CurrentTab).length - 1" @click="nextTab"> Next </button>  
        </div>

    </div>

  
  </template>
  
  <script setup lang="ts">
  
    import { CurrentTab } from '../models/CurrentTab'
    import { useStore } from '../stores/useStore'
    
    const state = useStore()
    const router = useRouter()

    const nextTab = () => {
        state.currentTabIndex += 1

        // Get keys of ENUM
        const keys = Object.values(CurrentTab)
        state.currentTab = keys[state.currentTabIndex]

        if (process.client) {
            window.scrollTo(0,0)
        }
    }

    const previousTab = () => {
        state.currentTabIndex -= 1

        // Get keys of ENUM
        const keys = Object.values(CurrentTab)
        state.currentTab = keys[state.currentTabIndex]

        if (process.client) {
            window.scrollTo(0,0)
        }
    }

    definePageMeta({
        layout: "generate-workout-layout",
    });
  
  </script>
  