import { defineStore } from 'pinia';
import type { Post } from '@/types/post';

export const usePostStore = defineStore('post', {
  state: (): {
    postList: Post[];
    post: Post | null;
  } => ({
    postList: [],
    post: null,
  }),
  getters: {},
  actions: {
    async fetchPosts() {
      const response = await fetch('https://nest-blog.truemuniox.usermd.net/post', {
        credentials: 'include',
      });
      this.postList = await response.json();
    },
    async fetchSinglePost(postId: string | string[]) {
      const response = await fetch(`https://nest-blog.truemuniox.usermd.net/post/${postId}`, {
        credentials: 'include',
      });
      this.post = await response.json();
    },
  },
});
