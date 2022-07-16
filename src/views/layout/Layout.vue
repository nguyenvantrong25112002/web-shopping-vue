<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from '@/views/layout/Header.vue'
import Footer from '@/views/layout/Footer.vue'
import FullScreen from '@/components/Loading/FullScreen.vue'
import { useLoadingFullScreenStote } from "@/stores/loading/fullscreen";
import { computed } from "vue";

export default {
    name: "LayoutFrontEnd",
    components: {
        RouterLink,
        RouterView,
        Header,
        Footer,
    },

};
</script>
<template>
    <Header></Header>
    <RouterView></RouterView>
    <Footer></Footer>
</template>
<style>
</style>