<template>
  <h1 class="message">{{ message }}</h1>
</template>

<script setup lang="ts">
const errorProps = defineProps<{
  error: { message: string }
}>()

const message = computed(() => {
  try {
    return JSON.parse(errorProps.error.message)
  } catch {
    return errorProps.error.message
  }
})
</script>
<style>
.message {
  margin: 0 auto;
  width: fit-content;
}
</style>
