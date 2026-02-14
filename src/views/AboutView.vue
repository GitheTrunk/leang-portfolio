<script setup>
import GlassCard from '@/components/GlassCard.vue'
import ToolRow from '@/components/ToolRow.vue'
import {
  FrontendTools,
  BackendTools,
  DatabaseTools,
  DevOpsTools,
  MobileTools,
  OtherTools,
} from '@/data/tools'
</script>

<template>
  <div class="space-y-8">
    <GlassCard>
      <div class="space-y-5">
        <span class="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-600">
          Software Developer
        </span>

        <h1 class="text-3xl font-bold">Building Practical Software & Interactive Systems</h1>

        <p class="text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          I develop modern web applications, system simulations, and structured software tools. I
          focus on usability, architecture, and real-world problem solving.
        </p>

        <p class="text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          During my free time, I like to play video games, watch movies, listen to music, and
          explore new technologies. I also spend time with my family and friends, and enjoy outdoor
          activities like badminton and chilling at the park. I’m always looking for new ways to
          learn and grow, both personally and professionally.
        </p>
      </div>
    </GlassCard>

    <GlassCard>
      <div class="grid md:grid-cols-2 gap-10">
        <div>
          <h2 class="text-xl font-semibold mb-4">
            <i class="fas fa-laptop-code mr-2"></i>What I Build
          </h2>
          <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>• Vue + Tailwind web applications</li>
            <li>• System & algorithm simulators</li>
            <li>• API-connected dashboards</li>
            <li>• Structured UI component systems</li>
          </ul>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-4">
            <i class="fas fa-cogs mr-2"></i>Core Capabilities
          </h2>
          <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>• TypeScript architecture</li>
            <li>• Component design patterns</li>
            <li>• REST API integration</li>
            <li>• Debugging & performance tuning</li>
          </ul>
        </div>
      </div>
    </GlassCard>

    <GlassCard>
      <div class="space-y-10">
        <h2 class="text-2xl font-semibold"><i class="fas fa-tools mr-2"></i>Skills & Tools</h2>

        <ToolRow title="Frontend" :items="FrontendTools" />
        <ToolRow title="Backend" :items="BackendTools" />
        <ToolRow title="Databases" :items="DatabaseTools" />
        <ToolRow title="DevOps" :items="DevOpsTools" />
        <ToolRow title="Mobile" :items="MobileTools" />
        <ToolRow title="Other" :items="OtherTools" />
      </div>
    </GlassCard>

    <GlassCard>
      <h2 class="text-xl font-semibold mb-4"><i class="fas fa-bullseye mr-2"></i>Current Focus</h2>

      <div class="grid md:grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-300">
        <div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800">Intermidiate Vue patterns</div>

        <div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800">API & backend design</div>

        <div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800">Testing & reliability</div>

        <div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800">System design concepts</div>
      </div>
    </GlassCard>

    <GlassCard>
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 class="text-xl font-semibold">
            <i class="fas fa-handshake mr-2"></i>Interested in working together?
          </h2>
          <p class="text-sm text-slate-600 dark:text-slate-300 mt-2">
            Explore my projects or reach out & I’m open to collaboration.
          </p>
        </div>

        <div class="flex gap-4">
          <button class="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            <RouterLink to="/projects" class="no-underline text-white"
              ><i class="fas fa-folder-open pr-2"></i>View Projects</RouterLink
            >
          </button>

          <button class="px-5 py-2 rounded-lg bg-slate-200 dark:bg-slate-800">
            <RouterLink to="/contact" class="no-underline text-slate-900 dark:text-slate-100"
              ><i class="fas fa-envelope pr-2"></i>Contact Me</RouterLink
            >
          </button>
        </div>
      </div>
    </GlassCard>
  </div>
</template>
