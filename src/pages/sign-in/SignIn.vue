<script setup lang="ts">
import { SignInForm } from '@/features/sign-in'
</script>

<template>
  <article class="sign-in-page">
    <SignInForm class="sign-in-page__form" />
  </article>
</template>

<style lang="postcss" scoped>
.sign-in-page {
  &__form {
    margin: 0 auto;
  }
}
</style>
