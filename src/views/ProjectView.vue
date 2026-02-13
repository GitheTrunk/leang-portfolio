<script setup>
import GlassCard from '@/components/GlassCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { listProjects } from '@/data/project'
</script>

<template>
  <div class="space-y-6">
    <GlassCard>
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-semibold">Projects</h1>
          <p class="text-sm text-slate-400 mt-2">
            A focused list of portfolio work, experiments, and client builds.
          </p>
        </div>
        <span class="text-xs bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">{{ listProjects.length }} Total</span>
      </div>
    </GlassCard>

    <div class="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
      <ProjectCard v-for="project in listProjects" :key="project.title" :project="project" />
    </div>
  </div>
</template>
