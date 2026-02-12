<script setup>
import GlassCard from './GlassCard.vue'
import 'primeicons/primeicons.css'
import { stats } from '../data/stats.ts'
</script>

<template>
  <GlassCard>
    <div class="flex items-center justify-between">
      <h3 class="font-semibold"><i class="pi pi-chart-line pr-2"></i>Career Stats</h3>
      <span class="text-xs text-slate-500">Updated this week</span>
    </div>
    <div class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
      <div
        v-for="s in stats"
        :key="s.label"
        class="rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/60 px-1.5 py-2 min-w-0"
      >
        <div class="flex items-center gap-2">
          <div class="h-8 w-8 rounded-lg flex items-center justify-center" :class="s.accent">
            <i :class="s.icon"></i>
          </div>
          <div class="min-w-0">
            <p class="text-lg font-semibold">{{ s.value }}</p>
            <p class="text-xs text-slate-500 dark:text-slate-400 truncate">
              {{ s.label }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </GlassCard>
</template>
