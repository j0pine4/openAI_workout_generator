export enum FitnessLevel {
    BEGINNER = 'Beginner',
    MODERATE = 'Moderate',
    ADVANCED = 'Advanced'
}

export enum TimeOptions {
    UNDER_25 = 'Under 25',
    UNDER_45 = 'Under 45',
    UNDER_60 = 'Under 60'
}

export enum GoalOptions {
    SPECIFIC = 'Specific Goal',
    MUSCLE_GROUPS = 'Muscle Groups',
}


export interface InjuryOptions {
    id: number,
    name: string,
    image_url: string,
    active: boolean
}

export interface EquipmentOptions {
    id: number,
    name: string,
    image_url: string,
    active: boolean
}

export interface MuscleGroups {
    id: number,
    name: string,
    image_url: string,
    active: boolean
}

export interface WorkoutGoal {
    id: number,
    title: string,
    description: string,
    image_url: string,
    chatGptQuery: string
}

export interface QueryParams {
    fitnessLevel: FitnessLevel | null,
    muscleGroupOptions: MuscleGroups[],
    selectedGoal: GoalOptions | null,
    goal: WorkoutGoal | null,
    timeOptions: TimeOptions | null,
    injuryOptions: InjuryOptions[],
    equipmentOptions: EquipmentOptions[],
}