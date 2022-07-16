import { frontend_api_environment } from "@/environments/environment";
import axios from "axios";
import { defineStore } from "pinia";

export const useBannerStote = defineStore('fe_banner', {
    state: () => ({
        banners: []
    }),
    getters: {
        getBannerList(state) {
            return state.banners;
        }
    },
    actions: {
        async getBannerHome() {
            // console.log(frontend_api_environment.BANNER_HOME_API);

            try {
                const data = await axios.get(frontend_api_environment.BANNER_HOME_API);
                return this.banners = data.data.payload
            } catch (error) {
                alert(error)
                console.log(error)

            }
        }
    }
})