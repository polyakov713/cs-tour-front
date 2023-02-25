<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import omit from 'lodash/omit'
import { AppInput } from '@/shared/ui/input'

interface Props {
  label?: string
}

withDefaults(defineProps<Props>(), {
  label: '',
})

const attrs = useAttrs()
const attrsWithoutClass = omit(attrs, 'class')

const componentClasses = computed(() => ({
  [attrs.class as string]: true,
  'app-field--disabled': attrs.hasOwnProperty('disabled') && attrs.disabled !== false,
}))
</script>

<template>
  <div class="app-field" :class="componentClasses">
    <label
      v-if="label"
      :for="attrs.id ? String(attrs.id) : undefined"
      class="app-field__label"
    >
      {{ label }}
    </label>
    <AppInput
      v-bind="attrsWithoutClass"
      class="app-field__input"
    />
  </div>
</template>

<style lang="postcss" scoped>
.app-field {
  display: inline-block;

  &__label {
    display: block;
    padding-bottom: 8px;
    cursor: pointer;
  }
}
</style>
