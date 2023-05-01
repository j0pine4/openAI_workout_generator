<template>

    <div>
        <p class="text-gray-500 font-light mb-10"> If nothing is selected, your workout could consist of any type of workout equipment. </p>
        <equipment-option-card></equipment-option-card>
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
