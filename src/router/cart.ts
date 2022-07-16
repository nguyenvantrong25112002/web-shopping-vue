import CartLayout from "@/views/layout/cart/CartLayout.vue"
import ListCart from "@/views/page/cart/list-cart.vue"
import PayCart from "@/views/page/cart/pay-cart.vue"
export const cart = () => {
    return {
        path: '/',
        component: CartLayout,
        children: [
            { path: 'view-list-cart', name: 'List-Cart', component: ListCart },
            {
                path: 'pay-cart', name: 'PayCart', component: PayCart
            },
        ]
    }
}