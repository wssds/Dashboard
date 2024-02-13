<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBarComp from './components/NavBarComp.vue';
</script>

<template>
  <img class="space-img" src="../src/assets/space.jpg" alt="space">
  <div class="c-app__wrapper">
    <NavBarComp />
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.space-img{
  position: fixed; 
  top: 0; 
  left: 0; 
  min-width: 100%;
  min-height: 100%;
}

@media only screen and (min-width: 600px) {
  .c-app__wrapper {
    position: relative;
  }
}
</style>
