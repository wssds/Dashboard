<script setup lang="ts">
import { usePostsStore } from '@/stores/postsStore';
import { computed, onMounted, ref } from 'vue';
import GridCardComp from '../components/GridCardComp.vue'

const postsStore = usePostsStore()

onMounted(async () => {
  await postsStore.getPosts()
})

const postsIndex = ref<number>(0)

const showAPost = computed(() => {
  if (postsStore.posts && postsStore.posts.length > 0) {
    return postsStore.posts[postsIndex.value].title
  }
})

function showNextPost() {
  if (postsStore.posts && postsIndex.value < postsStore.posts.length - 1) {
    postsIndex.value++;
  } else {
    postsIndex.value = 0;
  }
}
</script>

<template>
  <h1 class="headline">The Dashboard</h1>

  <div class="grid-container" v-if="postsStore.posts">
    <GridCardComp class="grid-item-1">
      <p>{{ showAPost }}</p> <button class="next-btn" @click="showNextPost">next post</button>
    </GridCardComp>
    <GridCardComp class="grid-item-2">
      <img class="space-planet" src="../assets/space-small.jpg" alt="space">
    </GridCardComp>
    <GridCardComp class="grid-item-3">
      <h3>More comes soon...</h3>
    </GridCardComp>
  </div>
</template>

<style scoped lang="scss">
.headline {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 0;
  color: white;
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
    position: relative;

    .next-btn {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    }
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
