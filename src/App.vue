<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-slate-950 text-white min-h-screen font-inter flex items-center flex-col p-4">
    <nav class="text-3xl">
      <RouterLink to="/">TaskManager</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>
