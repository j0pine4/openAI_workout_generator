import { defineStore } from 'pinia'
import { CurrentTab } from '../models/CurrentTab'
import { FitnessLevel, InjuryOptions, MuscleGroups, QueryParams } from '~/models/QueryParams'

export const useStore = defineStore('store', () => {
    const currentTab = ref<CurrentTab>(CurrentTab.FITNESS_LEVEL)

    const isLoading = false
    const generatedWorkout = ref<string | undefined>("")

    const queryParams = ref<QueryParams>({
      fitnessLevel: null,
      selectedGoal: null,
      goal: null,
      muscleGroupOptions: [],
      timeOptions: null,
      injuryOptions: []
    })

    const injuryOptions = ref<InjuryOptions[]>([
      { 
          id: 1, 
          name: 'Neck',
          image_url: 'https://plus.unsplash.com/premium_photo-1671717725998-067392b85d4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          active: false
      },
      { 
          id: 2, 
          name: 'Shoulders',
          image_url: 'https://images.unsplash.com/photo-1497044383938-c0486a41b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80',
          active: false
      },
      { 
          id: 3, 
          name: 'Elbows',
          image_url: 'https://images.unsplash.com/photo-1604603565810-9f2a167d6b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          active: false
      },
      { 
          id: 4, 
          name: 'Wrists',
          image_url: 'https://images.unsplash.com/photo-1627738641656-aebd944716cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          active: false
      },
      { 
          id: 5, 
          name: 'Back',
          image_url: 'https://images.unsplash.com/photo-1620939068789-fc0c88ddb71e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          active: false
      },
      { 
          id: 6, 
          name: 'Hips',
          image_url: 'https://images.unsplash.com/photo-1601005625935-5a2e39372a3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          active: false
      },
      { 
          id: 7, 
          name: 'Knees',
          image_url: 'https://images.unsplash.com/photo-1602005106541-b79126495de7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          active: false
      },
  ])

  const muscleGroupOptions = ref<MuscleGroups[]>([
    { 
        id: 1, 
        name: 'Upper Body',
        image_url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        active: false
    },
    { 
        id: 2, 
        name: 'Lower Body',
        image_url: 'https://images.unsplash.com/photo-1609899517237-77d357b047cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        active: false
    },
    { 
        id: 3, 
        name: 'Core',
        image_url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        active: false
    },
    { 
        id: 4, 
        name: 'Biceps',
        image_url: 'https://images.unsplash.com/photo-1578229353624-a4007142da75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        active: false
    },
    { 
        id: 5, 
        name: 'Triceps',
        image_url: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
        active: false
    },
    { 
        id: 6, 
        name: 'Back',
        image_url: 'https://images.unsplash.com/photo-1599577456698-e1e9ae4f4e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        active: false
    },
    { 
        id: 7, 
        name: 'Chest',
        image_url: 'https://images.unsplash.com/photo-1652363722833-509b3aac287b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        active: false
    },
    { 
        id: 8, 
        name: 'Shoulders',
        image_url: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        active: false
    },
    { 
        id: 9, 
        name: 'Quadriceps',
        image_url: 'https://images.unsplash.com/photo-1534368420009-621bfab424a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        active: false
    },
    { 
        id: 10, 
        name: 'Hamstrings',
        image_url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        active: false
    },
    { 
        id: 11, 
        name: 'Calfs',
        image_url: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        active: false
    },
  ])

    return { currentTab, injuryOptions, muscleGroupOptions, queryParams, isLoading, generatedWorkout }
  })