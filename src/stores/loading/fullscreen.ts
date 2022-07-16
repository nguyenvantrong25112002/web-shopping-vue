import { defineStore } from "pinia";

export const useLoadingFullScreenStote = defineStore('fullscreen', {
    state: () => ({
        isActive: false
    }),
    getters: {
        loadingFullScreen(state) {
            return state.isActive;
        }
    },
    actions: {
        async getLoadingFullScreen(timeout: number) {
            this.isActive = true
            setTimeout(() => {
                this.isActive = false
            }, timeout);
        }
    }
})