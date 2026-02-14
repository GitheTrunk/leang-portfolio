<script setup lang="ts">
import ToolCard from './ToolCard.vue'
const techIcon = [
  { title: 'Frontend', icons: 'fas fa-laptop-code' },
  { title: 'Backend', icons: 'fas fa-server' },
  { title: 'Database', icons: 'fas fa-database' },
  { title: 'DevOps', icons: 'fas fa-cogs' },
  { title: 'Mobile', icons: 'fas fa-mobile-alt' },
  { title: 'Other', icons: 'fas fa-tools' },
]
defineProps<{
  title: string
  items: { name: string; icon: string }[]
}>()
</script>

<template>
  <div class="space-y-4">
    <h3 class="text-lg font-semibold">
      <i :class="techIcon.find((t) => t.title === title)?.icons || 'fas fa-tools'" class="mr-2"></i>
      {{ title }}
    </h3>

    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
      <ToolCard v-for="t in items" :key="t.name" :name="t.name" :icon="t.icon" />
    </div>
  </div>
</template>
