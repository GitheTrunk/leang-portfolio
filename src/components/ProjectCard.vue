<script setup>
import { computed, ref, nextTick } from 'vue'
import GlassCard from './GlassCard.vue'
import 'primeicons/primeicons.css'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const maxTechDisplay = 3
const displayedTechnologies = computed(
  () => props.project.technologies?.slice(0, maxTechDisplay) ?? [],
)
const remainingTechCount = computed(() =>
  Math.max(0, (props.project.technologies?.length ?? 0) - maxTechDisplay),
)
const remainingTechnologies = computed(
  () => props.project.technologies?.slice(maxTechDisplay) ?? [],
)

const moreTriggerRef = ref(null)
const showMoreTooltip = ref(false)
const tooltipStyle = ref({ top: '0', left: '0' })
let hideTimeout = null

function updateTooltipPosition() {
  nextTick(() => {
    if (!moreTriggerRef.value) return
    const rect = moreTriggerRef.value.getBoundingClientRect()
    const gap = 8
    tooltipStyle.value = {
      top: `${rect.top - gap}px`,
      left: `${rect.left + rect.width / 2}px`,
      transform: 'translate(-50%, -100%)',
    }
  })
}

function onMoreEnter() {
  if (hideTimeout) clearTimeout(hideTimeout)
  hideTimeout = null
  showMoreTooltip.value = true
  updateTooltipPosition()
}

function onMoreLeave() {
  hideTimeout = setTimeout(() => {
    showMoreTooltip.value = false
  }, 150)
}

function onTooltipEnter() {
  if (hideTimeout) clearTimeout(hideTimeout)
  hideTimeout = null
}

function onTooltipLeave() {
  onMoreLeave()
}
</script>

<template>
  <GlassCard
    class="group block transition-all duration-300 hover:shadow-xl hover:shadow-slate-300/40 dark:hover:shadow-black/50"
  >
    <div
      class="relative -m-5 -mb-0 aspect-[16/10] overflow-hidden rounded-t-2xl bg-slate-100 dark:bg-slate-800/50"
    >
      <img
        :src="project.imageUrl"
        :alt="project.title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"
        aria-hidden="true"
      />
      <div class="absolute left-4 top-4 flex gap-2">
        <span
          class="rounded-lg bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur dark:bg-slate-800/90 dark:text-slate-200"
        >
          {{ project.category }}
        </span>
        <span
          class="rounded-lg bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur dark:bg-slate-800/90 dark:text-slate-300"
        >
          {{ project.subject }}
        </span>
      </div>
      <a
        :href="project.projectLink"
        target="_blank"
        rel="noopener noreferrer"
        class="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm backdrop-blur transition hover:bg-blue-600 hover:text-white dark:bg-slate-800/90 dark:text-slate-200 dark:hover:bg-blue-500"
        aria-label="View on GitHub"
      >
        <i class="devicon-github-plain text-xl"></i>
      </a>
    </div>

    <div class="pt-4">
      <h3 class="text-lg font-semibold leading-tight text-slate-900 dark:text-slate-100">
        {{ project.title }}
      </h3>
      <p class="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {{ project.description }}
      </p>

      <div v-if="project.technologies?.length" class="mt-4 flex flex-wrap items-center gap-2">
        <template v-for="(tech, i) in displayedTechnologies" :key="`${project.title}-tech-${i}`">
          <span
            class="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-300"
          >
            <i
              v-if="(project.icons?.[i], 'colored')"
              :class="[project.icons[i], 'colored']"
              class="text-sm opacity-80"
            ></i>
            <span>{{ tech }}</span>
          </span>
        </template>
        <div
          v-if="remainingTechCount > 0"
          ref="moreTriggerRef"
          class="relative inline-flex"
          @mouseenter="onMoreEnter"
          @mouseleave="onMoreLeave"
        >
          <span
            class="cursor-help rounded-lg border border-dashed border-slate-300 px-2 py-1 text-xs text-slate-500 transition-colors hover:border-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:border-slate-600 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:bg-slate-700 dark:hover:text-slate-300"
          >
            +{{ remainingTechCount }}
          </span>
        </div>

        <Teleport to="body">
          <Transition name="tooltip">
            <div
              v-show="showMoreTooltip && remainingTechnologies.length > 0"
              class="fixed z-[100] w-40 min-w-[8rem] rounded-xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-600 dark:bg-slate-800"
              :style="tooltipStyle"
              @mouseenter="onTooltipEnter"
              @mouseleave="onTooltipLeave"
            >
              <p class="mb-2 text-xs font-medium text-slate-500 dark:text-slate-400">More</p>
              <div class="flex flex-col gap-1">
                <span
                  v-for="(tech, j) in remainingTechnologies"
                  :key="`${project.title}-more-${j}`"
                  class="inline-flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                >
                  <i
                    v-if="(project.icons?.[maxTechDisplay + j], 'colored')"
                    :class="[project.icons[maxTechDisplay + j], 'colored']"
                    class="text-[10px] shrink-0"
                  ></i>
                  {{ tech }}
                </span>
              </div>
            </div>
          </Transition>
        </Teleport>
      </div>
    </div>
  </GlassCard>
</template>

<style scoped>
.tooltip-enter-active,
.tooltip-leave-active {
  transition: opacity 0.15s ease;
}
.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
}
</style>
