import { auth_url } from "@/environments/environment";
import router from "@/router";
import axios from "axios";
import { defineStore } from "pinia";

export const useAuthentication = defineStore(
    'authentication',
    {
        state: () => ({
            auth: null,
            token: null
        }),
        getters: {

        },
        actions: {
            async googleLogin(val: any) {
                try {
                    let data = {
                        access_token: val
                    }
                    await axios.post(auth_url.LOGIN().GOOGLE, data).then(res => {
                        localStorage.setItem('auth', JSON.stringify(res.data.payload))
                        localStorage.setItem('token', JSON.stringify(res.data.token))
                        this.getInformation()
                        // window.setInterval(function () {
                        //     localStorage.removeItem("auth");
                        //     localStorage.removeItem("token");
                        // }, 8640000 * 2);

                        // sessionStorage.setItem('auth', JSON.stringify(res.data.payload));
                        // sessionStorage.setItem('token', JSON.stringify(res.data.token));
                        // window.setInterval(function () {
                        //     sessionStorage.removeItem('auth');
                        //     sessionStorage.removeItem('token');
                        // }, 10000);
                        // router.replace({ name: "Fe-Home" });
                        router.push({ name: "Fe-Home" });
                    })
                } catch (error) {

                }

            },

            getInformation() {
                var data = localStorage.getItem('auth');
                var token = localStorage.getItem('token');
                this.auth = JSON.parse(data as string);
                this.token = JSON.parse(token as string);
            },
            async logOut() {
                localStorage.removeItem("auth");
                localStorage.removeItem("token");
                this.auth = null;
                this.token = null;
                window.location.reload()
            }
        }
    }
)