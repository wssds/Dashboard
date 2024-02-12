import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import PostsService from '@/services/postsService'
import { type Posts } from '@/models/models'

export const usePostsStore = defineStore('postsStore', () => {
  const posts = ref<Posts[] | null>([])

  async function getPosts() {
    try {
      const data = await PostsService.fetchPosts()
      posts.value = data
      console.log(posts.value)
    } catch(error) {
      console.error('an error in the posts store')
    } 
  }

  return {
    posts,
    getPosts,
  }
})