<template>
    <h1 class="text-3xl font-semibold my-6 leading-10"> <span class="mt-10 text-accent font-bold bg-base-content py-1 px-3 lg:py-2 lg:px-4 rounded-full">Generating</span> Workout... </h1>
    <p class="text-gray-500 font-light mb-10"> This process could take a few minutes... </p>

    <div v-for="i in 10" class="h-6 bg-gray-200 w-full animate-pulse my-4"></div>

</template>