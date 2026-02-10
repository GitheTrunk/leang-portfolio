<script setup lang="ts">
import RightPanel from '@/components/RightPanel.vue'
import SideBar from '@/components/SideBar.vue'
</script>

<template>
  <div
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 px-5 py-6 md:px-8"
  >
    <div
      class="pointer-events-none absolute -top-32 right-10 h-72 w-72 rounded-full bg-blue-200/50 dark:bg-blue-600/10 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-cyan-200/50 dark:bg-cyan-500/10 blur-3xl"
    ></div>

    <div class="grid grid-cols-12 gap-6">
      <aside class="col-span-12 lg:col-span-3">
        <SideBar />
      </aside>
      <main class="col-span-12 lg:col-span-6">
        <router-view />
      </main>
      <aside class="col-span-12 lg:col-span-3">
        <RightPanel />
      </aside>
    </div>
  </div>
</template>
