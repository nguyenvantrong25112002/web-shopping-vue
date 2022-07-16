import { defineStore } from "pinia";

export const useWarpHeaderCartStore = defineStore('wrap_header_cart', {
    state: () => ({
        hide_show: false
    }),

    getters: {
        toggleGetters(state) {
            return state.hide_show;
        }
    },
    actions: {

        toggleHideShowCart() {
            this.hide_show = !this.hide_show

        }

    }
})