<template>
    <div>
        <div class="ps-shoe m-b-30">
            <div class="ps-shoe__top">
                <div class="ps-shoe__top-left">
                    <router-link :to="{ name: 'Fe-Detail-Product', params: { slug: product.slug }, }">
                        <div class=" ps-shoe__thumbnail" :style="{ backgroundImage: 'url(' + product.image + ')' }">
                        </div>
                    </router-link>
                    <ul class="ps-shoe__icon">
                        <li class="ps-shoe__icon-item">
                            <i class="icofont-share"></i>
                        </li>
                        <li class="ps-shoe__icon-item">
                            <i class="icofont-heart-alt"></i>
                        </li>
                        <li @click="storeDialogProductDetail.showDialogProductDetail(product.id)" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop" class="ps-shoe__icon-item pro_id_car" data-pro_id_cart="1">
                            <!-- <font-awesome-icon icon="cart-shopping" /> -->
                            <i class="icofont-shopping-cart"></i>
                        </li>


                    </ul>
                    <!-- <a class="ps-buy_now" href="#">
                        Mua ngay
                    </a> -->
                </div>
                <div class="ps-shoe__top-right">
                    <div class="ps-badge ps-badge--new">
                        <span>New</span>
                    </div>

                    <div v-if="product.sale_off != 0" class="ps-badge ps-badge--sale ps-badge--2nd">
                        <span>{{ product.sale_off }}%</span>
                    </div>

                </div>

            </div>
            <div class="ps-shoe__content">

                <a class="ps-shoe__name" href="#">
                    {{ product.name }}
                </a>
                <div class="ps-shoe__price">
                    <h6>
                        {{ formatMoney(product.price_sale) }}
                        <MoneyIcon></MoneyIcon>
                    </h6>

                    <del>
                        {{ formatMoney(product.price) }}
                        <MoneyIcon></MoneyIcon>
                    </del>

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { toRefs, toRef } from 'vue'
import MoneyIcon from '@/components/MoneyIcon.vue'
import { useDialogProductDetail } from '@/stores/product/dialog-product-detail';
import { formatMoney } from "@/service/format-money"
export default {
    props: {
        product: {
            type: Object,
        }
    },
    components: {
        MoneyIcon,
    },
    setup(props) {

        const product = toRef(props, "product");

        const storeDialogProductDetail = useDialogProductDetail()

        return {
            formatMoney,
            storeDialogProductDetail,
            product,
        };
    },
    // data() {

    //     // http://drive.google.com/uc?export=view&id=URLIDHere
    //     return {
    //         show_detail_modal: false
    //     };
    // },
    // methods: {
    //     showDetailModal() {
    //         // alert(this.show_detail_modal)
    //         this.show_detail_modal = !this.show_detail_modal
    //         // alert(this.show_detail_modal)
    //     }
    // },


}
</script>

<style>
@import "@/assets/css/ps-shoe.css";

.ps-shoe__thumbnail img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>