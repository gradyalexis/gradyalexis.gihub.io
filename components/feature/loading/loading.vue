<template>
  <div>
    <div
      class="fixed w-full h-full top-0 left-0 bg-gray-400 z-40"
      v-gsap.to="animation.backdrop"
    ></div>
    <div
      class="fixed w-full h-full top-0 left-0 bg-gray-100 z-50"
      v-gsap.to="animation.background"
    >
      <div class="flex w-full h-screen">
        <div class="flex gap-4 w-full mx-auto lg:mx-0 lg:w-1/2 my-auto">
          <div class="loading-background lg:ml-56 my-auto">
            <div
              class="loading-progress"
              v-gsap.to="animation.progress"
            />
          </div>
          <AnimationBlockDisplayRight
            class="float-left"
            v-gsap.to="animation.text"
          >
            <div class="font-semibold text-2xl">
              {{ label }}
            </div>
          </AnimationBlockDisplayRight>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export { default } from './loading.controller'
</script>

<style lang="scss" scoped>
@import './loading.style.scss';
</style>
