<script setup>
import GlassCard from './GlassCard.vue'
import 'primeicons/primeicons.css'
import { techStack } from '../data/techStack'
import { learningList } from '../data/learning'
import { contactLinks } from '../data/contact'
</script>

<template>
  <div class="space-y-6">
    <GlassCard>
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-semibold"><i class="pi pi-cog pr-2"></i>Tech Stack</h3>
        <span class="text-xs text-slate-500">2026</span>
      </div>
      <div class="overflow-hidden relative mask-fade">
        <div
          class="flex items-center gap-6 text-[11px] text-slate-600 dark:text-slate-300 tech-marquee"
        >
          <template
            v-for="(item, index) in [...techStack, ...techStack]"
            :key="`${item.name}-${index}`"
          >
            <div class="flex shrink-0 items-center gap-2 p-2 hover:scale-110 transition">
              <div
                :class="`h-10 w-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center`"
              >
                <i :class="[item.icon, 'colored']" class="text-xl"></i>
              </div>
              <span class="whitespace-nowrap">{{ item.name }}</span>
            </div>
          </template>
        </div>
      </div>
    </GlassCard>

    <GlassCard>
      <h3 class="font-semibold mb-4"><i class="pi pi-book pr-2"></i>What I'm Learning</h3>
      <div class="space-y-3 text-xs">
        <div
          v-for="item in learningList"
          :key="item"
          class="flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-3 py-2 text-slate-600 dark:text-slate-300"
        >
          <i class="pi pi-check-circle text-green-500"></i>
          {{ item }}
        </div>
      </div>
    </GlassCard>

    <GlassCard>
      <h3 class="font-semibold mb-3"><i class="pi pi-envelope pr-2"></i>Get in touch</h3>
      <div class="flex items-center gap-2">
        <a
          v-for="item in contactLinks"
          :key="item.name"
          :href="item.href"
          class="flex items-center gap-1 rounded-xl bg-slate-100 dark:bg-slate-800 px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
          target="_blank"
          rel="noopener noreferrer"
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

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.tech-marquee {
  animation: marquee 50s linear infinite;
  width: max-content;
}

.tech-marquee:hover {
  animation-play-state: paused;
}

.mask-fade {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}
</style>
