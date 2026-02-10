<template>
  <div class="flex gap-4 mb-8">
    <RouterLink
      v-for="tab in tabs"
      :key="tab.name"
      :to="tab.path"
      class="px-4 py-2 rounded-t-lg border-b-2"
      :class="
        route.path === tab.path
          ? 'bg-blue-600 text-white border-blue-600'
          : 'bg-white/5 hover:bg-white/10 text-slate-400 border-transparent'
      "
    >
      {{ tab.name }}
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()
const tabs = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]
</script>
