<script setup lang="ts">
import { AppLogo } from '@/shared/ui/app-logo'
</script>

<template>
  <header class="header">
    <div class="header__left">
      <router-link to="/">
        <app-logo />
      </router-link>
    </div>
    <div class="header__right">
      right
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #fff;
  background-color: var(--color-primary-dark);
}
</style>
