<template>
    <div>
        <!-- <div class="ps-banner_image" v-bind:style="{ backgroundImage: `url(${banner.image})` }"> -->
        <div class="ps-banner_image"
            v-bind:style="{ backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/208/1011/648/neko-loli-neko-ears-banner-otaku-anime-girls-hd-wallpaper-thumb.jpg)` }">

            <h1>
                {{ banner.title }}
            </h1>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'CartBanner',
    props: ['banner'],

    setup() {

    }
}
</script>

<style>
.ps-banner_image {
    user-select: none;
    height: 500px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
}
</style>