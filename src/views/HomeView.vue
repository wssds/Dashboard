<script setup lang="ts">
import { usePostsStore } from '@/stores/postsStore';
import { onMounted } from 'vue';

const postsStore = usePostsStore()

onMounted(async () => {
  await postsStore.getPosts()
})
</script>

<template>
  <h1 class="headline">The Dashboard</h1>

  <div class="grid-container">
    <div class="widget grid-item-1">Widget 1</div>
    <div class="widget grid-item-2">Widget 2</div>
    <div class="widget grid-item-3">Widget 3</div>
  </div>
</template>

<style scoped lang="scss">
.headline {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 0;
}

.widget {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  height: 150px;
  border-radius: 15px;
  margin: 25px;
  box-shadow: 5px 5px 15px 5px #000000;
}

@media only screen and (min-width: 390px) {

  .grid-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto auto;
    grid-gap: 35px;
  }

  .grid-item-1 {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 12;
  }

  .grid-item-2 {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 12;
  }

  .grid-item-3 {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 12;
  }

  .widget {
    margin: unset;
  }
}

@media only screen and (min-width: 600px) {
  .headline {
    padding-top: 20px;
  }

  .grid-container {
    margin-left: 50px;
    grid-gap: 50px;
    margin-bottom: 30px;
  }
}

@media only screen and (min-width: 900px) {
  .grid-container {
    grid-gap: 75px;
  }

  .grid-item-2 {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 7;
  }

  .grid-item-3 {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 7;
    grid-column-end: 12;
  }
}
</style>
