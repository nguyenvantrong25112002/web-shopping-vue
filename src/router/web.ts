import Layout from "@/views/layout/Layout.vue"
import Home from "@/views/page/fe-home.vue"
import Detail_Product from "@/views/page/fe-detail-product.vue"
import Category_Product from '@/views/page/fe-category-product.vue'
import TestLogin from '@/components/TestLogin.vue'
import SignInUp from "@/views/auth/sign-in-up.vue"
export const web = () => {
    return {
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [
            { path: '/', name: 'Fe-Home', component: Home },
            { path: '/test/:id', component: TestLogin },
            { path: 'sign-in-up', name: 'SignInUp', component: SignInUp },
            { path: 'detail/:slug', name: 'Fe-Detail-Product', component: Detail_Product },
            { path: 'category/:slug', name: 'Fe-Category-Product', component: Category_Product },
        ]
    }
}