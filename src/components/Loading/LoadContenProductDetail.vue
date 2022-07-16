<template>
    <div style="width:100%">
        <ContentLoader height='500' width='1250' backgroundColor="#0ac2ff" foregroundColor="#fe1616">
            <!-- img -->
            <rect x="90" y="18" rx="0" ry="0" width="550" height="450" />

            <!-- thumb -->
            <rect x="10" y="20" rx="0" ry="0" width="70" height="100" />
            <rect x="10" y="130" rx="0" ry="0" width="70" height="100" />
            <rect x="10" y="240" rx="0" ry="0" width="70" height="100" />
            <rect x="10" y="350" rx="0" ry="0" width="70" height="100" />

            <!-- conten -->
            <rect x="680" y="18" rx="0" ry="0" width="700" height="40" />
            <rect x="680" y="100" rx="0" ry="0" width="400" height="20" />
            <rect x="680" y="130" rx="0" ry="0" width="400" height="20" />
            <rect x="680" y="160" rx="0" ry="0" width="400" height="20" />

            <rect x="680" y="254" rx="5" ry="5" width="220" height="10" />
            <circle cx="472" cy="190" r="7" />
            <rect x="680" y="284" rx="5" ry="5" width="220" height="10" />
            <circle cx="472" cy="219" r="7" />
            <rect x="680" y="314" rx="5" ry="5" width="220" height="10" />
            <circle cx="472" cy="249" r="7" />
            <rect x="680" y="344" rx="5" ry="5" width="220" height="10" />
            <!-- <rect x="680" y="300" rx="0" ry="0" width="70" height="30" />
            <rect x="680" y="300" rx="0" ry="0" width="70" height="30" /> -->
        </ContentLoader>
    </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader';
export default {
    components: {

        ContentLoader
    }
}
</script>

<style>
</style>