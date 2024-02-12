import axios from 'axios'
import { urlPosts } from '../constants/constants'

export default class PostsService {
    static async fetchPosts() {
        try {
            const response = await axios.get(urlPosts)
            return response.data
        } catch (error) {
            console.error('an error occured in the posts service')
        }
    }
}