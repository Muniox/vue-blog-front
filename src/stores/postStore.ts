import { defineStore } from 'pinia';
import type { Post } from '@/types/post';

export const usePostStore = defineStore('post', {
  state: (): {
    postList: Post[];
  } => ({
    postList: [],
  }),
  getters: {},
  actions: {
    async fetchPosts() {
      const response = await fetch('https://nest-blog.truemuniox.usermd.net/post', {
        credentials: 'include',
      });
      this.postList = await response.json();
    },
  },
});
