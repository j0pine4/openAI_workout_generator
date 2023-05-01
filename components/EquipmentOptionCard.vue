<template>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <div 
            v-for="equipment in state.equipmentOptions"
            class="card bg-white shadow-xl" 
            :class="equipment.active ? 'active' : ''"
            @click="toggleEquipmentOptions(equipment)"
        >
            <figure class="px-10 pt-10">
                <img :src="equipment.image_url" class="h-60 w-full object-cover rounded-xl" :alt="equipment.name" />
            </figure>

            <div class="card-body">
                <h2 class="card-title text-3xl">{{ equipment.name }}</h2>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">

    // Imports
    import { useStore } from '../stores/useStore'

    // Data Models/Enums
    import { EquipmentOptions } from '../models/QueryParams'

    // Declarations
    const state = useStore()

    // Functions
    const findEquipmentInList = (equipment: EquipmentOptions) => {
        return state.queryParams.equipmentOptions?.filter( (item) => {
            if(item.id == equipment.id){
                return true
            } else {
                return false
            }
        })
    }

    const removeEquipmentFromList = (equipment: EquipmentOptions) => {
        let i = state.queryParams.equipmentOptions?.map(item => item.id).indexOf(equipment.id) 
        state.queryParams.equipmentOptions?.splice(i, 1) 
    }

    const toggleEquipmentOptions = (equipment: EquipmentOptions) => {

        let found = findEquipmentInList(equipment)

        if(found.length){
            equipment.active = false
            removeEquipmentFromList(equipment)
        } else {
            equipment.active = true
            state.queryParams.equipmentOptions?.push(equipment)
        }

    }

</script>
