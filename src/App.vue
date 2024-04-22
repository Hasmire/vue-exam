<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Toaster from '@/components/ui/toast/Toaster.vue'
</script>

<template>
  <div class="bg-slate-950 text-white min-h-screen font-inter flex items-center flex-col p-4">
    <Toaster />
    <RouterView />
  </div>
</template>
