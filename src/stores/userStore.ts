import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';
// import { useStorage } from '@vueuse/core';

const toast = useToast();
// const store = useStorage('user-storage', null, localStorage);

// https://dev.to/dionarodrigues/fetch-api-do-you-really-know-how-to-handle-errors-2gj0
export const useUserStore = defineStore('user', {
  state: (): {
    user: string | null;
    isLoggedIn: boolean;
  } => ({
    user: '',
    isLoggedIn: false,
  }),
  getters: {},
  actions: {
    async login(email: any, password: any) {
      try {
        const response = await fetch('https://nest-blog.truemuniox.usermd.net/auth/login', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
          credentials: 'include',
        });
        const data = await response.json();
        if (!response.ok && data.statusCode === 500) {
          toast.error(data.message); //error from server
        }
        if (!response.ok && data.statusCode !== 500) {
          toast.warning(data.message); //error from server
        }
        if (response.ok) {
          localStorage.setItem('user-storage', JSON.stringify(this.user));
          this.user = localStorage.getItem('user-storage');
          this.isLoggedIn = true;
        }
      } catch (error) {
        toast.error('Failed to login');
      }
    },
  },
});
