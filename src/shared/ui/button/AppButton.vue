<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'small' | 'medium' | 'large'
  kind?: 'default' | 'text'
  type?: 'button' | 'submit'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  kind: 'default',
  type: 'button',
})

const classes = computed(() => [
  `app-button--size--${props.size}`,
  `app-button--kind--${props.kind}`,
])
</script>

<template>
  <button
    :type="type"
    class="app-button"
    :class="classes"
  >
    <span class="app-button__wrapper">
      <slot />
    </span>
  </button>
</template>

<style scoped lang="postcss">
.app-button {
  position: relative;

  font-size: inherit;
  font-weight: 600;
  color: var(--color-black);

  background-color: var(--color-accent);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  transition: all .2s ease;

  &__wrapper {
    position: relative;
    z-index: 2;

    display: flex;
    align-items: center;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    right: 100%;

    width: 100%;
    height: 100%;
    background-color: #000;
    border-radius: 4px;
    opacity: .3;
    transition: right .2s ease;
  }

  &--size {
    &--small {
      height: 32px;
      padding: 0 12px;
    }
    &--medium {
      height: 40px;
      padding: 0 16px;
    }
    &--large {
      height: 48px;
      padding: 0 20px;
    }
  }

  &--kind {
    &--text {
      color: var(--color-white);
      background-color: transparent;

      &:hover {
        background-color: rgba(#1c1d24, .5);

        &::before {
          display: none;
        }
      }
    }
  }

  &:hover {
    color: var(--color-white);

    &::before {
      right: 0;
    }
  }
}
</style>
