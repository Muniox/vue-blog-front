import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {},
  }),
  getters: {},
  actions: {
    async login(email: any, password: any) {
      const response = await fetch('https://nest-blog.truemuniox.usermd.net/auth/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });
      this.user = await response.json();
    },
  },
});
