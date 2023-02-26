<script setup lang="ts">
import { useRouter } from 'vue-router'

import { AppLogo } from '@/shared/ui/logo'
import { AppButton } from '@/shared/ui/button'

const router = useRouter()

function goToSignIn() {
  router.push({ name: 'sign-in' })
}
</script>

<template>
  <header class="header">
    <div class="header__left">
      <router-link to="/">
        <app-logo />
      </router-link>
    </div>
    <div class="header__right">
      <AppButton @click="goToSignIn">Sign in</AppButton>
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
