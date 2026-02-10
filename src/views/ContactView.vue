<script setup>
import GlassCard from '@/components/GlassCard.vue'
</script>

<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 lg:col-span-7">
      <GlassCard>
        <h1 class="text-2xl font-semibold">Contact</h1>
        <p class="text-sm text-slate-400 mt-2">
          Let me know what you want to build. I reply within 24 hours.
        </p>

        <form class="mt-6 space-y-4">
          <div>
            <label class="text-sm text-slate-400" for="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              class="mt-2 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
          <div>
            <label class="text-sm text-slate-400" for="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@email.com"
              class="mt-2 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
          <div>
            <label class="text-sm text-slate-400" for="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Tell me about your project"
              class="mt-2 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            ></textarea>
          </div>
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400"
          >
            Send Message
          </button>
        </form>
      </GlassCard>
    </div>

    <div class="col-span-12 lg:col-span-5">
      <GlassCard>
        <h3 class="font-semibold mb-3">Details</h3>
        <div class="space-y-3 text-sm text-slate-400">
          <p>Location: Your City</p>
          <p>Email: you@email.com</p>
          <p>GitHub: github.com/yourname</p>
          <p>LinkedIn: linkedin.com/in/yourname</p>
        </div>
      </GlassCard>
    </div>
  </div>
</template>
