<script setup>
import GlassCard from './GlassCard.vue'
</script>

<template>
  <GlassCard class="hover:scale-[1.01] transition duration-300">
    <div class="relative">
      <img src="@/assets/project_sample.jpg" class="rounded-2xl mb-4 opacity-95" />
      <span
        class="absolute top-3 right-3 text-xs bg-blue-100 text-blue-700 dark:bg-blue-600/20 dark:text-blue-300 px-3 py-1 rounded-full"
      >
        Project
      </span>
      <button class="absolute bottom-3 right-3 h-9 w-9 rounded-full bg-blue-600 text-white text-sm">
        →
      </button>
    </div>

    <h3 class="font-semibold text-base leading-snug">Brazilian E-Commerce Customer</h3>

    <div class="mt-2 flex flex-wrap gap-2 text-xs">
      <span
        class="rounded-full bg-blue-100 text-blue-700 dark:bg-blue-600/20 dark:text-blue-300 px-2.5 py-1"
      >
        Case Study
      </span>
      <span
        class="rounded-full bg-slate-200 text-slate-700 dark:bg-slate-500/20 dark:text-slate-300 px-2.5 py-1"
      >
        2026
      </span>
    </div>

    <p class="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-snug">
      Dashboard and segmentation analysis to surface high-value cohorts.
    </p>
  </GlassCard>
</template>
