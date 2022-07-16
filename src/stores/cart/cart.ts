import { defineStore } from 'pinia';
import { v4 as uuid4 } from 'uuid'
import { useToast } from 'vue-toastification'
const toast = useToast()
export const useCartStore = defineStore('cart', {
    state: () => ({
        myCart: null,
        carts: null,
        countCart: null,
        totalCart: Number ?? 0,
        nameLocalCart: 'carts'
    }),
    getters: {

    },
    actions: {
        getGlobal(dataCart) {
            this.setCartLocal(dataCart);
            this.getCartLocal();
            this.getCountCartLocal();
            this.totalPriceCart();
        },
        async setCartLocal(val: any) {
            return localStorage.setItem(this.nameLocalCart, JSON.stringify(val))
        },

        async getCartLocal() {
            var data = localStorage.getItem(this.nameLocalCart);
            return this.carts = JSON.parse(data);
        },
        getCountCartLocal() {
            var data = localStorage.getItem(this.nameLocalCart);
            let cartLocalStore = JSON.parse(data);
            if (cartLocalStore) {
                const sum = cartLocalStore.reduce((accumulator, object) => {
                    return accumulator + object.quantity;
                }, 0);
                this.countCart = sum;
            }

        },

        async addCart(val: any) {
            var msg = "Thêm giỏ hàng thành công !!";
            var isToCartPropertie = null;
            var isToCartPropertieKey = null;
            var dataCart = [];
            var cart = localStorage.getItem(this.nameLocalCart);
            var key_has = null;
            var key_propertie = null;
            var key_has_propertie = false;
            let isToCart = null;
            let cartLocalStore = JSON.parse(cart);
            if (cartLocalStore == null) {
                cartLocalStore = []
                cartLocalStore.push(val);
                dataCart = cartLocalStore;
                this.getGlobal(dataCart)
                toast.success('Thêm giỏ hàng thành công !!', { timeout: 2000 });
                return;
            }
            cartLocalStore.filter(function (e, k) {
                if (e.id_pro == val.id_pro) {
                    key_has = k;
                    isToCart = true;
                    if (e.properties) {
                        key_propertie = k;
                        key_has_propertie = true;
                    }
                }
            })
            if (key_has_propertie) {
                cartLocalStore[key_propertie].properties.map((data, key) => {
                    val.properties.map((d, k) => {
                        if (data.slug == d.slug && data.species != d.species) {
                            isToCartPropertie = true;
                        } else if (data.slug != d.slug && data.species == d.species) {
                            isToCartPropertieKey = key
                            isToCartPropertie = false;
                        }
                    })
                })
            }
            if (isToCartPropertie == true) {
                cartLocalStore.push(val);
                dataCart = cartLocalStore;
                this.getGlobal(dataCart)
                toast.success(("Thêm giỏ hàng thành công !!"), { timeout: 2000 });
                return;
            }

            if (isToCart) {
                cartLocalStore[key_has].quantity = cartLocalStore[key_has].quantity + val.quantity;
                msg = 'Cập nhập giỏ hàng thành công !!'
            } else {
                cartLocalStore.push(val);
            }
            dataCart = cartLocalStore;
            this.getGlobal(dataCart);
            toast.success(msg, { timeout: 2000 });
            return;

        },
        removeCart(val: any) {
            var dataCart = [];
            var data = localStorage.getItem(this.nameLocalCart);
            let cartLocalStore = JSON.parse(data);
            cartLocalStore.splice(val, 1);
            dataCart = cartLocalStore;
            this.getGlobal(dataCart)
        },

        async totalPriceCart() {
            const priceArr: any = []
            var data = localStorage.getItem(this.nameLocalCart);
            let cartLocalStore = JSON.parse(data);
            if (cartLocalStore == null) cartLocalStore = [];
            cartLocalStore.map((data, key) => {
                priceArr.push(data.price * data.quantity);
            })
            const sum = priceArr.reduce((accumulator, object) => {
                return accumulator + object;
            }, 0);
            this.totalCart = sum;
        },

        increase(key: any, quantity: any) {
            var dataCart = [];
            var data = localStorage.getItem(this.nameLocalCart);
            const cartLocalStore = JSON.parse(data);
            cartLocalStore[key].quantity = cartLocalStore[key].quantity + 1;
            dataCart = cartLocalStore;
            this.getGlobal(dataCart)
        },
        reduced(key: any, quantity: any) {
            if (quantity <= 1) {
                this.removeCart(key);
                return;
            }
            var dataCart = [];
            var data = localStorage.getItem(this.nameLocalCart);
            const cartLocalStore = JSON.parse(data);
            cartLocalStore[key].quantity = cartLocalStore[key].quantity - 1;
            dataCart = cartLocalStore;
            this.getGlobal(dataCart)
        },
    }
})