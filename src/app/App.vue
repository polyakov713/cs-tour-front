<script setup lang="ts">
import { TheHeader } from '@/widgets/header'
</script>

<template>
  <div class="app">
    <the-header class="app__header" />
    <main class="app__main">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app__header {
  flex-shrink: 0;
}

.app__main {
  flex-grow: 1;
}
</style>
