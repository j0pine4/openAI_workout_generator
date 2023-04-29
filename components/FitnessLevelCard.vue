<template>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div 
            class="card bg-white shadow-xl" 
            @click="toggleFitnessLevel(FitnessLevel.BEGINNER)"
            :class="state.queryParams.fitnessLevel == FitnessLevel.BEGINNER ? 'active' : '' "
        >
            <figure class="px-10 pt-10">
                <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80" class="h-60 w-full object-cover rounded-xl" alt="Beginner" />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-3xl">Beginner</h2>
                <p class="">You're not very familiar with programming a workout or have been away from fitness for a long time</p>
            </div>
        </div>

        <div 
            class="card bg-white shadow-xl" 
            @click="toggleFitnessLevel(FitnessLevel.MODERATE)"
            :class="state.queryParams.fitnessLevel == FitnessLevel.MODERATE ? 'active' : '' "
        >
            <figure class="px-10 pt-10">
                <img src="https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="h-60 w-full object-cover rounded-xl" alt="Beginner" />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-3xl">Moderate</h2>
                <p class="">You have some experience with fitness and understand basic technique for many exercises</p>
            </div>
        </div>

        <div 
            class="card bg-white shadow-xl" 
            @click="toggleFitnessLevel(FitnessLevel.ADVANCED)"
            :class="state.queryParams.fitnessLevel == FitnessLevel.ADVANCED ? 'active' : '' "
        >
            <figure class="px-10 pt-10">
                <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="h-60 w-full object-cover rounded-xl" alt="Beginner" />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-3xl">Advanced</h2>
                <p class="">You are very comfortable in the world of fitness and have a lot of experience</p>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">

    // Imports
    import { useStore } from '../stores/useStore'

    // Data Models/Enums
    import { QueryParams, FitnessLevel } from '../models/QueryParams'

    // Declarations
    const state = useStore()

    // Functions
    const toggleFitnessLevel = (fitnessLevel: FitnessLevel) => {

        if(state.queryParams.fitnessLevel == fitnessLevel){
            state.queryParams.fitnessLevel = null
        } else {
            state.queryParams.fitnessLevel = fitnessLevel
        }
    }


</script>

<style>
    .card{
        @apply
        hover:bg-base-content
        hover:text-accent
        hover:scale-105
        leading-8  
        transition-all 
        duration-500 
        cursor-pointer
        rounded-xl
    }
    .active{
        @apply
        bg-base-content 
        text-accent
    }
</style>