import { Configuration, OpenAIApi } from 'openai'
import { EquipmentOptions, InjuryOptions, MuscleGroups } from "~/models/QueryParams"
import { useStore } from "~/stores/useStore"


export const GeneratePrompt = () => {

    const runtimeConfig = useRuntimeConfig();
    const state = useStore()
    const openai = new OpenAIApi( new Configuration({
        apiKey: runtimeConfig.public.openApiKey
    }))

    const buildQuery = () => {

        // Beginning of Prompt
        let prompt = 'Act as my personal trainer and generate me a workout. Format your response as semantic html without css. Put the exercises in a single unordered list. Include a brief paragraph discussing the goals of the workout and any limitations. '

        // If no field is selcted return initial prompt
        // Check for the fitness level field
        if (state.queryParams.fitnessLevel){
            prompt += `I consider myself a ${state.queryParams.fitnessLevel} in the world of fitness. `
        }

        // Check for user goals
        if (state.queryParams.goal){
            prompt += `My goal for this workout is to ${state.queryParams.goal?.chatGptQuery}. `
        }

        // Check for user muscle groups
        if (state.queryParams.muscleGroupOptions?.length){
            prompt += `I want this workout to focus specifically on my `

            state.queryParams.muscleGroupOptions.forEach( (group: MuscleGroups) => {
                prompt += `${group.name}, `
            })
        }

        // Check for user time limitations
        if (state.queryParams.timeOptions){
            prompt += `I need to complete this workout in ${state.queryParams.timeOptions} minutes. `
        }

        // Check for user injuries
        if (state.queryParams.injuryOptions?.length){
            prompt += `I have injuries to my `

            state.queryParams.injuryOptions.forEach( (injury: InjuryOptions) => {
                prompt += `${injury.name}, `
            })

            prompt += ' so my workout needs to ommit exercises that cause potential stress to these areas.'
        }

        // Check for equipment
        if (state.queryParams.equipmentOptions?.length){
            prompt += `The only equipment I have available to me is `

            state.queryParams.equipmentOptions.forEach( (equipment: EquipmentOptions) => {
                prompt += `${equipment.name}, `
            })

            prompt += ' so my workout needs to ommit any exercises that use equipment other than this.'
        }

        // Ask for calorie breakdown at the end
        prompt += `I'm aware that it is difficult to estimate the amount of calories burned for an individual without knowing their physical attributes, but give me your best guess on how many calories this workout has burned. `

        return prompt
        
    }

    const generateWorkout = async () => {
        state.isLoading = true
        state.generatedWorkout = ""

        openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: buildQuery()
            }]
        }).then( resp => {
            state.isLoading = false
            state.generatedWorkout = resp.data.choices[0].message?.content
        })

    }

    return {
        buildQuery,
        generateWorkout
    }

}