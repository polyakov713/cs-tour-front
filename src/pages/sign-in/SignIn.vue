<script setup lang="ts">
import { useRouter } from 'vue-router'

import { SignInForm } from '@/features/sign-in'

const router = useRouter()

function goToHome() {
  router.push({ name: 'home' })
}
</script>

<template>
  <article class="sign-in-page">
    <SignInForm
      class="sign-in-page__form"
      @sign-in="goToHome"
    />
  </article>
</template>

<style lang="postcss" scoped>
.sign-in-page {
  &__form {
    margin: 0 auto;
  }
}
</style>
