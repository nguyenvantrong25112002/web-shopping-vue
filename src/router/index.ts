import { requireAuth } from './../guards/requireAuth';
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthentication } from '@/stores/auth/authentication'
import { computed } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '', name: 'Main', component: () => import('@/views/Main.vue'),
      children: [
        {
          path: '',
          name: 'Layout',
          component: () => import('@/views/layout/Layout.vue'),
          children: [
            { path: '', name: 'Fe-Home', component: () => import('@/views/page/fe-home.vue') },
            { path: 'sign-in-up', name: 'SignInUp', component: () => import("@/views/auth/sign-in-up.vue") },
            { path: 'detail/:slug', name: 'Fe-Detail-Product', component: () => import("@/views/page/fe-detail-product.vue") },
            { path: 'category/:slug', name: 'Fe-Category-Product', component: () => import('@/views/page/fe-category-product.vue') },
          ]
        },
        {
          path: '/cart',
          component: () => import("@/views/layout/cart/CartLayout.vue"),
          children: [
            {
              path: 'view-list-cart', name: 'List-Cart', component: () => import('@/views/page/cart/list-cart.vue')
            },
            {
              path: 'pay-cart', name: 'PayCart', component: () => import("@/views/page/cart/pay-cart.vue"),
              // beforeEnter(to, from, next) {
              //   if (to.params.id == id_me) return next("profile");
              //   return next();
              // },
              beforeEnter: requireAuth
            },
          ]
        }
      ]
    },
  ]
})
router.beforeEach(async (to, from) => {
  // const storeAuth = useAuthentication();
  // storeAuth.getInformation()
  // var information = computed(() => storeAuth.auth);
  // console.log(information);

  // console.log(to.name);

  // if (!isAuthenticated && to.name !== 'Login'
  // ) {
  //   return { name: 'Login' }
  // }




})
export default router
