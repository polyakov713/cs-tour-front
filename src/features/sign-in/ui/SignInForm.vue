<script setup lang="ts">
import { reactive } from 'vue'

import { AppField } from '@/shared/ui/field'
import { AppButton } from '@/shared/ui/button'

import { useSignInCore } from '../composables/sign-in-core'
import type { SignInFormData } from '../types'

const emit = defineEmits(['sign-in'])

const formData = reactive<SignInFormData>({
  username: '',
  password: '',
})

const { submitFormHandler } = useSignInCore()

async function onSubmit() {
  try {
    await submitFormHandler(formData)

    emit('sign-in')
  } catch (err) {
    console.error('SignInForm error:', err)
  }
}
</script>

<template>
  <form
    class="sign-in-form"
    @submit.prevent="onSubmit"
  >
    <AppField
      v-model="formData.username"
      id="username"
      label="Username"
      placeholder="hero"
      class="sign-in-form__field"
    />
    <AppField
      v-model="formData.password"
      id="password"
      label="Password"
      type="password"
      class="sign-in-form__field"
    />
    <AppButton
      width="100%"
      type="submit"
      class="sign-in-form__button"
    >
      Sign in
    </AppButton>
  </form>
</template>

<style lang="postcss" scoped>
.sign-in-form {
  width: 100%;
  max-width: 320px;

  &__field {
    display: block;
    margin-bottom: 16px;
  }

  &__button {
    margin-top: 20px;
  }
}
</style>
