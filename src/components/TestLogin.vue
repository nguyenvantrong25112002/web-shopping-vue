<template>
    <!-- <div>
        <h1>IsInit: {{ Vue3GoogleOauth.isInit }}</h1>
        <h1>IsAuthorized: {{ Vue3GoogleOauth.isAuthorized }}</h1>
        <h2 v-if="user">signed user: {{ user }}</h2>
        <button @click="handleClickSignIn" :disabled="!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized">sign
            in</button>
        <button @click="handleClickGetAuthCode" :disabled="!Vue3GoogleOauth.isInit">get authCode</button>
        <button @click="handleClickSignOut" :disabled="!Vue3GoogleOauth.isAuthorized">sign out</button>
        <button @click="handleClickDisconnect" :disabled="!Vue3GoogleOauth.isAuthorized">disconnect</button>
    </div> -->
    <div>

        <button @click="setName()">Set name</button>
    </div>
</template>

<script lang="ts" >
import { inject, toRefs, watch, ref } from "vue";
import { useRoute } from "vue-router"

export default {
    // name: "HelloWorld",
    // props: {
    //     msg: String,
    // },
    setup() {
        // const state = ref({
        //     name: "NGuyễn Văn TRọng",
        // });
        // function setName() {
        //     console.log('gốc :' + state.value.name);
        //     state.value.name = 'TRọng';
        //     console.log('function :' + state.value.name);
        // }
        // watch(() => state.value.name, () => {
        //     console.log('watch: ' + state.value.name)
        // })

        // const route = useRoute();
        // watch(() => route.params.id,
        //     async newId => {

        //     }
        // )
        // return {
        //     state,
        //     setName
        // }
        // const { isSignIn } = toRefs(props);
        // const Vue3GoogleOauth = inject("Vue3GoogleOauth");

        // const handleClickLogin = () => { };
        // return {
        //     Vue3GoogleOauth,
        //     handleClickLogin,
        //     isSignIn,
        // };
    },
    data() {
        return {
            // user: '',
        }
    },
    // methods: {
    //     async setName() {
    //         this.state.value.name = 'TRọng';
    //     }
    // },
    // methods: {
    //     async handleClickSignIn() {
    //         try {
    //             const googleUser = await this.$gAuth.signIn();
    //             if (!googleUser) {
    //                 return null;
    //             }
    //             console.log("googleUser", googleUser);
    //             this.user = googleUser.getBasicProfile().getEmail();
    //             console.log("getId", this.user);
    //             console.log("getBasicProfile", googleUser.getBasicProfile());
    //             console.log("getAuthResponse", googleUser.getAuthResponse());
    //             console.log(
    //                 "getAuthResponse",
    //                 this.$gAuth.instance.currentUser.get().getAuthResponse()
    //             );

    //         } catch (error) {
    //             //on fail do something
    //             console.log(error);
    //             return null;
    //         }
    //     },

    //     // async handleClickGetAuthCode() {
    //     //     try {
    //     //         const authCode = await this.$gAuth.getAuthCode();
    //     //         console.log("authCode", authCode);
    //     //     } catch (error) {
    //     //         //on fail do something
    //     //         console.log(error);
    //     //         return null;
    //     //     }
    //     // },

    //     async handleClickSignOut() {
    //         try {
    //             await this.$gAuth.signOut();
    //             console.log("isAuthorized", this.Vue3GoogleOauth.isAuthorized);
    //             this.user = "";
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     },

    //     // handleClickDisconnect() {
    //     //     window.location.href = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${window.location.href}`;
    //     // },
    // },

};
</script>

<style>
button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: 0.1s;
    transition: 0.1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    margin-right: 1em;
}

button:disabled {
    background: #fff;
    color: #ddd;
    cursor: not-allowed;
}
</style>