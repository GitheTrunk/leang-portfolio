<script setup>
import GlassCard from './GlassCard.vue'
import 'primeicons/primeicons.css'

const listLearning = [
  { name: 'Improve Management in Teams' },
  { name: 'Create Better Dashboards' },
  { name: 'Learn new thinks' },
  { name: 'Explore new tools' },
]

const listInTouch = [
  { name: 'GitHub', icon: 'pi pi-github', href: 'https://github.com/GitheTrunk' },
  { name: 'LinkedIn', icon: 'pi pi-linkedin', href: 'https://linkedin.com/in/bun-sengleang' },
  { name: 'Facebook', icon: 'pi pi-facebook', href: 'https://facebook.com/seng.leang.1023' },
  { name: 'Gmail', icon: 'pi pi-envelope', href: '#' },
]
</script>

<template>
  <div class="space-y-6">
    <GlassCard>
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-semibold"><i class="pi pi-cog pr-2"></i>Tech Stack</h3>
        <span class="text-xs text-slate-500">2026</span>
      </div>
      <div
        class="grid grid-cols-2 xl:grid-cols-4 gap-3 text-[11px] text-slate-600 dark:text-slate-300"
      >
        <div
          class="rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 p-2.5 text-center"
        >
          <div
            class="mx-auto mb-2 h-8 w-8 rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 flex items-center justify-center"
          >
            V
          </div>
          <span class="block truncate">Vue</span>
        </div>
        <div
          class="rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 p-2.5 text-center"
        >
          <div
            class="mx-auto mb-2 h-8 w-8 rounded-lg bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300 flex items-center justify-center"
          >
            TS
          </div>
          <span class="block truncate">TypeScript</span>
        </div>
      </div>
    </GlassCard>

    <GlassCard>
      <h3 class="font-semibold mb-4"><i class="pi pi-book pr-2"></i>What I'm Learning</h3>
      <div class="space-y-3 text-xs">
        <div
          v-for="item in listLearning"
          :key="item.name"
          class="flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-3 py-2 text-slate-600 dark:text-slate-300"
        >
          <i class="pi pi-check-circle text-green-500"></i>
          {{ item.name }}
        </div>
      </div>
    </GlassCard>

    <GlassCard>
      <h3 class="font-semibold mb-3"><i class="pi pi-envelope pr-2"></i>Get in touch</h3>
      <div class="flex items-center gap-2">
        <a
          v-for="item in listInTouch"
          :key="item.name"
          :href="item.href"
          class="flex items-center gap-1 rounded-xl bg-slate-100 dark:bg-slate-800 px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
        >
          <i :class="item.icon"></i>
        </a>
      </div>
      <p class="mt-4 text-xs text-slate-500 dark:text-slate-400">
        Let's build something great together. Feel free to connect with me.
      </p>
    </GlassCard>
  </div>
</template>
