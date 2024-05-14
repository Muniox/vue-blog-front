import { defineStore } from 'pinia';
import type { Post } from '@/types/post';
import { useToast } from 'vue-toastification';
import { type Ref, ref } from 'vue';

const toast = useToast();
// https://dev.to/dionarodrigues/fetch-api-do-you-really-know-how-to-handle-errors-2gj0
export const usePostStore = defineStore('post', {
  state: (): {
    postList: Ref<Post[]>;
    post: Ref<Post | null>;
  } => ({
    postList: ref([]),
    post: ref(null),
  }),
  getters: {},
  actions: {
    async fetchPosts() {
      try {
        const response = await fetch('https://nest-blog.truemuniox.usermd.net/post', {
          credentials: 'include',
        });
        const data = await response.json();
        if (!response.ok && data.statusCode === 500) {
          toast.error(data.message); //error from server
        }
        if (!response.ok && data.statusCode !== 500) {
          toast.warning(data.message); //error from server
        }
        this.postList = await data;
      } catch (error) {
        toast.error('Failed to get data');
      }
    },
    async fetchSinglePost(postId: string | string[]) {
      try {
        const response = await fetch(`https://nest-blog.truemuniox.usermd.net/post/${postId}`, {
          credentials: 'include',
        });
        const data = await response.json();
        if (!response.ok && data.statusCode === 500) {
          toast.error(data.message); //error from server
        }
        if (!response.ok && data.statusCode !== 500) {
          toast.warning(data.message); //error from server
        }
        this.post = await data;
      } catch (error: any) {
        toast.error('Failed to get data');
      }
    },
  },
});
