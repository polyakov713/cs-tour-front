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

<style scoped lang="postcss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__header {
    flex-shrink: 0;
  }

  &__main {
    flex-grow: 1;
  }
}
</style>
