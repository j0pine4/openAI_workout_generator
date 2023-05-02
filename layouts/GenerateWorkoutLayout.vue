<template>

    <top-nav></top-nav>

    <div class="container mx-auto">
  
      <!-- <pre> {{ state.queryParams }} </pre> -->

      <tab-bar>
        <slot></slot>
      </tab-bar>
      
      <!-- <div class="w-full h-80 mb-10">
        <img class="w-full h-full object-cover rounded-xl shadow-xl" src="https://images.unsplash.com/photo-1580670029149-5c00eec8bb66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
      </div> -->

      <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-6268121744351804"
        data-ad-slot="9445078662"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      
    </div>
  
  </template>
  
  <script setup lang="ts">
  
    import { useStore } from '../stores/useStore'

    useHead({
      script: [{
        'data-ad-client': 'ca-pub-6268121744351804',
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
        async: true
      },
      {
        children: "(adsbygoogle = window.adsbygoogle || []).push({});"
      }
    ]
    })

    const state = useStore()

    const colorMode = useColorMode()
    colorMode.preference = 'acid'
  
  </script>
  