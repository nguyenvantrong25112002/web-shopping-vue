<template>
    <section>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-2">
                    <Category></Category>
                </div>
                <div class="col-lg-10">
                    <div v-show="loadingProCate">
                        <LoadContent v-for="i in 2" :key="i">
                        </LoadContent>
                    </div>
                    <transition enter-active-class="animate__animated animate__fadeIn">
                        <div v-show="!loadingProCate"
                            class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4">
                            <CardProduct class="col" v-for="product in products" :key="product" :product="product">
                            </CardProduct>
                        </div>
                    </transition>

                    <!-- <div class="row">

                        <CardProduct class="col" v-for="product in products" :key="product" :product="product">
                        </CardProduct>
                    </div> -->
                </div>

            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { useCategoryStore } from "@/stores/category";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router"
import CardProduct from "@/components/CardProduct.vue"
import Category from "@/components/Category.vue"
import LoadContent from "@/components/Loading/LoadContent.vue"

export default {
    components: {
        CardProduct,
        Category,
        LoadContent
    },
    setup() {
        const route = useRoute();
        const storeCategory = useCategoryStore();
        storeCategory.getProductCategory(route.params.slug)
        watch(() => route.params.slug, () => {
            storeCategory.getProductCategory(route.params.slug)
        });
        var products = computed(() => storeCategory.categoryProducts)

        return {
            products,
            loadingProCate: computed(() => storeCategory.loadingProCate)
        };
    },
    data() {
        // const storeCategory = useCategoryStore();
        // const url = storeCategory.next_page_url

        // const data = storeCategory.loadMoreProductCate();
        return {

            loadContenProNew: true
        }
    },
    // watch: {
    //     products: function () {
    //         loadContenProNew: true

    //     }
    // },
    // mounted() {
    //     setTimeout(() => {
    //         this.loadContenProNew = false
    //     }, 3000);
    // },

}
</script>

<style>
</style>