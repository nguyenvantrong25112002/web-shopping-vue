<!-- đăng nhập -->
<template>
    <h2 v-if="user">signed user: {{ user }}</h2>



    <transition enter-active-class="animate__animated animate__fadeIn">
        <div class="container">
            <div class="row my-5 ">
                <div class="col align-self-center">
                    <div class="main m-auto">
                        <div class="sigin_up a-container" :class="{ 'is-txl': signUp, 'is-hidden': !signUp }"
                            id="a-container">
                            <form id="a-form" method="" action="">
                                <div class="form">
                                    <h2 class="form_title title">Đăng kí tài khoản</h2>
                                    <div class="flex-c-m">
                                        <a href="#" class="login100-social-item bg1">
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </a>
                                        <a href="#" class="login100-social-item bg2">
                                            <i class="fa-brands fa-twitter"></i>
                                        </a>
                                        <a @click="loginGoogle" :disabled="
                                            !Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized
                                        " href="#" class="login100-social-item bg3">
                                            <i class="fa-brands fa-google"></i>
                                        </a>
                                    </div>
                                    <span class="form__span">hoặc sử dụng email để đăng ký</span>
                                    <div class="form__input m-b-25">
                                        <input type="text" placeholder=" " />
                                        <label> Email </label>
                                        <span class="text-danger error-text"></span>
                                    </div>
                                    <div class="form__input m-b-25">
                                        <input type="text" placeholder=" " />
                                        <label> Mật khẩu </label>
                                        <span class="text-danger error-text"></span>
                                    </div>
                                    <div class="form__input m-b-25">
                                        <input type="text" placeholder=" " />
                                        <label> Xác nhận mật khẩu </label>
                                        <span class="text-danger error-text"></span>
                                    </div>
                                    <button class="form__button button rounded-pill submit">Đăng kí</button>
                                </div>
                            </form>
                        </div>
                        <div class="sigin_in b-container" :class="{ 'is-txl': signUp, 'is-hidden': signUp }"
                            id="b-container">
                            <form method="" action="" autocomplete="off">
                                <div class="form">
                                    <h2 class="form_title title">Đến với chúng tôi</h2>
                                    <div class="flex-c-m">
                                        <a href="#" class="login100-social-item bg1">
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </a>
                                        <a href="#" class="login100-social-item bg2">
                                            <i class="fa-brands fa-twitter"></i>
                                        </a>
                                        <a @click="loginGoogle" :disabled="
                                            !Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized
                                        " href="#" class="login100-social-item bg3">
                                            <i class="fa-brands fa-google"></i>
                                        </a>
                                    </div>
                                    <span class="form__span">hoặc sử dụng tài khoản email của bạn</span>
                                    <div class="form__input m-b-25">
                                        <input type="text" placeholder=" " />
                                        <label> Email </label>
                                        <span class="text-danger error-text"></span>
                                    </div>
                                    <div class="form__input">
                                        <input type="text" placeholder=" " />
                                        <label> Mật khẩu </label>
                                        <span class="text-danger error-text"></span>
                                    </div>

                                    <a class="form__link"> Quên mật khẩu ? </a>
                                    <button class="form__button button rounded-pill submit">Đăng nhập</button>
                                </div>
                            </form>
                        </div>
                        <div :class="{ 'is-txr': signUp, 'is-gx': signUp }" class="switch" id="switch-cnt">
                            <div :class="{ 'is-txr': signUp }" class="switch__circle"></div>
                            <div :class="{ 'is-txr': signUp }" class="switch__circle switch__circle--t"></div>
                            <div class="switch__container" :class="{ 'is-hidden': !signUp, 'is-z200': !signUp }"
                                id="switch-c1">
                                <h2 class="switch__title title">Chào mừng trở lại !</h2>
                                <p class="switch__description description">
                                    Để giữ kết nối với chúng tôi, vui lòng đăng nhập bằng thông
                                    tin cá nhân của bạn
                                </p>
                                <button @click="switchSignUp()"
                                    class="switch__button button rounded-pill switch-btn m-t-50">
                                    ĐĂNG NHẬP
                                </button>
                            </div>
                            <div class="switch__container" :class="{ 'is-hidden': signUp, 'is-z200': signUp }"
                                id="switch-c2">
                                <h2 class="switch__title title">Chào bạn !</h2>
                                <p class="switch__description description">
                                    Nhập thông tin cá nhân của bạn và bắt đầu hành trình với chúng
                                    tôi
                                </p>
                                <button @click="switchSignUp()"
                                    class="switch__button button rounded-pill switch-btn m-t-50">
                                    ĐĂNG KÍ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script lang="ts">
