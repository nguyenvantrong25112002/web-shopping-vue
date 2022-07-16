import { frontend_api_environment } from "@/environments/environment";
import axios from "axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore({
    id: 'fe_product',
    state: () => ({
        product_id: null,
        product_detail: '',
        products: null,
        products_sale: null,
        productRelateTo: '',

        loadContenProNew: true,
        loadContenProSale: true,
        loadContenPro: true
    }),
    getters: {
        getProductList(state) {
            return state.products
        },
        getProductListSale(state) {
            return state.products_sale
        },
        getDetail(state) {
            return state.product_detail
        },
        getProductRelateTo(state) {
            return state.productRelateTo
        },

    },
    actions: {
        async getProductNewHome() {
            try {
                await axios.get(frontend_api_environment.PRODUCT_API().HOME_NEW).then((res) => {
                    this.products = res.data.payload;
                    setTimeout(() => {
                        this.loadContenProNew = false
                    }, 1000);
                })
            }
            catch (error) {
                console.log(error)
            }
        },
        async getProductSaleHome() {
            try {
                await axios.get(frontend_api_environment.PRODUCT_API().HOME_SALE).then(res => {
                    this.products_sale = res.data.payload;
                    setTimeout(() => {
                        this.loadContenProSale = false
                    }, 1000);
                })
            }
            catch (error) {
                console.log(error)
            }
        },
        async getProductDetail(slug: any) {
            this.loadContenPro = true;
            try {
                await axios.get(
                    frontend_api_environment.PRODUCT_API().DETAIL(slug)
                ).then(res => {
                    res.data.payload.properties.map(function (data: any, key: any) {
                        res.data.payload.properties[key].flagError = 0
                        res.data.payload.properties[key].flagErrorMsg = 0
                    });
                    this.product_detail = res.data.payload
                    this.loadContenPro = false;
                })
            }
            catch (error) {
                console.log(error)
            }
        },
        async getProductCategory(slug: any) {
            this.loadContenProNew = true
            try {
                await axios.get(
                    frontend_api_environment.PRODUCT_API().PRODUCT_ID_RELATE_TO(slug)
                ).then(res => {
                    this.productRelateTo = res.data.payload.data;
                    this.loadContenProNew = false
                    return;
                })
            }
            catch (error) {
                console.log(error)
            }
        }
    }

})