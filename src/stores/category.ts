import { frontend_api_environment } from "@/environments/environment";
import axios from "axios";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore('fe_category', {
    state: () => ({
        categoryParents: null,
        categoryProducts: null,
        loadingProCate: true,
    }),
    getters: {
        getParent(state) {
            return state.categoryParents;
        }
    },
    actions: {
        async getCategoryParent() {
            try {
                const data = await axios.get(frontend_api_environment.CATEGORY_API().CATEGORY_PARENT_API)
                return this.categoryParents = data.data.payload
            } catch (error) {
                console.log(error)

            }
        },
        async getProductCategory(slug: string) {
            this.loadingProCate = true
            try {


                await axios.get(frontend_api_environment.CATEGORY_API().CATEGORY_PRODUCT_API(slug)).then(res => {

                    this.categoryProducts = res.data.payload.data;
                    setTimeout(() => {
                        this.loadingProCate = false
                    }, 1000);
                    // this.next_page_url = res.data.payload.next_page_url;
                    // console.log(res.data.payload.next_page_url);

                })
            } catch (error) {
                console.log(error)
            }
        },
        // async loadMoreProductCate(url: string) {
        //     try {
        //         await axios.get(url).then(res => {
        //             // this.categoryProducts.push(res.data.payload.data);
        //             console.log(res.data.payload.data);

        //             // this.next_page_url = res.data.payload.next_page_url;
        //         })
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
    }
})