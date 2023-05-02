export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@pinia/nuxt',],
    colorMode: {
      preference: 'system', // default theme
      dataValue: 'theme', // activate data-theme in <html> tag
      classSuffix: '',
    },
    css: ['@/assets/css/main.css',],
    plugins :[{ src: '~/plugins/vercel.ts', mode: 'client' }],
    runtimeConfig: {
      public: {
        openApiKey: process.env.OPEN_API_KEY
      }
    }
  });