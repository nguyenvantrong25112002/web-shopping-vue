import { header_authorization, authorization_v1 } from '@/environments/environment';
import axios from 'axios';
import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification'
const toast = useToast()
export const useAddresUserStore = defineStore('addres_user', {
    state: () => ({
        addres_users: null,
        amount: null ?? 0,
    }),
    getters: {

    },
    actions: {
        async add(data: any) {
            try {
                await axios.post(
                    authorization_v1.ADDRES_USER_API().ADD_API, data,
                    header_authorization()
                ).then(res => {
                    this.list()
                    setTimeout(() => {
                        toast.success(res.data.payload);
                    }, 2000);
                    return
                })
            } catch (error) {
                console.log(error);
            }
        },
        async list() {
            try {
                await axios.get(
                    authorization_v1.ADDRES_USER_API().LIST_API,
                    header_authorization()
                ).then(res => {
                    this.addres_users = res.data.payload;
                    this.amount = res.data.payload.length;
                    return
                })
            } catch (error) {
                console.log(error);
            }
        },
        async update_active(data: any) {
            try {
                await axios.put(
                    authorization_v1.ADDRES_USER_API().UPDATE_DEFAULT_ACTIVE_API, data,
                    header_authorization()
                ).then(res => {
                    this.list()
                    toast.success(res.data.payload);
                    return
                })
            } catch (error) {
                console.log(error);
            }
        }
    }
})