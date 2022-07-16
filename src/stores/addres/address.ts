import { authorization_v1, frontend_api_environment, header_authorization } from '@/environments/environment';
import axios from 'axios';
import { defineStore } from 'pinia';
export const useAddressStore = defineStore('address', {
    state: () => ({
        cityProvinces: null,
        districts: null,
        wards: null
    }),
    getters: {
        // getDistrict(state) {
        //     return state.districts
        // },
    },
    actions: {
        async getCityProvinces() {
            try {
                const data = await axios.get(
                    authorization_v1.ADDRESS_API().CITY_PROVINCES_API_LIST,
                    header_authorization()
                );

                return this.cityProvinces = data.data.payload;


            } catch (error) {
                alert(error);
                console.log(error);

            }
        },
        async getDistrict(id: number) {
            try {
                const data = await axios.post(
                    authorization_v1.ADDRESS_API().DISTRICTS_API_LIST, { id: id },
                    header_authorization()
                );
                return this.districts = data.data.payload;
            } catch (error) {
                alert(error);
                console.log(error);

            }
        },
        async getWard(id: number) {
            try {
                const data = await axios.post(
                    authorization_v1.ADDRESS_API().WARD_API_LIST, { id: id },
                    header_authorization()
                );
                return this.wards = data.data.payload;
            } catch (error) {
                alert(error);
                console.log(error);

            }
        }
    }
})