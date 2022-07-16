<template>
    <div class="container">
        <div class="row my-5 ">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xl-12 col-xxl-12">
                <el-breadcrumb :separator-icon="ArrowRight" class="m-auto justify-content-center">
                    <el-breadcrumb-item :to="{ name: 'List-Cart' }">Danh sách giỏ hàng</el-breadcrumb-item>
                    <el-breadcrumb-item>Thanh toán</el-breadcrumb-item>
                    <el-breadcrumb-item>Trả tiền</el-breadcrumb-item>
                    <el-breadcrumb-item>Hoàn thành đơn hàng</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8">
                <div class="bg-white p-3">
                    <h2 class="title-cart text-start mb-2">Tóm tắt mặt hàng ({{ countCart }})</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Sản phẩm</th>
                                <th scope="col">Giá </th>
                                <th scope="col">Số lượng</th>
                                <th class="text-center" scope="col">Tổng cộng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(cart, index) in carts" :key="index">
                                <td class="w-40">
                                    <div class="product-info">
                                        <div>
                                            <img :src="cart.image" alt="IMG">
                                        </div>
                                        <div class="m-l-10 d-flex flex-col justify-content-between">
                                            <router-link
                                                :to="{ name: 'Fe-Detail-Product', params: { slug: cart.slug } }">
                                                {{ cart.name }}
                                            </router-link>
                                            <span @click="storeCart.removeCart(index)"
                                                class=" cursor-pointer  p-2 ">Xóa</span>
                                        </div>
                                    </div>
                                </td>
                                <td class="w-15">
                                    <div class="fs-17 fw-600">
                                        {{ formatMoney(cart.price) }}
                                        <MoneyIcon />
                                    </div>
                                </td>
                                <td>
                                    <div class="header-cart-item__up-down">
                                        <div @click="reduced(index, cart.quantity)">
                                            <i class="fa-solid fa-minus"></i>
                                        </div>
                                        <div class="fw-600">
                                            {{ cart.quantity }}
                                        </div>
                                        <div @click="increase(index, cart.quantity)">
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </td>
                                <td class="w-25 text-center">
                                    <div class="fs-18 fw-600">
                                        {{ formatMoney(cart.price * cart.quantity) }}
                                        <MoneyIcon />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class=" col-lg-4">
                <div style="top:50px" class=" position-sticky ">
                    <div class="summary-cart bg-white">
                        <h2 class="title-cart">Tóm tắt đơn hàng</h2>
                        <div class="d-flex justify-content-between align-items-center py-4">
                            <span>giá còn</span>
                            <span class="fs-3 fw-700">
                                {{ formatMoney(totalCart) }}
                                <MoneyIcon></MoneyIcon>
                            </span>
                        </div>
                        <div class=" d-flex justify-content-center">

                            <button @click="payCart()" class="button rounded-pill w-100  m-0  py-3">Thanh toán</button>
                        </div>
                    </div>
                    <div class="mt-3">
                        <h3 class="title-cart">
                            Chúng tôi chấp nhận
                        </h3>
                        <ul class="payment-methods">
                            <li>
                                <img src="@/assets/image/payment/1.png" alt="">
                            </li>
                            <li>
                                <img src="@/assets/image/payment/2.png" alt="">
                            </li>
                            <li>
                                <img src="@/assets/image/payment/3.png" alt="">
                            </li>
                            <li>
                                <img src="@/assets/image/payment/4.png" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import { useCartStore } from '@/stores/cart/cart';
import { computed } from 'vue';
import { formatMoney } from "@/service/format-money"
import MoneyIcon from "@/components/MoneyIcon.vue"
import { ArrowRight } from '@element-plus/icons-vue'
import router from "@/router";
export default {
    name: 'ListCart',
    components: {
        MoneyIcon, ArrowRight
    },
    setup() {
        const storeCart = useCartStore();
        storeCart.getCartLocal();
        storeCart.totalPriceCart()
        storeCart.getCountCartLocal()
        var carts = computed(() => storeCart.carts)
        var totalCart = computed(() => storeCart.totalCart)
        var countCart = computed(() => storeCart.countCart)
        return {
            countCart,
            formatMoney,
            totalCart,
            storeCart,
            carts,
        }
    },
    methods: {
        // tăng số lượng
        increase(key: number, quantity: number): any {
            return this.storeCart.increase(key, quantity);
        },

        // giảm số lượng
        reduced(key: number, quantity: number): any {
            return this.storeCart.reduced(key, quantity);

        },
        payCart() {
            router.push({ name: "PayCart" });
            return;
        }
    },
}
</script>

<style>
@import "@/assets/css/up-down.css";


.product-info {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    /* max-width: 120px; */
}

.product-info img {
    max-width: 100px;
}

.summary-cart {
    transition: all .4s cubic-bezier(0.165, 0.84, 0.44, 1);

    border: 1px solid rgb(203, 203, 203);
    padding: 20px;
}

.title-cart,
.summary-cart .title-cart {
    text-transform: capitalize;
    font-weight: 600;
    text-align: center;
}

.payment-methods {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.payment-methods li {
    max-width: 50px;
    margin-right: 20px;
}

.payment-methods img {
    pointer-events: none;
    width: 100%;
}
</style>