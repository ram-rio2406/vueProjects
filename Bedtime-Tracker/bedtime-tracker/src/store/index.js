import { createPinia, defineStore } from 'pinia';

export const pinia = createPinia();

export const useStore = defineStore('bedtime', {
    state() {
        return {
            count: 0
        }
    },

    getters: {
        getCount: (state) => state.count
    },

    actions: {
        increment() {
            this.count++;
        }
    }
});