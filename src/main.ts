import { setup_social_network } from './environments/environment'




import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

///fortawesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';


import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";

import GAuth from 'vue3-google-oauth2'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App)

const options = {
    position: "bottom-right",
    timeout: 2000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: true,
    hideProgressBar: false,
    closeButton: false,
    icon: true,
    rtl: false
};

app.use(Toast, options);

// let gauthClientId = "768834812579-ivi0oopbkqe05cg6t41p83t7gteekut6.apps.googleusercontent.com";
const gAuthOptions = { clientId: setup_social_network.clientIdGoogle }
app.use(GAuth, gAuthOptions)


library.add(fas, far, fab)
dom.watch();
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
