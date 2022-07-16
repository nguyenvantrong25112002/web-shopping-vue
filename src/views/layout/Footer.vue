<template>
    <div>
        <div class="ps-footer bg--cover">
            <div class="ps-footer__content">
                <div class="container">

                    <div class="row row-cols-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2  ">
                        <div class="col">
                            <div class="row row-cols-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2  ">
                                <div class="col">

                                    <div class="ps-widget--footer ">
                                        <div>
                                            <h6 class="ps-widget__title">Hỗ trợ khách hàng</h6>
                                        </div>
                                        <div class="mt-3">
                                            <ul class="ps-list--line">
                                                <li><a href="#">Phí vận chuyển</a></li>
                                                <li><a href="#">Trả lại</a></li>
                                                <li><a href="#">Hướng dẫn đặt hàng</a></li>
                                                <li><a href="#">Làm thế nào để theo dõi đơn hàng</a></li>
                                                <li><a href="#">Hướng dẫn kích thước</a></li>
                                                <li><a href="#">Trách nhiệm xã hội</a></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="ps-widget--footer ">
                                        <div>
                                            <h6 class="ps-widget__title">Dịch vụ khách hàng</h6>
                                        </div>
                                        <div class="mt-3">
                                            <ul class="ps-list--line">
                                                <li><a href="#">Liên hệ với chúng tôi</a></li>
                                                <li><a href="#">Phương thức thanh toán</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row row-cols-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2  ">
                                <div class="col">

                                    <div class="ps-widget--footer ">
                                        <div>
                                            <h6 class="ps-widget__title">Kết nối với chúng tôi</h6>
                                        </div>
                                        <div class="mt-3">
                                            <ul class="ps-list--icon">
                                                <li>
                                                    <router-link to="#">
                                                        <i class="fa-brands fa-facebook-f"></i>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="#">
                                                        <i class="fa-brands fa-instagram"></i>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="#">
                                                        <i class="fa-brands fa-pinterest-p"></i>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="#">
                                                        <i class="fa-brands fa-youtube"></i>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="#">
                                                        <i class="fa-brands fa-snapchat"></i>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="#">
                                                        <i class="fa-brands fa-twitter"></i>
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="ps-senmail_order mt-5">
                                            <h6 class="ps-widget__title">Tra cứu đơn hàng bằng email</h6>
                                            <div class="mt-3">
                                                <form action="#" method="post">
                                                    <div class="ps-senmail_order-form">
                                                        <input type="email" name="" id="" placeholder="Email...">
                                                        <button>Tra cứu</button>
                                                    </div>
                                                </form>

                                            </div>

                                        </div>


                                    </div>
                                </div>
                                <div class="col">
                                    <div class="ps-widget--footer ">
                                        <div class="ps-list--bank_img mt-3">
                                            <h6 class="ps-widget__title">Chúng tôi chấp nhận</h6>
                                            <ul>
                                                <img src="@/assets/image/payment/1.png" alt="">
                                                <img src="@/assets/image/payment/2.png" alt="">
                                                <img src="@/assets/image/payment/3.png" alt="">
                                                <img src="@/assets/image/payment/4.png" alt="">
                                            </ul>
                                        </div>
                                        <div style=" max-width: 200px; margin-top: 20px; margin-left: auto;">
                                            <img src="@/assets/image/payment/a.png" alt="">
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                            <div class="ps-footer__copyright">
                                <p>
                                    &copy; 2021<a href="#"> NVT Shop</a> bảo lưu tất cả các quyền
                                </p>

                                <div class="mt-3">
                                    <ul class=" d-flex flex-wrap">
                                        <li class="me-4 mb-2"><a href="#">Trung tâm bảo mật</a></li>
                                        <li class="me-4 mb-2"><a href="#">Chính sách bảo mật & Cookie</a></li>
                                        <li class="me-4 mb-2"><a href="#">Điều khoản và Điều kiện</a></li>
                                        <li class="me-4 mb-2"><a href="#">Thông báo về Bản quyền</a></li>
                                        <li class="me-4 mb-2"><a href="#">Dấu ấn</a></li>
                                        <li class="me-4 mb-2"><a href="#"><i class="fa-solid fa-location-dot"></i> Việt
                                                Nam </a></li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script lang="ts">
export default {

}
</script>

<style>
@import "@/assets/css/footer.css";
</style>