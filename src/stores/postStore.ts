import { defineStore } from 'pinia';

export const usePostStore = defineStore('post', {
  state: () => ({
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
