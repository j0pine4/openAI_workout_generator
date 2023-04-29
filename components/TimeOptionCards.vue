<template>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

        <div 
            class="card bg-white shadow-xl" 
            @click="toggleTimeOptions(TimeOptions.UNDER_25)"
            :class="state.queryParams.timeOptions == TimeOptions.UNDER_25 ? 'active' : '' "
        >
            <figure class="px-10 pt-10">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="h-60 w-full object-cover rounded-xl" alt="Beginner" />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-3xl">Under 25 Minutes</h2>
                <p class="">You need a fast but challenging workout</p>
            </div>
        </div>

        <div 
            class="card bg-white shadow-xl" 
            @click="toggleTimeOptions(TimeOptions.UNDER_45)"
            :class="state.queryParams.timeOptions == TimeOptions.UNDER_45 ? 'active' : '' "
        >
            <figure class="px-10 pt-10">
                <img src="https://images.unsplash.com/photo-1528720208104-3d9bd03cc9d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="h-60 w-full object-cover rounded-xl" alt="Beginner" />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-3xl">Under 45 Minutes</h2>
                <p class="">You have some time to spare for a great workout</p>
            </div>
        </div>

        <div 
            class="card bg-white shadow-xl" 
            @click="toggleTimeOptions(TimeOptions.UNDER_60)"
            :class="state.queryParams.timeOptions == TimeOptions.UNDER_60 ? 'active' : '' "
        >
            <figure class="px-10 pt-10">
                <img src="https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="h-60 w-full object-cover rounded-xl" alt="Beginner" />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-3xl">Under 60 Minutes</h2>
                <p class="">You are willing to spend a good amount of time on this workout</p>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">

    // Imports
    import { useStore } from '../stores/useStore'

    // Data Models/Enums
    import { TimeOptions } from '../models/QueryParams'

    // Declarations
    const state = useStore()

    // Functions
    const toggleTimeOptions = (timeOptions: TimeOptions) => {

        if(state.queryParams.timeOptions == timeOptions){
            state.queryParams.timeOptions = null
        } else {
            state.queryParams.timeOptions = timeOptions
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