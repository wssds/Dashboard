<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBarComp from './components/NavBarComp.vue';
</script>

<template>
  <div class="c-app__wrapper">
    <NavBarComp />
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
@media only screen and (min-width: 600px) {
  .c-app__wrapper {
    position: relative;
  }
}
</style>
