import { defineStore } from 'pinia';
export const useDialogProductDetail = defineStore({
    id: 'dialog_product_detail',
    state: () => ({
        dialog: false
    }),
    getters: {

    },

    actions: {
        async showDialogProductDetail(id: number) {
            alert(id);
            this.dialog = !this.dialog
        }
    }
}
)