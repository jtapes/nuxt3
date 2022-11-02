<template>
  <transition name="modal">
    <div v-show="open" class="modal">
      <div class="modal__window block">
        <div v-if="!noClose" class="modal__close" @click="close">
          <IconSvg name="close" />
        </div>
        <div class="modal__content">
          <slot />
        </div>
      </div>
      <div class="modal__fon" @click="close" />
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps<{
  noClose?: boolean
}>()

const open = ref(false)
const emit = defineEmits<{
  (e: 'close'): void
}>()

onMounted(() => {
  open.value = true
  document.body.style.overflow = 'hidden'
})

onBeforeUnmount(() => {
  document.body.style.overflow = 'auto'
})

const close = () => {
  document.body.style.overflow = 'auto'
  emit('close')
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(-$size-24);

  .modal {
    &__close {
      opacity: 0;
      transform: rotate(90deg);
    }
  }
}

.modal {
  @include z-index(modal);

  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  transition: all 0.6s ease;

  &__close {
    position: absolute;

    right: 0;
    top: 0;
    z-index: 1;
    padding: $size-24;
    width: $size-72;
    height: $size-72;
    color: $color-blue;
    transform-origin: center;
    transition: all 0.8s ease;
    cursor: pointer;
    @include media(md) {
      padding: $size-24;
      width: $size-72;
      height: $size-72;
    }
  }

  &__fon {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba($color-black, 0.8);
  }

  &__window {
    @include z-index(default);

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: $size-24;
    padding: $size-72 0 $size-24;
    max-height: calc(100% - #{$size-24});
    background: $color-black;

    @include media-768 {
      margin: 0;
      border-radius: 0;
      padding: 0;
      //width: 100%;
      //height: 100%;
      max-height: none;
    }
  }

  &__content {
    position: relative;
    overflow-y: auto;
    padding: $size-16 $size-60;
    width: 100%;
    max-height: 100vh;
    @include media-768 {
      padding: $size-24;
    }
  }
  @include media-768 {
    height: calc(100vh + #{$size-24});

    &__content {
      top: -$size-24;
    }
  }
}
</style>
