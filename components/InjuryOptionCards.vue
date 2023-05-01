<template>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <div 
            v-for="injury in state.injuryOptions"
            class="card bg-white shadow-xl" 
            :class="injury.active ? 'active' : ''"
            @click="toggleInjuryOptions(injury)"
        >
            <figure class="px-10 pt-10">
                <img :src="injury.image_url" class="h-60 w-full object-cover rounded-xl" :alt="injury.name" />
            </figure>

            <div class="card-body">
                <h2 class="card-title text-3xl">{{ injury.name }}</h2>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">

    // Imports
    import { useStore } from '../stores/useStore'

    // Data Models/Enums
    import { InjuryOptions } from '../models/QueryParams'

    // Declarations
    const state = useStore()

    // Functions
    const findInjuryInList = (injury: InjuryOptions) => {
        return state.queryParams.injuryOptions?.filter( (item) => {
            if(item.id == injury.id){
                return true
            } else {
                return false
            }
        })
    }

    const removeInjuryFromList = (injury: InjuryOptions) => {
        let i = state.queryParams.injuryOptions?.map(item => item.id).indexOf(injury.id) 
        state.queryParams.injuryOptions?.splice(i, 1) 
    }

    const toggleInjuryOptions = (injury: InjuryOptions) => {

        let found = findInjuryInList(injury)

        if(found.length){
            injury.active = false
            removeInjuryFromList(injury)
        } else {
            injury.active = true
            state.queryParams.injuryOptions?.push(injury)
        }

    }

</script>
