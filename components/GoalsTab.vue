<template>

    <div class="flex flex-col w-full lg:flex-row" v-if="state.queryParams.selectedGoal == null">

        <div class="card bg-white shadow-xl" @click="state.queryParams.selectedGoal = GoalOptions.SPECIFIC">
            <figure class="px-10 pt-10">
                <img src="https://images.unsplash.com/photo-1584907600887-9732fa3647ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" class="h-60 w-full object-cover rounded-xl" alt="Photo of a woman climbing a mountain" />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-3xl">Specific Goal</h2>
                <p class="">Select this option if you want to train for a specific task. Examples of this could be running a marathon, getting more athletic, getting toned, etc</p>
            </div>
        </div>
        
        <div class="divider lg:divider-horizontal lg:px-6">OR</div> 

        <div class="card bg-white shadow-xl" @click="state.queryParams.selectedGoal = GoalOptions.MUSCLE_GROUPS">
            <figure class="px-10 pt-10">
                <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="h-60 w-full object-cover rounded-xl" alt="Photo of a woman climbing a mountain" />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-3xl">Muscle Groups</h2>
                <p class="">Select this if you want to specify the exact muscles you want to target for your workout. Such as Chest & Triceps, Back & Biceps, etc</p>
            </div>
        </div>

    </div>

    <button class="btn btn-accent mb-6" 
        v-if="state.queryParams.selectedGoal != null"
        @click="state.queryParams.selectedGoal = null; state.queryParams.goal = null"> Back </button>

    <!-- User Selected Specific Goal -->
    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" v-if="state.queryParams.selectedGoal == GoalOptions.SPECIFIC">
        <div 
            v-for="goal in goals"
            :key="goal.id"
            class="card bg-white shadow-xl" 
            @click="toggleGoal(goal)"
            :class="state.queryParams.goal?.id == goal.id ? 'active' : '' "
        >
            <figure class="px-10 pt-10">
                <img :src="goal.image_url" class="h-32 w-full object-cover rounded-xl" :alt="goal.title" />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-3xl">{{goal.title}}</h2>
                <p class="">{{ goal.description }}</p>
            </div>
        </div>
    </div>

    <!-- User wants to target specific muscle groups -->
    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10" v-if="state.queryParams.selectedGoal == GoalOptions.MUSCLE_GROUPS">

        <div 
            v-for="group in state.muscleGroupOptions"
            class="card bg-white shadow-xl" 
            :class="group.active ? 'active' : ''"
            @click="toggleMuscleGroupOptions(group)"
        >
            <figure class="px-10 pt-10">
                <img :src="group.image_url" class="h-60 w-full object-cover rounded-xl" :alt="group.name" />
            </figure>

            <div class="card-body">
                <h2 class="card-title text-3xl">{{ group.name }}</h2>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

    // Imports
    import { useStore } from '../stores/useStore'

    // Data Models/Enums
    import { WorkoutGoal, GoalOptions, MuscleGroups } from '../models/QueryParams'

    // Declarations
    const state = useStore()
    const goals = ref<WorkoutGoal[]>([
        {
            id: 0,
            title: 'Get Toned',
            description: 'Focus on fat loss and muscle definition',
            image_url: 'https://images.unsplash.com/photo-1520787497953-1985ca467702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1054&q=80',
            chatGptQuery: 'become more toned'
        },
        {
            id: 1,
            title: 'Cardio',
            description: 'Strengthen your heart and increase your stamina',
            image_url: 'https://images.unsplash.com/photo-1551927336-09d50efd69cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
            chatGptQuery: 'work on my cardio'
        },
        {
            id: 2,
            title: 'Build Muscle',
            description: 'Add muscle mass with whatever equipment you have available',
            image_url: 'https://images.unsplash.com/photo-1652363722833-509b3aac287b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            chatGptQuery: 'build more muscle'
        },
        {
            id: 3,
            title: 'Build Speed',
            description: 'Exercises geared towards maximum sprint speed',
            image_url: 'https://images.unsplash.com/photo-1526676317768-d9b14f15615a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            chatGptQuery: 'become faster'
        },
        {
            id: 4,
            title: 'Jump Higher',
            description: 'Looking for that first dunk?',
            image_url: 'https://images.unsplash.com/photo-1525914813433-886dc018469d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            chatGptQuery: 'increase my vertical'
        },
        {
            id: 5,
            title: 'Run a Marathon',
            description: 'A marathon can be intimidating, build towards this goal!',
            image_url: 'https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80',
            chatGptQuery: 'train for a marathon'
        },
    ])

    // Functions
    const toggleGoal = (goal: WorkoutGoal) => {

        if(state.queryParams.goal == goal){
            state.queryParams.goal = null
        } else {
            state.queryParams.goal = goal
        }
    }

    const findMuscleGroupInList = (group: MuscleGroups) => {
        return state.queryParams.muscleGroupOptions?.filter( (item) => {
            if(item.id == group.id){
                return true
            } else {
                return false
            }
        })
    }

    const removeMuscleGroupFromList = (group: MuscleGroups) => {
        let i = state.queryParams.muscleGroupOptions?.map(item => item.id).indexOf(group.id) 
        state.queryParams.muscleGroupOptions?.splice(i, 1) 
    }

    const toggleMuscleGroupOptions = (group: MuscleGroups) => {

        let found = findMuscleGroupInList(group)

        if(found.length){
            group.active = false
            removeMuscleGroupFromList(group)
        } else {
            group.active = true
            state.queryParams.muscleGroupOptions?.push(group)
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