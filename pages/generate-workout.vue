<template>

    <top-nav></top-nav>

    <div class="container mx-auto px-4 lg:px-0">

        <loading-skeleton v-if="state.isLoading"></loading-skeleton>

        <div  v-if="state.generatedWorkout && !state.isLoading">
            <button class="btn btn-accent mb-6" 
            v-if="state.generatedWorkout"
            @click="state.generatedWorkout = ''; state.currentTab = CurrentTab.FITNESS_LEVEL; router.push('/')"> Back </button>

            <!-- <p> {{ state.generatedWorkout }} </p> -->
            <div class="workout" v-html="state.generatedWorkout"></div>

        </div>

        <!-- <div class="w-full h-80 my-10">
            <img class="w-full h-full object-cover rounded-xl shadow-xl" src="https://images.unsplash.com/photo-1580670029149-5c00eec8bb66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
        </div> -->

    </div>
  
</template>

<script setup lang="ts">

import { useStore } from '../stores/useStore'
import { GeneratePrompt } from '../composables/useGeneratePrompt'
import { CurrentTab } from '~/models/CurrentTab'

const state = useStore()
const router = useRouter()
const { generateWorkout } = GeneratePrompt()

const colorMode = useColorMode()
colorMode.preference = 'acid'

onMounted( async () => {
    await generateWorkout()
})

</script>

<style>
    .workout h1{
        @apply
        text-3xl font-semibold leading-10 
    }

    h2{
        @apply
        text-2xl font-semibold mb-4 leading-10
    }

    .workout p{
        @apply
        text-xl
    }

    .workout ul{
        @apply
        my-4
    } 

    .workout li{
        @apply
        py-2
    } 
</style>
