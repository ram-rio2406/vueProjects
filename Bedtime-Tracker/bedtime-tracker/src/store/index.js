import { createPinia, defineStore } from 'pinia';

export const pinia = createPinia();

export const useStore = defineStore('bedtime', {
    state() {
        return {
            userInfo: {
                id: 'ramchandarSR'
            }
        }
    },

    getters: {
        getUserInfo: (state) => state.userInfo
    },

    actions: {
    }
});