<script setup lang="ts">
import { AppLogo } from '@/shared/ui/logo'
import { AppButton } from '@/shared/ui/button'
</script>

<template>
  <header class="header">
    <div class="header__left">
      <router-link to="/">
        <app-logo />
      </router-link>
    </div>
    <div class="header__right">
      <AppButton>Sign in</AppButton>
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
  background-color: var(--color-bg-dark);
}
</style>
