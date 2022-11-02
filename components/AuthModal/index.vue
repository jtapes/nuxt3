<template>
  <BaseModal v-bind="attrs">
    <div class="modal-content d-f fd-c ai-c">
      <div class="mb-16">
        <div class="d-f ai-c">
          <BaseInput
            v-model="login"
            v-mask="'+7 (###) ###-##-##'"
            class="mb-8"
            placeholder="+7 ("
          />
          <!--          <BaseLoading class="ml-16" />-->
        </div>
        <BaseInput v-model="password" v-mask="'##-##'" placeholder="##-##" />
      </div>

      <div class="d-f">
        <BaseButton class="mr-16" @click="logIn">login</BaseButton>
        <!--        <BaseButton class="" :color="'blue'">registration</BaseButton>-->
      </div>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { navigateTo } from '#app'
import { AuthAdapter } from '~/application/adapters/AuthAdapter'

const attrs = useAttrs()
const authAdapter = new AuthAdapter()
const login = ref('')
const password = ref('')
const logIn = async () => {
  const authLogIn = await authAdapter.logIn(
    login.value.replace(/[+\- ()]/g, ''),
    password.value.replace(/[ -]/g, '')
  )
  if (authLogIn.isRight()) {
    navigateTo('/')
  } else {
    confirm(authLogIn.value.message)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.modal-content {
  width: 196px;
}
</style>
