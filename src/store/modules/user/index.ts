import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: 'liuge',
    };
  },
  getters: {},
  actions: {},
});