import { useAuthentication } from "@/stores/auth/authentication";
import { inject, toRefs, ref, watch } from "vue";
export default {
    setup() {
        const Vue3GoogleOauth = inject("Vue3GoogleOauth");
        return {
            Vue3GoogleOauth,
        };
    },
    data() {
        var signUp = ref(false);
        function switchSignUp() {
            signUp.value = !signUp.value;
        }
        return {
            user: "",
            signUp,
            switchSignUp,
        };
    },
    methods: {
        async loginGoogle() {
            const storeGoogleLogin = useAuthentication();
            try {
                const googleUser = await this.$gAuth.signIn();
                if (!googleUser) {
                    return null;
                }

                storeGoogleLogin.googleLogin(googleUser.getAuthResponse().access_token);

                // console.log(googleUser);
                // console.log("getAuthResponse", googleUser.getAuthResponse().access_token);
                // storeGoogleLogin.googleLogin(googleUser)

                // console.log("getBasicProfile", googleUser.getBasicProfile());
                // console.log('email', googleUser.getBasicProfile().getEmail());
            } catch (error) {
                console.log(error);
                return null;
            }
        },
        async handleClickSignOut() {
            try {
                await this.$gAuth.signOut();
                console.log("isAuthorized", this.Vue3GoogleOauth.isAuthorized);
                this.user = "";
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
<style>
.main {
    position: relative;
    width: 1000px;
    min-width: 1000px;
    min-height: 600px;
    height: 600px;
    padding: 25px;
    box-shadow: -2px 2px 8px #d1d9e6, 0px 0px 0px #f9f9f9;
    border-radius: 12px;
    overflow: hidden;
    background-color: var(--color-while);

}

@media (max-width: 1200px) {
    .main {
        transform: scale(0.7);
    }
}

@media (max-width: 1000px) {
    .main {
        transform: scale(0.6);
    }
}

@media (max-width: 800px) {
    .main {
        transform: scale(0.5);
    }
}

@media (max-width: 600px) {
    .main {
        transform: scale(0.4);
    }
}

.sigin_up,
.sigin_in {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 600px;
    height: 100%;
    padding: 25px;
    background-color: var(--color-while);
    transition: 0.25s;
}

.form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.form__span {
    margin-top: 30px;
    margin-bottom: 12px;
}

.form__link {
    color: #181818;
    font-size: 15px;
    margin-top: 12px;
    margin-bottom: 10px;
    border-bottom: 1px solid #a0a5a8;
    line-height: 2;
    margin-left: auto;
}

.title {
    font-size: 34px;
    font-weight: 700;
    /* line-height: 3; */
    color: #181818;
    text-align: center;
    margin-bottom: 20px;
}

.description {
    font-size: 14px;
    letter-spacing: 0.25px;
    text-align: center;
    line-height: 1.6;
}

/**/
.a-container {
    background-color: var(--color-while);
    z-index: 100;
    left: calc(100% - 600px);
}

.b-container {
    background-color: var(--color-while);

    left: calc(100% - 600px);
    z-index: 0;
}

.switch {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 400px;
    padding: 50px;
    z-index: 200;
    transition: 1s cubic-bezier(0.175, 0.685, 0.175, 1.275);
    background-color: #ecf0f3;
    overflow: hidden;
    box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #f9f9f9;
}

.switch__circle {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: #ecf0f3;
    box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9;
    bottom: -60%;
    left: -60%;
    transition: 1.25s;
}

.switch__circle--t {
    top: -30%;
    left: 60%;
    width: 300px;
    height: 300px;
}

.switch__container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    width: 400px;
    padding: 50px 55px;
    /* transition: 1.25s; */
}

.switch__button {
    cursor: pointer;
}

.switch__button:hover {
    box-shadow: 6px 6px 10px #d1d9e6, -6px -6px 10px #f9f9f9;
    transform: scale(0.985);
    transition: 0.25s;
}

.switch__button:active,
.switch__button:focus {
    box-shadow: 2px 2px 6px #d1d9e6, -2px -2px 6px #f9f9f9;
    transform: scale(0.97);
    transition: 0.25s;
}

/**/
.is-txr {
    left: calc(100% - 400px);
    /* transition: 2s; */
    transform-origin: left;
}

.is-txl {
    left: 0;
    /* transition: 2s; */
    transform-origin: right;
}

.is-z200 {
    z-index: 200;
    /* transition: 1.25s; */
}

.is-hidden {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    /* transition: 0.25s; */
}

.is-gx {
    animation: is-gx 1.25s;
}

@keyframes is-gx {

    0%,
    10%,
    100% {
        width: 400px;
    }

    30%,
    50% {
        width: 500px;
    }
}

.flex-c-m {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    -ms-align-items: center;
    align-items: center;
}

.login100-social-item {
    font-size: 25px;
    color: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 5px;
}
</style>
