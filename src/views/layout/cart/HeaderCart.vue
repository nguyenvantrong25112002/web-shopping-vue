<template>
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

<script>
export default {

}
</script>

<style>
</style>