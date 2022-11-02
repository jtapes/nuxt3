<template>
  <button v-bind="attrs" class="button" :class="`button_color-${props.color}`">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const attrs = useAttrs()
const props = defineProps<{
  color?: string
}>()
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: $size-4 solid rgb($color-main, 0.5);
  border-radius: $size-8;
  padding: 0 $size-16;
  height: $size-44;
  color: $color-white;
  background: $color-el;
  transition: all ease 0.3s;
  &:hover {
    border-bottom: 4px solid $color-main;
  }

  &:active {
    color: $color-white;
    background-color: rgba($color-black, 0.9);
  }

  &_color-blue {
    border-bottom: $size-4 solid rgb($color-blue, 0.5);
    &:hover {
      border-bottom: 4px solid $color-blue;
    }
  }

  &_color-error {
    border-bottom: $size-4 solid rgb($color-error, 0.5);
    &:hover {
      border-bottom: 4px solid $color-error;
    }
  }
}
</style>
