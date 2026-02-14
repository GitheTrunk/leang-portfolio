<script setup lang="ts">
defineProps<{
  name: string
  icon: string
}>()
</script>

<template>
  <div
    class="group flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:scale-105 hover:-translate-y-1 transition duration-200"
  >
    <i :class="[icon, 'colored text-3xl']"></i>
    <span class="text-xs text-slate-600 dark:text-slate-300">
      {{ name }}
    </span>
  </div>
</template>
