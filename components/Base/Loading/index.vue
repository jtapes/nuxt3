<template>
  <div class="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.lds-ring {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: $size-24;
  height: $size-24;
}
.lds-ring div {
  position: absolute;
  display: block;
  margin: 8px;
  border: $size-4 solid #fff;
  border-color: $color-blue transparent transparent transparent;
  border-radius: 50%;
  width: $size-24;
  height: $size-24;
  box-sizing: border-box;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
