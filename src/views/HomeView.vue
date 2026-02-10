<script setup>
import { RouterLink } from 'vue-router'
import TopBanner from '@/components/TopBanner.vue'
import StatsRow from '@/components/StatsRow.vue'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <div class="space-y-6">
    <TopBanner />
    <StatsRow />

    <section class="space-y-4">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-xl font-semibold">Featured</h2>
          <p class="text-sm text-slate-600 dark:text-slate-400">
            Recent analytics, dashboards, and case studies.
          </p>
        </div>
        <RouterLink class="text-sm text-blue-600 hover:text-blue-500" to="/projects">
          View all →
        </RouterLink>
      </div>
      <div class="grid lg:grid-cols-2 gap-6">
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  </div>
</template>
