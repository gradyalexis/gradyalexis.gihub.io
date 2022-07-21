<template>
  <div class="relative whitespace-nowrap overflow-hidden w-0 opacity-0">
    <div class="float-right">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export { default } from './block-display-right.controller'
</script>

<style lang="scss" scoped>
@import './block-display-right.style.scss';
</style>
