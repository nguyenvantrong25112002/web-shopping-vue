<template>
    <div>
        <div class="container">
            <div v-show="loadContenPro">
                <LoadContenProductDetail></LoadContenProductDetail>
            </div>
            <transition enter-active-class="animate__animated animate__fadeIn">
                <div v-show="!loadContenPro" class="product-intro mb-100">
                    <div class="row mb-5">
                        <div class="col-lg-6">
                            <div class="product-intro__galleryWrap">
                                <swiper :modules="[Thumbs, FreeMode]" :spaceBetween="10" :slidesPerView="5"
                                    :freeMode="true" :watchSlidesProgress="true" @swiper="setThumbsSwiper"
                                    :direction="'vertical'" class="mySwiperExtra">
                                    <swiper-slide>
                                        <img :src="product.image" />
                                    </swiper-slide>
                                    <swiper-slide v-for="(galleryProduct, index) in product.gallery_products"
                                        :key="index">
                                        <img :src="galleryProduct.image" />
                                    </swiper-slide>
                                </swiper>
                                <swiper v-if="product.gallery_products" :modules="modules"
                                    :thumbs="{ swiper: thumbsSwiper }" :navigation="true">
                                    <swiper-slide>
                                        <div :style="{ backgroundImage: 'url(' + product.image + ')' }"
                                            class="ps-product_detail_img">
                                        </div>
                                    </swiper-slide>

                                    <swiper-slide v-for="(galleryProduct, index) in product.gallery_products"
                                        :key="index">
                                        <div :style="{ backgroundImage: 'url(' + galleryProduct.image + ')' }"
                                            class="ps-product_detail_img">
                                        </div>
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="product-intro__info">
                                <div class="product-intro__head">
                                    <div class="product-intro__head-name-share">
                                        <h2 class="product-intro__head-name">{{ product.name ?? '' }}</h2>
                                        <div class="product-intro__head-share">
                                            <!-- <div class="dropdown">
                                            <div class="dropdown__select">
                                                <i class="fa-solid fa-share-from-square"></i>
                                            </div>
                                            <ul class="dropdown__list">
                                                <li class="dropdown__item">
                                                    <i class="fa-brands fa-facebook-f"></i>
                                                </li>
                                                <li class="dropdown__item">
                                                    <i class="fa-brands fa-twitter"></i>
                                                </li>
                                                <li class="dropdown__item">
                                                    <i class="fa-brands fa-telegram"></i>
                                                </li>
                                                <li class="dropdown__item">
                                                    <i class="fa-brands fa-instagram"></i>
                                                </li>
                                            </ul>
                                        </div> -->
                                        </div>
                                    </div>

                                    <div class="product-intro__head-id-reviews">

                                        <div class="product-intro__head-id">ID : {{ product.token }}</div>
                                        <div class="product-intro__head-reviews m-l-5">
                                            <!-- <el-rate model-value="3.5" size="large" allow-half /> -->
                                            <span>( 4 nhận xét )</span>
                                        </div>
                                    </div>

                                    <div class="product-intro__head-price">
                                        <p v-if="product.sale_off != 0" class="icon_lightning">
                                            <i class="icofont-flash"></i>
                                        </p>
                                        <div class="discount">
                                            <span v-if="product.sale_off != 0">{{ formatMoney(product.price_sale) }}
                                            </span>
                                            <span v-if="product.sale_off == 0">{{ formatMoney(product.price) }}</span>
                                            <MoneyIcon></MoneyIcon>
                                        </div>
                                        <del v-if="product.sale_off != 0" class="del-price">
                                            <span>{{ formatMoney(product.price) }}</span>
                                            <MoneyIcon></MoneyIcon>
                                        </del>
                                    </div>
                                    <div v-if="product.sale_off != 0" class="product-intro__flashsale-diff">
                                        Tiết kiệm :{{ formatMoney(product.price - product.price_sale) ?? '' }}
                                        <MoneyIcon>
                                        </MoneyIcon>
                                        <span class="flashsale-label">
                                            - {{ product.sale_off }} %
                                        </span>
                                    </div>
                                </div>

                                <div class="product-intro__properties m-t-30">
                                    <div v-for="(propertie, index) in product.properties" :key="index"
                                        class="product-intro__properties-item m-b-25 ">
                                        <div class="d-flex justify-content-start">
                                            <h4 class="product-intro__size-title m-b-5">{{ propertie.name }}</h4>

                                            <span v-if="(propertie.flagErrorMsg == 1) ? true : false"
                                                class="lable-error m-l-10">
                                                Vui lòng chọn thuộc tính !!
                                            </span>
                                        </div>
                                        <div v-if="product.species"
                                            :class="{ 'error': (speciesError || propertie.flagError == 1) ? true : false }"
                                            class="product-intro__species ">
                                            <div v-for="(species, index) in product.species" :key="index">
                                                <div v-if="species.properties_id === propertie.id"
                                                    class="product-intro__species-item ">
                                                    <el-tooltip class="box-item" effect="light"
                                                        :content="species.describe" placement="top-start">
                                                        <div @click="checkedPropertie({ slug: propertie.slug, propertie: propertie.name, species: species.name })"
                                                            class="product-intro__species-item_lable"
                                                            :class="{ 'active': checkLable(propertie.slug, species.name) }">
                                                            {{ species.name }}
                                                        </div>
                                                    </el-tooltip>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-intro__up-down">

                                    <h4 class="product-intro__up-down-title m-b-5">Số lượng</h4>
                                    <div class="product-intro__up-down_item">
                                        <div @click="reduced(dataCart.quantity)">
                                            <i class="fa-solid fa-minus"></i>
                                        </div>
                                        <div>
                                            {{ dataCart.quantity }}
                                        </div>
                                        <div @click="increase(dataCart.quantity)">
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-intro__addcard d-flex justify-content-center m-t-30">
                                    <button @click="addToCart()" class="button">Thêm vào giỏ hàng </button>
                                    <button class="button_outlet"><i class="fa-regular fa-heart"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>

        </div>
        <div class="container-fluid">
            <div class="ps-section__header mb-5">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h3 class="ps-section__title" data-text="RELATE TO">
                            - Sản phẩm liên quan
                        </h3>
                    </div>
                </div>
            </div>
            <div v-show="loadContenProNew">
                <LoadContent>
                </LoadContent>
            </div>
            <transition enter-active-class="animate__animated animate__fadeIn">
                <div v-show="!loadContenProNew"
                    class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    <CardProduct v-for="product in productRelateTo" :key="product" :product="product" class="col mb-5">
                    </CardProduct>
                </div>
            </transition>

        </div>
    </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Thumbs, Mousewheel, Pagination, FreeMode } from 'swiper';
