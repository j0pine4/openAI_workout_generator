<template>
    <div>
        <h1 class="text-3xl font-semibold mb-4 leading-10"> Time </h1>
        <p class="text-gray-500 font-light mb-10"> If nothing is selected, this option will be ommitted from the workout. </p>
        <time-option-cards></time-option-cards>
    </div>

    <div>
        <h1 class="text-3xl font-semibold mb-4 leading-10"> Injuries </h1>
        <p class="text-gray-500 font-light mb-10"> If nothing is selected, this option will be ommitted from the workout. </p>
        <injury-option-cards></injury-option-cards>
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
    // const toggleGoal = () => {

    //     if(state.queryParams.goal == goal){
    //         state.queryParams.goal = null
    //     } else {
    //         state.queryParams.goal = goal
    //     }
    // }


</script>
