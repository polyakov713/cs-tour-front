<script setup lang="ts">
import { ref } from 'vue'

import { AppField } from '@/shared/ui/field'

const text = ref('')
</script>

<template>
  <article class="home-page">
    <h1>Home</h1>
    <AppField v-model="text" placeholder="qwe" id="text" class="text" label="text" :disabled="false" />
  </article>
</template>
