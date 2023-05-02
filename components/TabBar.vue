<template>
    <div class="w-full px-2 sm:px-0">
      <TabGroup :selectedIndex="state.currentTabIndex" @change="changeTab">
        <TabList class="flex space-x-1 rounded-xl bg-accent p-1 max-w-md mx-auto sticky top-4 z-20">
          <Tab
            v-for="category in CurrentTab"
            as="template"
            :key="category"
            v-slot="{ selected }"
          >
            <button
              :class="[
                'w-full rounded-lg py-2.5 text-sm font-semibold tracking-wide leading-5 text-base-content',
                'ring-transparent ring-opacity-0 ring-offset-0 ring-offset-primary focus:outline-none focus:ring-0',
                selected
                  ? 'bg-white shadow'
                  : 'text-base-100 hover:bg-white/[0.12] hover:text-white',
              ]"
              @click="state.currentTab = category"
            >
              {{ category }}
            </button>
          </Tab>
        </TabList>
  
        <TabPanels class="mt-6">
          <TabPanel v-for="i in Object.keys(CurrentTab).length" :key="i">
            <slot></slot>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </template>
  
  <script setup lang="ts">

  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
  import { useStore } from '../stores/useStore'
  import { CurrentTab } from '../models/CurrentTab'

  const state = useStore()

  const changeTab = (index: number) => {

    state.currentTabIndex = index

    if (process.client) {
      window.scrollTo(0,0)
    }
    
  }
  
  
  </script>
  