<template>


    <div class="wrap-header-cart" :class="{ 'show-header-cart': toggleCart }">
        <!--  -->
        <div @click="storeWrapCartHeader.toggleHideShowCart()" style="width: 100%; height: 100%;"></div>

        <div class="header-cart flex-col-l p-l-45 p-r-25">
            <div
                class="header-cart-title w-100 d-flex justify-content-between align-content-center align-items-center p-b-8">
                <h1 class="m-t-0 fs-20 fw-700">
                    Giỏ hàng của bạn
                </h1>
                <div @click="storeWrapCartHeader.toggleHideShowCart()"
                    class="fs-25 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 ">
                    <i class="icofont-close"></i>
                </div>
            </div>

            <div class="header-cart-content flex-w js-pscroll">
                <ul v-if="carts" class="header-cart-wrapitem w-full">
                    <li v-for="(cart, index) in carts" :key="index" class="header-cart-item flex-w flex-t">
                        <div class="header-cart-item-img">
                            <img :src="cart.image" alt="IMG">
                            <div class="header-cart-remove">
                                <span @click="storeCart.removeCart(index)">
                                    <i class="fa-solid fa-trash-can"></i>
                                </span>
                            </div>
                        </div>

                        <div class="header-cart-item-txt ">
                            <a href="#" class="header-cart-item-name m-b-5 trans-04">
                                {{ cart.name }}
                            </a>
                            <div class=" d-flex justify-content-between align-baseline">
                                <span class="header-cart-item-price-quanliti">

                                    {{ cart.quantity }} x {{ formatMoney(cart.price) }}
                                    <MoneyIcon />
                                </span>
                                <div class="header-cart-item__up-down">
                                    <div @click="reduced(index, cart.quantity)">
                                        <i class="fa-solid fa-minus"></i>
                                    </div>
                                    <div>
                                        {{ cart.quantity }}
                                    </div>
                                    <div @click="increase(index, cart.quantity)">
                                        <i class="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                            </div>

                            <div v-if="cart.properties" class="header-cart-item-propertie">
                                <div v-for="(ppti, i) in cart.properties" :key="i">
                                    <span>{{ ppti.propertie }}</span>:
                                    <span>{{ ppti.species }}</span>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
            <div class="w-full">
                <div class="header-cart-total w-full p-tb-20">
                    Tổng tiền:
                    <span>
                        {{ formatMoney(totalCart) }}
                        <MoneyIcon />
                    </span>
                </div>

                <div class="header-cart-buttons d-flex justify-content-between  flex-w w-full">
                    <router-link :to="{ name: 'List-Cart' }" @click="storeWrapCartHeader.toggleHideShowCart()"
                        class="button rounded-pill flex-c-m stext-101 cl0 size-107  bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                        Xem
                    </router-link>

                    <button
                        class="button rounded-pill flex-c-m stext-101 cl0 size-107  bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                        Thanh toán
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { useWarpHeaderCartStore } from "@/stores/cart/wrap-header-cart"
import { computed } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import { useCartStore } from "@/stores/cart/cart";
import { formatMoney } from "@/service/format-money"
import MoneyIcon from "@/components/MoneyIcon.vue"

export default {
    components: {
        MoneyIcon,
        Swiper,
        SwiperSlide,
    },
    setup() {
        const storeWrapCartHeader = useWarpHeaderCartStore()
        const storeCart = useCartStore();
        storeCart.getCartLocal();
        storeCart.totalPriceCart()
        var carts = computed(() => storeCart.carts)
        var totalCart = computed(() => storeCart.totalCart)
        return {
            formatMoney,

            totalCart,
            storeCart,
            carts,
            storeWrapCartHeader,
            toggleCart: computed(() => storeWrapCartHeader.hide_show),
        }
    },
    methods: {
        // tăng số lượng
        increase(key, quantity): any {
            return this.storeCart.increase(key, quantity);
        },

        // giảm số lượng
        reduced(key, quantity): any {
            return this.storeCart.reduced(key, quantity);

        },
    },
}
</script>

<style>
@import "@/assets/css/list-cart-home.css";
@import "@/assets/css/up-down.css";
</style>