<script setup>
import GlassCard from './GlassCard.vue'
import 'primeicons/primeicons.css'
const stats = [
  {
    label: 'Experience',
    value: 0,
    icon: 'pi pi-briefcase',
    accent: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300',
  },
  {
    label: 'Certificates',
    value: 10,
    icon: 'pi pi-graduation-cap',
    accent: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300',
  },
  {
    label: 'Projects',
    value: 5,
    icon: 'pi pi-folder',
    accent: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300',
  },
  {
    label: 'Current learning',
    value: 4,
    icon: 'pi pi-book',
    accent: 'bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300',
  },
]
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
