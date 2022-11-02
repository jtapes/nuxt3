<template>
  <textarea
    v-if="props.type === 'textarea'"
    v-bind="attrs"
    :value="props.modelValue"
    class="textarea"
    @input="emit('update:modelValue', $event.target.value)"
  ></textarea>
  <input
    v-else
    v-bind="attrs"
    type="text"
    class="input"
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup lang="ts">
const attrs = useAttrs()
const props = defineProps<{
  modelValue?: string
  type?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void
}>()
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.input {
  height: $size-44;
}
.input,
textarea {
  border: none;
  border-radius: $size-8;
  padding: $size-8;
  width: 100%;
  color: $color-white;
  background: $color-el;
}

.textarea {
  height: 100%;
  resize: none;
}
</style>
