<template>
    <div class="container-fluid border-bottom">

        <nav class=" header-top bg-light d-flex flex-wrap">
            <div class="header-left me-auto">
                <ul class="nav ">
                    <li class=" px-2 " v-for="(cateParent, index) in categoryParent" :key="index">
                        <router-link :to="{ name: 'Fe-Category-Product', params: { slug: cateParent.slug }, }">
                            {{ cateParent.name }}
                        </router-link>
                    </li>

                </ul>
            </div>
            <div class="header-right d-flex flex-wrap">
                <ul class="account nav me-auto">
                    <li class="more-menu-parent nav-item position-relative ">
                        <a href="#" class="nav-link">
                            <i class="icofont-user-alt-6"></i>
                        </a>
                        <ul class="more-menu position-absolute">
                            <li v-if="information" class="border-bottom ">
                                <a class="fw-700" href="#">{{ information.name }}</a>
                            </li>
                            <li v-if="information == null" class="border-bottom">
                                <router-link :to="{ name: 'SignInUp', }" class=" fw-700">
                                    Đăng nhập / Đăng kí
                                </router-link>
                            </li>
                            <li>
                                <a href="#" class="nav-link link-dark px-2">Features</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link link-dark px-2">Pricing</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link link-dark px-2">FAQs</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link link-dark px-2">About</a>
                            </li>
                            <li v-if="information" class="border-top">
                                <a @click="logOut" class="fw-700" href="#">Đăng xuất</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" @click="storeWrapCartHeader.toggleHideShowCart()">
                            <i class="icofont-cart"></i>
                            <span>{{ countCart ?? 0 }}</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="icofont-heart-alt"></i>
                            <span>0</span>
                        </a>
                    </li>
                </ul>

                <teleport to='body'>
                    <ListCartHome></ListCartHome>
                </teleport>
            </div>
        </nav>
    </div>

    <header class="container-fluid py-3 mb-4 border-bottom">
        <div class=" d-flex flex-wrap justify-content-between">
            <div>
                <router-link :to="{ name: 'Fe-Home' }"
                    class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">

                    <span class="fs-4">Double header</span>
                </router-link>
            </div>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0">
                <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
            </form>
        </div>
    </header>

</template>

<script lang="ts">
import { useAuthentication } from '@/stores/auth/authentication';
import { useCartStore } from '@/stores/cart/cart';
import { useWarpHeaderCartStore } from '@/stores/cart/wrap-header-cart';
import { useCategoryStore } from '@/stores/category'
import { computed } from 'vue';
import ListCartHome from '../../components/ListCartHome.vue';

export default {
    components: { ListCartHome },

    setup() {

        const storeWrapCartHeader = useWarpHeaderCartStore()
        const storeCart = useCartStore();
        const storeCategory = useCategoryStore();
        const storeAuth = useAuthentication();
        storeAuth.getInformation();

        storeCart.getCountCartLocal()
        storeCategory.getCategoryParent();
        var information = computed(() => storeAuth.auth);

        var logOut = computed(() => storeAuth.logOut());
        var countCart = computed(() => storeCart.countCart);

        return {
            countCart,
            storeWrapCartHeader,
            logOut,
            information,
            categoryParent: computed(() => storeCategory.getParent),
        };
    },
}
</script>

<style>
@import "@/assets/css/header-web.css";
</style>