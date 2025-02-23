import { defineStore } from 'pinia';

export const homeStore = defineStore('homeStore', {
    state: () => ({
        type: 0,
    }),
    actions: {
        setType(input) {
            this.type = input;
        },
    },
    // persist: true,
});