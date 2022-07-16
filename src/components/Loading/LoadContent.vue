<template>
    <div>
        <transition enter-active-class="animate__animated animate__fadeIn">

            <div class="row m-5">
                <div class="col-lg-3" v-for="i in 4" :key="i">
                    <ContentLoader :speed="2" viewBox="0 0 400 400" backgroundColor="#f0f0f0" foregroundColor="#dedede">
                        <rect x="0" y="0" rx="3" ry="3" width="360" height="400" />
                    </ContentLoader>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { ContentLoader } from 'vue-content-loader';
export default {
    name: 'LoadConten',
    components: {

        ContentLoader
    }

}
</script>

<style>
</style>