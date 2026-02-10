<script setup>
import GlassCard from './GlassCard.vue'
function autoWelcome() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}
</script>

<template>
  <GlassCard>
    <div class="relative h-48 overflow-hidden rounded-2xl">
      <img
        src="@/assets/banner.jpg"
        alt="Workspace"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent dark:from-slate-950/90 dark:via-slate-900/40"
      ></div>
      <div class="relative z-10 h-full p-6 flex flex-col justify-between">
        <div class="text-xs text-slate-600 dark:text-slate-300">2026</div>
        <div>
          <p class="text-sm text-slate-600 dark:text-slate-300">{{ autoWelcome() }}</p>
          <h1 class="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">
            Hey there, welcome back!
            <span class="block text-sm font-medium text-blue-600 dark:text-blue-300">
              Ready to build something beautiful today?
            </span>
          </h1>
        </div>
      </div>
    </div>
  </GlassCard>
</template>
