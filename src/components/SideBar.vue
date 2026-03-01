<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import GlassCard from '@/components/GlassCard.vue'

const route = useRoute()
const isDark = ref(false)
const navItems = [
  { name: 'Home', path: '/', icon: 'pi pi-home' },
  { name: 'About', path: '/about', icon: 'pi pi-user' },
  { name: 'Achievements', path: null, icon: 'pi pi-trophy' },
  { name: 'Projects', path: '/projects', icon: 'pi pi-folder-open' },
  { name: 'Blogs', path: null, icon: 'pi pi-book' },
  { name: 'Contact', path: '/contact', icon: 'pi pi-envelope' },
]

const applyTheme = (value) => {
  document.documentElement.classList.toggle('dark', value)
  localStorage.setItem('theme', value ? 'dark' : 'light')
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
}

onMounted(() => {
  const stored = localStorage.getItem('theme')
  isDark.value = stored === 'dark'
  applyTheme(isDark.value)
})
</script>

<template>
  <GlassCard class="h-full">
    <div class="flex flex-col gap-6">
      <div class="flex items-center gap-4">
        <div class="rounded-full p-1 bg-gradient-to-br from-blue-500 to-cyan-400">
          <img
            src="@/assets/profile.jpg"
            alt="Profile"
            class="h-14 w-14 rounded-full object-cover border border-slate-200 dark:border-slate-800"
          />
        </div>
        <div>
          <p class="text-sm text-slate-500 dark:text-slate-400">Software Dev</p>
          <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-100">GitheTrunk</h2>
        </div>
      </div>

      <a
        href="/Bun_Sengleang_Resume.pdf"
        download
        class="w-full rounded-xl bg-slate-100 dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 transition duration-300 flex items-center justify-center"
      >
        <i class="pi pi-download text-sm pr-2"></i>
        Download Resume
      </a>

      <nav class="space-y-2 text-sm">
        <div v-for="item in navItems" :key="item.name">
          <RouterLink
            v-if="item.path"
            :to="item.path"
            class="flex items-center justify-between rounded-xl px-4 py-2"
            :class="
              route.path === item.path
                ? 'bg-blue-600 text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5'
            "
          >
            <span><i :class="item.icon + ' text-sm pr-2'"></i>{{ item.name }}</span>
            <i class="pi pi-chevron-right text-xs"></i>
          </RouterLink>
          <!-- <div class="flex items-center rounded-xl px-4 py-2 text-slate-400 dark:text-slate-600">
            {{ item.name }}
          </div> -->
        </div>
      </nav>

      <div class="mt-auto space-y-4">
        <button
          type="button"
          class="flex w-full items-center justify-between rounded-xl bg-slate-100 dark:bg-white/5 px-4 py-3"
          @click="toggleTheme"
        >
          <span class="text-sm text-slate-700 dark:text-slate-300">
            {{ isDark ? 'Dark Mode' : 'Light Mode' }}
          </span>
          <div
            class="h-5 w-10 rounded-full flex items-center px-1 transition"
            :class="isDark ? 'bg-blue-600' : 'bg-slate-300'"
          >
            <div
              class="h-3 w-3 rounded-full bg-white transition"
              :class="isDark ? 'translate-x-5' : ''"
            ></div>
          </div>
        </button>
        <p class="mt-4 text-xs text-slate-500">© 2026 GitheTrunk. All rights reserved.</p>
      </div>
    </div>
  </GlassCard>
</template>
