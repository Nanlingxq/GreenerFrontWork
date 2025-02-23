import { defineStore } from 'pinia';

export const loginStore = defineStore('loginStore', {
    state: () => ({
        flag: true,
    }),
    actions: {
        toggleFlag() {
            this.flag = !this.flag;
        },
    },
    // persist: true,
});