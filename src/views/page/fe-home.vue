<template>

    <transition enter-active-class="animate__animated animate__fadeInUp"
        leave-active-class="animate__animated  animate__fadeOut">

        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <Swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                }" :pagination="{
    clickable: true,
}" :navigation="true" :modules="modules">
                    <Swiper-slide v-for="(banner, index) in banners" :key="index">
                        <CardBanner style="width: 100%" :banner="banner"></CardBanner>
                    </Swiper-slide>
                </Swiper>
            </div>
        </div>
    </transition>
    <div class="container-fluid">
        <div class="pt-5">
            <div class="ps-section__header mb-5">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h3 class="ps-section__title" data-text="new product">- Sản phẩm mới</h3>
                    </div>
                </div>
            </div>


            <div v-show="loadContenProNew"
                class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                <ContentLoader width="1000" v-for="i in 5" :key="i" :speed="2" viewBox="0 0 450 500"
                    backgroundColor="#f0f0f0" foregroundColor="#dedede">
                    <rect x="0" y="0" rx="3" ry="3" width="400" height="500" />
                </ContentLoader>

            </div>
            <transition enter-active-class="animate__animated animate__fadeIn">
                <div v-show="!loadContenProNew"
                    class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5">
                    <CardProduct v-for="product in products_new" :key="product" :product="product" class="col mb-5">
                    </CardProduct>
                </div>
            </transition>


        </div>
        <div class="ps-section--offer">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <img src="@/assets/image/banner/home-banner-5.png" alt="" />
                </div>
            </div>
        </div>
        <section class="ps-section ps-section--top-sales">
            <div class="pt-5">
                <div class="ps-section__header mb-5">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h3 class="ps-section__title" data-text="BEST SALE">
                                - Sản phẩm được giảm giá
                            </h3>
                        </div>
                    </div>
                </div>
                <div v-show="loadContenProSale"
                    class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    <ContentLoader width="1000" v-for="i in 5" :key="i" :speed="2" viewBox="0 0 450 500"
                        backgroundColor="#f0f0f0" foregroundColor="#dedede">
                        <rect x="0" y="0" rx="3" ry="3" width="400" height="500" />
                    </ContentLoader>
                </div>
                <transition enter-active-class="animate__animated animate__fadeIn">

                    <div v-show="!loadContenProSale" style="    padding: 0 15px;"
                        class="row row-cols-auto row-cols-md-auto row-cols-lg-auto row-cols-xl-auto">
                        <Swiper :loop="true" :slidesPerView="5" :spaceBetween="25" :navigation="true"
                            :modules="modules">
                            <Swiper-slide v-for="(product, index) in products_sale" :key="index">
                                <CardProduct :product="product"> </CardProduct>
                            </Swiper-slide>
                        </Swiper>
                    </div>
                </transition>
            </div>
        </section>
        <div class="ps-section--offer mt-5">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <img src="@/assets/image/banner/home-banner-6.jpg" alt="" />
                </div>
            </div>
        </div>
        <div :style="{ backgroundImage: 'url(https://mocah.org/thumbs/346846-Cyberpunk-2077-Video-Game-Girls-Glasses.jpg)', }"
            class="ps-features mt-5 mb-5 pt-5 pb-5">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div class="ps-iconbox">
                        <div class="ps-iconbox__header">
                            <i class="ps-icon-delivery"></i>
                            <h3>Miễn phí vận chuyển</h3>
                            <p>ĐƠN HÀNG TRÊN 200.000 đ</p>
                        </div>
                        <div class="ps-iconbox__content">
                            <p>
                                Bạn muốn theo dõi một gói hàng? Tìm thông tin theo dõi và chi tiết đơn
                                hàng từ Đơn đặt hàng của bạn.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div class="ps-iconbox">
                        <div class="ps-iconbox__header">
                            <i class="ps-icon-money"></i>
                            <h3>Hoàn tiền 100%.</h3>
                            <p>TRONG VÒNG 30 NGÀY SAU KHI GIAO HÀNG.</p>
                        </div>
                        <div class="ps-iconbox__content">
                            <p>
                                Bạn có thể trả lại hầu hết các mặt hàng mới, chưa mở đã bán trong vòng 30
                                ngày kể từ ngày giao hàng để được hoàn tiền đầy đủ.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div class="ps-iconbox">
                        <div class="ps-iconbox__header">
                            <i class="ps-icon-customer-service"></i>
                            <h3>Hỗ trợ 24/7.</h3>
                            <p>CHÚNG TÔI CÓ THỂ GIÚP BẠN TRỰC TUYẾN.</p>
                        </div>
                        <div class="ps-iconbox__content">
                            <p>
                                Chúng tôi cung cấp đường dây nóng dành cho khách hàng 24/7 để bạn không
                                bao giờ đơn độc nếu có thắc mắc.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ContentLoader } from "vue-content-loader"
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles

import { computed, defineComponent, defineAsyncComponent, ref } from "vue";
import { useProductStore } from '@/stores/product/product'
import { useBannerStote } from "@/stores/banner";
import CardProduct from "@/components/CardProduct.vue";
import CardBanner from "@/components/CardBanner.vue";
import DialogProductDetail from "../../components/DialogProductDetail.vue";
// const CardProduct = defineAsyncComponent(() =>
//     import("@/components/FrontEnd/CardProduct.vue")
// )
// const CardBanner = defineAsyncComponent(() =>
//     import("@/components/FrontEnd/CardBanner.vue")
// )
export default {
    components: {
        ContentLoader,
        Swiper,
        SwiperSlide,
        CardProduct,
        CardBanner,
        DialogProductDetail
    },
    setup() {

        const storeBanner = useBannerStote();
        storeBanner.getBannerHome();
        //product
        const storeProduct = useProductStore();
        storeProduct.getProductNewHome();
        storeProduct.getProductSaleHome();

        var products_new = computed(() => storeProduct.getProductList);
        var products_sale = computed(() => storeProduct.products_sale);
        var banners = computed(() => storeBanner.getBannerList);
        return {
            modules: [Pagination, Navigation],
            products_new,
            products_sale,
            banners,
            loadContenProNew: computed(() => storeProduct.loadContenProNew),
            loadContenProSale: computed(() => storeProduct.loadContenProSale),
        };
    },

    // data() {
    //     const storeProduct = useProductStore();
    //     console.log(storeProduct.loadContenProNew);

    //     return {

    //         loadContenProNew: storeProduct.loadContenProNew,
    //         loadContenProSale: true
    //     }
    // },
    created() {
        // const storeProduct = useProductStore();
        // console.log(storeProduct.loadContenProNewGetter);


        // setTimeout(() => {
        //     this.loadContenProNew = false
        // }, 3000);
        // setTimeout(() => {
        //     this.loadContenProSale = false
        // }, 4000);
    },


};
</script>

<style>
</style>
