<template>
  <svg xmlns="http://www.w3.org/2000/svg">
    <use :href="path" :xlink:href="path" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
}>()
const path = computed(() => {
  if (props.name) {
    const name = props.name.split('/')
    return name.length > 1
      ? `/sprite/${name[0]}.svg#${name[1]}`
      : `/sprite/base.svg#${name[0]}`
  }
})
</script>
