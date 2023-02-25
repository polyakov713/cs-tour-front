<script setup lang="ts">
interface Props {
  modelValue?: string | number
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
})

const emit = defineEmits(['update:modelValue'])

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value)
}
</script>

<template>
  <input
    :value="modelValue"
    class="app-input"
    @input="onInput"
  />
</template>

<style lang="postcss" scoped>
.app-input {
  height: 40px;
  padding: 0 12px;
  min-width: 280px;

  font-size: inherit;
  color: var(--color-white);

  background-color: var(--color-bg-dark);
  border: 1px solid transparent;
  border-radius: 4px;
  transition: all .3s ease;

  &:hover, &:focus {
    border-color: var(--color-blue);
    outline: none;
  }

  &:disabled {
    &:hover, &:focus {
      border-color: transparent;
      cursor: not-allowed;
    }
  }
}
</style>
