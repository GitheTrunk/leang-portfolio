<script setup>
import GlassCard from './GlassCard.vue'
import 'primeicons/primeicons.css'

const listTechStack = [
  {
    name: 'Vue',
    icon: 'fa-brands fa-vuejs',
    accent: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300',
  },
  {
    name: 'Vite',
    icon: 'devicon-vitejs-plain',
    accent: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300',
  },
  {
    name: 'TypeScript',
    icon: 'fa-brands fa-typescript',
    accent: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300',
  },
  {
    name: 'Java',
    icon: 'fa-brands fa-java',
    accent: 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300',
  },
  {
    name: 'HTML',
    icon: 'fa-brands fa-html5',
    accent: 'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300',
  },
  {
    name: 'CSS',
    icon: 'fa-brands fa-css3-alt',
    accent: 'bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300',
  },
  {
    name: 'JavaScript',
    icon: 'fa-brands fa-js',
    accent: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300',
  },
  {
    name: 'Node.js',
    icon: 'fa-brands fa-node-js',
    accent: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300',
  },
  {
    name: 'Express',
    icon: 'fa-solid fa-server',
    accent: 'bg-gray-100 text-gray-700 dark:bg-gray-500/20 dark:text-gray-300',
  },
  {
    name: 'Git',
    icon: 'fa-brands fa-git-alt',
    accent: 'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300',
  },
  {
    name: 'Docker',
    icon: 'fa-brands fa-docker',
    accent: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300',
  },
  {
    name: 'Tailwind',
    icon: 'devicon-tailwindcss-plain',
    accent: 'bg-teal-100 text-teal-700 dark:bg-teal-500/20 dark:text-teal-300',
  },
  {
    name: 'Python',
    icon: 'fa-brands fa-python',
    accent: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300',
  },
  {
    name: 'Linux',
    icon: 'fa-brands fa-linux',
    accent: 'bg-gray-100 text-gray-700 dark:bg-gray-500/20 dark:text-gray-300',
  },
  {
    name: 'Cisco',
    icon: 'fa-solid fa-network-wired',
    accent: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300',
  },
  {
    name: 'MySQL',
    icon: 'fa-solid fa-database',
    accent: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300',
  },
  {
    name: 'PostgreSQL',
    icon: 'fa-solid fa-database',
    accent: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20  dark:text-blue-300',
  },
  {
    name: 'Supabase',
    icon: 'fa-solid fa-cloud',
    accent: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300',
  },
  {
    name: 'Flutter',
    icon: 'fa-brands fa-flutter',
    accent: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300',
  },
  {
    name: 'Dart',
    icon: 'fa-brands fa-dart',
    accent: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300',
  },
]

const listLearning = [
  { name: 'Improve Management in Teams' },
  { name: 'Create Better Dashboards' },
  { name: 'Learn new things' },
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
      <div class="overflow-hidden">
        <div
          class="flex items-center gap-6 text-[11px] text-slate-600 dark:text-slate-300 tech-marquee"
        >
          <template
            v-for="(item, index) in [...listTechStack, ...listTechStack]"
            :key="`${item.name}-${index}`"
          >
            <div class="flex shrink-0 items-center gap-2 p-2">
              <div
                :class="`h-10 w-10 shrink-0 rounded-lg ${item.accent} flex items-center justify-center`"
              >
                <i :class="item.icon" class="text-xl"></i>
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
  animation-play-state: pau3sed;
}
</style>