import { useProductStore } from '@/stores/product/product'
import { computed, reactive, ref, watch } from 'vue';
import { useRoute } from "vue-router"
import MoneyIcon from "@/components/MoneyIcon.vue"
import CardProduct from "@/components/CardProduct.vue"
import LoadContent from "@/components/Loading/LoadContent.vue"
import LoadContenProductDetail from "@/components/Loading/LoadContenProductDetail.vue"
import { v4 as uuid4 } from 'uuid'

import { formatMoney } from "@/service/format-money"
import { useCartStore } from '@/stores/cart/cart'

export default {
    components: {
        Swiper,
        SwiperSlide,
        MoneyIcon,
        CardProduct,
        LoadContent,
        LoadContenProductDetail
    },
    setup() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const route = useRoute()
        const storeProduct = useProductStore();
        storeProduct.getProductDetail(route.params.slug);
        storeProduct.getProductCategory(route.params.slug);
        // watch(() => route.params.slug, () => {
        //     storeProduct.getProductDetail(route.params.slug);
        //     storeProduct.getProductCategory(route.params.slug);
        // });
        var product = computed(() => storeProduct.getDetail)
        var productRelateTo = computed(() => storeProduct.getProductRelateTo)
        return {
            formatMoney,
            Thumbs,
            FreeMode,
            modules: [Navigation, Thumbs],
            product,
            productRelateTo,
            loadContenProNew: computed(() => storeProduct.loadContenProNew),
            loadContenPro: computed(() => storeProduct.loadContenPro),
            storeProduct
        }
    },
    data() {
        const thumbsSwiper = ref(null);
        const setThumbsSwiper = (swiper: any) => {
            thumbsSwiper.value = swiper;
        };

        const dataCart = {
            id_pro: null,
            slug: null,
            name: null,
            image: null,
            price: null,
            quantity: 1,
            properties: null,
        }
        return {
            speciesError: false,
            speciesError_one: false,
            keyError: null,
            dataPropertie: null,
            speciesArr: [],
            dataCart,
            thumbsSwiper,
            setThumbsSwiper,
        }
    },

    watch: {
        '$route.params.slug'(new_param, old_param) {
            if (new_param) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                this.storeProduct.getProductDetail(new_param);
                this.storeProduct.getProductCategory(new_param);
                this.resetDataCart()
            }
        }
    },
    methods: {
        resetDataCart() {
            this.dataCart.id_pro = null;
            this.dataCart.slug = null;
            this.dataCart.name = null;
            this.dataCart.image = null;
            this.dataCart.price = null;
            this.dataCart.quantity = 1;
            this.dataCart.properties = null;
            this.speciesArr = [];
        },
        // chọn thuộc tính
        checkFlagErrorMsg(valChange) {
            var that = this;
            var key_check: any = null;
            this.product.properties.map(function (data: any, key: any) {
                that.speciesArr.map(function (d: any, k: any) {
                    if (data.slug == d.slug) {
                        that.product.properties[key].flagErrorMsg = valChange
                    }
                })
            })
        },
        checkedPropertie(val: any) {
            val.flagError = 0;
            var flag = false;
            var key_check: any = null;
            var key_remove: any = null;
            this.speciesArr.map(function (data: any, key: any) {
                if (data.slug == val.slug && data.species == val.species) {
                    key_remove = key;
                    flag = true;
                }
            })
            if (flag) {
                this.speciesArr.splice(key_remove, 1);
                return;
            }
            const check = this.speciesArr.filter(function (data: any, key: any) {
                if (data.slug == val.slug) key_check = key;
                return data.slug == val.slug;
            })
            if (check.length > 0) {
                this.speciesArr[key_check].species = val.species;
            } else {
                this.speciesArr.push(val);
                this.checkFlagErrorMsg(0);
            }
        },

        // click vô thuộc tính check lable
        checkLable(slug: any, val: any) {
            const check = this.speciesArr.filter(function (data: any, key: any) {
                return data.species == val;
            })
            if (check.length > 0) return true;
            return false;
        },

        // tăng số lượng
        increase(): void {
            this.dataCart.quantity++
        },

        // giảm số lượng
        reduced(val: number): void {
            if (val > 1) this.dataCart.quantity--
        },

        //thêm giỏ hàng
        addToCart() {
            // var key_has: any = null;
            var that = this
            if (this.product.properties.length > 0) {
                this.dataCart.properties = this.speciesArr;
                if (this.dataCart.properties.length == 0) {
                    this.product.properties.map(function (data: any, key: any) {
                        that.product.properties[key].flagErrorMsg = 1;
                    })
                    this.speciesError = !this.speciesError;
                    setTimeout(() => {
                        this.speciesError = !this.speciesError;
                    }, 500);
                    return;
                }
                if (this.product.properties.length > this.speciesArr.length) {
                    this.product.properties.map(function (data: any, key: any) {
                        that.speciesArr.map(function (d: any, k: any) {
                            if (data.slug != d.slug) {
                                that.keyError = key;
                            }
                        })
                    })
                    this.product.properties[this.keyError].flagError = 1;
                    this.product.properties[this.keyError].flagErrorMsg = 1;
                    setTimeout(() => {
                        this.product.properties[this.keyError].flagError = 0;
                    }, 500);
                    return;
                }
            }
            this.dataCart.id_pro = this.product.id + this.product.slug;
            this.dataCart.slug = this.product.slug;
            this.dataCart.name = this.product.name;
            this.dataCart.image = this.product.image;
            this.dataCart.price = this.product.price_sale;
            const storeCart = useCartStore();
            storeCart.addCart(this.dataCart);
            this.resetDataCart();
        },



    },
}
</script>

<style>
@import "@/assets/css/product-detail.css";
@import "@/assets/css/product-detail-properties.css";
</style>