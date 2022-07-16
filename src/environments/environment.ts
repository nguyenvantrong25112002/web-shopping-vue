import axios from "axios";

const DOMAIN = `http://127.0.0.1:8000`;
const API = `api`;
const DOMAIN_API = DOMAIN + '/' + API;
const API_PUBLIC = DOMAIN_API + '/' + `public` + '/';
const API_AUTH = DOMAIN_API + '/' + `auth` + '/';
const API_V1 = DOMAIN_API + '/' + `v1` + '/';

export const frontend_api_environment = {
  production: false,

  PRODUCT_API(URL: string = API_PUBLIC + `product/`) {
    return {
      HOME_NEW: URL + `new-home`,
      HOME_SALE: URL + `sale-home`,
      DETAIL: (slug: string) => {
        return URL + `${slug}`
      },
      PRODUCT_ID_RELATE_TO: (slug: string) => {
        return URL + `relate-to/${slug}`
      },
    };
  },



  BANNER_HOME_API: `${API_PUBLIC}banner/home`,
  CATEGORY_API(URL: string = API_PUBLIC + `category/`,) {
    return {
      CATEGORY_PARENT_API: URL + `parent`,
      CATEGORY_PRODUCT_API: (slug: string) => {
        return URL + `${slug}/products`
      },
    }
  },



};

export const setup_social_network = {
  clientIdGoogle: "768834812579-ivi0oopbkqe05cg6t41p83t7gteekut6.apps.googleusercontent.com",
};

export const auth_url = {
  LOGIN(URL: string = API_AUTH + `login/`) {
    return {
      GOOGLE: URL + `google`,
    };
  },
}


export const header_authorization = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: 'Bearer' + ' ' + JSON.parse(token as string)
    }
  }
}


export const authorization_v1 = {
  ADDRESS_API(URL: string = API_V1 + `address/`) {
    return {
      CITY_PROVINCES_API_LIST: URL + `city-provinces`,
      DISTRICTS_API_LIST: URL + `districts`,
      WARD_API_LIST: URL + `ward`,
    }
  },
  ADDRES_USER_API(URL: string = API_V1 + `address-user/`) {
    return {
      ADD_API: URL + `add`,
      LIST_API: URL + `list`,
      UPDATE_DEFAULT_ACTIVE_API: URL + `update-active-default`,
    }
  }
}
// http://127.0.0.1:8000/api/public