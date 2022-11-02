<template>
  <div class="p-container d-f fd-c py-16 h-100 o-h">
    <div class="d-f ai-c jc-sb">
      <div class="d-f ai-c">
        <BaseButton
          class="mr-8"
          :color="progress ? 'error' : ''"
          @click="sendValidationPhones"
          >{{ progress ? 'stop' : 'start' }}
        </BaseButton>
        <BaseButton
          class="mr-24"
          :color="'blue'"
          @click=";(phones = ''), (phone = ''), (loading = false)"
        >
          remove
        </BaseButton>
        <div v-if="phonesValidation.length" class="mr-8">
          count: {{ phonesValidation.length }}
        </div>
        <div v-if="countScanSpamPhones > 0">
          result: {{ countScanSpamPhones }}
        </div>
      </div>
      <div v-if="phonesLoading !== ''" class="mr-8 d-f ai-c">
        {{ phonesLoading }}
        <BaseLoading class="ml-4" />
      </div>
    </div>

    <div class="d-f main-block py-16">
      <div class="d-f fd-c h-100" style="width: 200px">
        <BaseInput
          v-model="phone"
          v-mask="'+7 (###) ###-##-##'"
          placeholder="+7 ("
          class="mb-8"
        />
        <BaseInput v-model="phones" :type="'textarea'" />
      </div>
      <div class="h-100 mx-16">
        <div class="textarea-validation h-100">
          <BaseInput
            :type="'textarea'"
            :value="phonesValidation.join('\n')"
            readonly
          />
        </div>
      </div>
      <div class="h-100 oy-a px-4">
        <TransitionGroup name="list">
          <div
            v-for="result of resultsPhones"
            :key="result.phone"
            class="d-f ai-c jc-fe my-8"
          >
            <div class="d-f fd-c">
              {{ result.phone }}
              <span class="date-text c-gray">{{ result.date }}</span>
            </div>
            <div :class="{ 'bg-error': result.spam }" class="tab ml-16">
              {{ result.spam ? 'spam' : 'ok' }}
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SpamValidationPhoneAdapter } from '~/application/adapters/SpamValidationPhoneAdapter'
import { LogPhonesAdapter } from '~/application/adapters/LogPhonesAdapter'

const spamValidationPhoneAdapter = new SpamValidationPhoneAdapter()
const logPhonesAdapter = new LogPhonesAdapter()

const phone = ref('')
const loading = ref(false)
const progress = ref(false)
const phones = ref<string>('')
const phonesLoading = ref<string>('')
const countScanSpamPhones = ref<number>(0)
const phonesValidation = computed<string[]>(() => {
  const arr = [
    phone.value.replace(/[+\- ()]/g, ''),
    ...phones.value.replace(/[+\- ()]/g, '').split('\n'),
  ].filter((phone) => /^[0-9]+$/.test(phone) && phone.length === 11)
  return [...new Set(arr)]
})

const resultsPhones = ref<{ spam: boolean; phone: string; date: string }[]>([])
const logsPhones = await logPhonesAdapter.load()
if (logsPhones.isRight()) {
  resultsPhones.value = logsPhones.value
}

const sendValidationPhones = async () => {
  if (progress.value) {
    progress.value = false
    return
  }
  progress.value = true
  for (const phone of phonesValidation.value) {
    if (!progress.value) continue
    phonesLoading.value = phone
    loading.value = true
    const data = await spamValidationPhoneAdapter.isSpam(phone)

    if (data.isRight()) {
      const logsPhones = await logPhonesAdapter.load()
      if (logsPhones.isRight()) {
        countScanSpamPhones.value += 1
        resultsPhones.value = logsPhones.value
      }
    } else if (data.isLeft()) {
      confirm(data.value.message)
    }
  }
  phonesLoading.value = ''
  progress.value = false
  loading.value = false
}
</script>

<style lang="scss">
@import '@/assets/styles/mixins';

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.main-block {
  height: calc(100% - $size-68);
}

.textarea-validation {
  width: 156px;
  textarea {
    &:hover {
      cursor: default;
    }
    &:focus {
      outline: none;
    }
  }
}

.date-text {
  font-size: 14px;
}

.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: $size-8;
  width: $size-64;
  height: $size-32;
  background: rgb($color-main, 0.6);
}
</style>
