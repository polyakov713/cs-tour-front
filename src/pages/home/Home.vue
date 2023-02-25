<script setup lang="ts">
import { ref } from 'vue'

import { AppInput } from '@/shared/ui/input'

const text = ref('')
</script>

<template>
  <article class="home-page">
    <h1>Home</h1>
    <AppInput v-model="text" placeholder="qwe" />
  </article>
</template>
