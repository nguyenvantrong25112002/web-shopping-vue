<template>
  <!-- <ButtonMain @click="is_addres_user = !is_addres_user"></ButtonMain> -->
  <div class="container">
    <div class="row my-5">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xl-12 col-xxl-12">
        <el-breadcrumb separator="/" class="m-auto justify-content-center">
          <el-breadcrumb-item :to="{ name: 'List-Cart' }"
            >Danh sách giỏ hàng</el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{ name: 'PayCart' }"
            >Thanh toán</el-breadcrumb-item
          >
          <el-breadcrumb-item>Trả tiền</el-breadcrumb-item>
          <el-breadcrumb-item>Hoàn thành đơn hàng</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="pay">
      <div class="row">
        <div class="col-lg-8">
          <div class="information-line">
            <div class="delivery-address mb-4">
              <div class="title">Địa chỉ giao hàng</div>
              <template v-if="is_addres_user == false">
                <div class="d-flex justify-content-end mt-4">
                  <button
                    @click="is_addres_user = !is_addres_user"
                    class="button-simple"
                  >
                    Thoát
                  </button>
                </div>
              </template>
              <template v-if="amount_addres_users > 0">
                <transition
                  enter-active-class="animate__animated animate__fadeIn"
                >
                  <div class="row mt-4">
                    <template
                      v-for="(addres_user, index) in addres_users"
                      :key="index"
                    >
                      <div
                        v-if="addres_user.status == 1 && is_addres_user == true"
                        class="col-6"
                      >
                        <div class="c-address-item">
                          <div class="name-phone">
                            <p class="name">
                              {{ addres_user.name }}
                            </p>
                            <div class="phone">
                              {{ addres_user.phone }}
                            </div>
                          </div>
                          <p>{{ addres_user.city_province }}</p>
                          <p>
                            {{ addres_user.ward }} -
                            {{ addres_user.district }} -
                            {{ addres_user.city_province }}
                          </p>
                          <p>{{ addres_user.detailed_address }}</p>

                          <div class="default" style="display: none">
                            địa chỉ mặc định
                          </div>
                          <div class="operate">
                            <a
                              href="javascript:;"
                              role="button"
                              da-type="syncClick"
                              da-sa-name="address_edit"
                            >
                              chỉnh sửa
                            </a>
                            <div class="no-national" style="display: none">
                              Địa chỉ không đầy đủ. Vui lòng hoàn tất địa chỉ
                              của bạn để giao hàng tốt hơn.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-if="is_addres_user == false" class="col-6">
                        <div
                          @click="
                            defaultActiveAddressUser(
                              addres_user.id,
                              addres_user.status
                            )
                          "
                          :class="{
                            'default-address': addres_user.status == 1,
                          }"
                          class="c-address-item cursor-pointer"
                        >
                          <div class="name-phone">
                            <p class="name">
                              {{ addres_user.name }}
                            </p>
                            <div class="phone">
                              {{ addres_user.phone }}
                            </div>
                          </div>
                          <p>{{ addres_user.city_province }}</p>
                          <p>
                            {{ addres_user.ward }} -
                            {{ addres_user.district }} -
                            {{ addres_user.city_province }}
                          </p>
                          <p>{{ addres_user.detailed_address }}</p>

                          <div class="default" style="display: none">
                            địa chỉ mặc định
                          </div>
                          <div class="operate">
                            <a
                              href="javascript:;"
                              role="button"
                              da-type="syncClick"
                              da-sa-name="address_edit"
                            >
                              chỉnh sửa
                            </a>
                            <div class="no-national" style="display: none">
                              Địa chỉ không đầy đủ. Vui lòng hoàn tất địa chỉ
                              của bạn để giao hàng tốt hơn.
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template v-if="is_addres_user == true">
                      <div class="col-6">
                        <div
                          class="d-flex flex-column align-items-center my-auto"
                        >
                          <button
                            @click="is_addres_user = !is_addres_user"
                            class="button mb-4"
                          >
                            Chọn địa chỉ khác
                          </button>
                          <button
                            @click="dialogFormVisible = true"
                            class="button-simple"
                          >
                            <i class="icofont-ui-add"></i> Thêm địa chỉ mới
                          </button>
                        </div>
                      </div>
                    </template>
                  </div>
                </transition>
              </template>
              <template v-if="amount_addres_users == 0">
                <div class="d-flex justify-content-center m-4">
                  <button @click="dialogFormVisible = true" class="button py-3">
                    Thêm mới thông tin giao hàng
                  </button>
                </div>
              </template>
              <teleport to="body">
                <el-dialog
                  v-model="dialogFormVisible"
                  title="Thông tin địa chỉ giao hàng"
                  width="60%"
                  top="10px"
                >
                  <form @submit.prevent="onSubmit">
                    <div class="mb-3">
                      <label for="" class="form-label"
                        >Tên người nhận hàng</label
                      >
                      <input
                        v-model="dataAddress.name"
                        type="text"
                        name=""
                        id=""
                        class="form-control"
                        placeholder=""
                        aria-describedby="helpId"
                      />
                      <small
                        class="text-muted"
                        v-for="error of v$.dataAddress.name.$errors"
                        :key="error.$uid"
                      >
                        {{ error.$message }}
                      </small>
                    </div>
                    <div class="mb-3">
                      <label for="" class="form-label">Số điện thoại</label>
                      <input
                        v-model="dataAddress.phone"
                        type="text"
                        name=""
                        id=""
                        class="form-control"
                        placeholder=""
                        aria-describedby="helpId"
                      />
                      <small id="helpId" class="text-muted"></small>
                    </div>
                    <div class="row">
                      <div class="col-4">
                        <div class="mb-3">
                          <label for="" class="form-label"
                            >Tỉnh thành phố</label
                          >

                          <el-select
                            v-model="dataAddress.city_province"
                            @change="selectCityChane(dataAddress.city_province)"
                            filterable
                            placeholder="Chọn tỉnh thành phố"
                            size="large"
                          >
                            <el-option
                              v-for="cityprovince in cityprovinces"
                              :key="cityprovince"
                              :label="cityprovince.name"
                              :value="cityprovince.id"
                            />
                          </el-select>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="mb-3">
                          <label for="" class="form-label">Quận huyện</label>
                          <el-select
                            v-model="dataAddress.district"
                            @change="selectDistrictChane(dataAddress.district)"
                            filterable
                            placeholder="Chọn quận huyện"
                            size="large"
                          >
                            <el-option
                              v-for="district in districts"
                              :key="district"
                              :label="district.name"
                              :value="district.id"
                            />
                          </el-select>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="mb-3">
                          <label for="" class="form-label"
                            >Xã phường thị trấn</label
                          >
                          <el-select
                            v-model="dataAddress.ward"
                            filterable
                            placeholder="Chọn xã phường thị trấn"
                            size="large"
                          >
                            <el-option
                              v-for="ward in wards"
                              :key="ward"
                              :label="ward.name"
                              :value="ward.id"
                            />
                          </el-select>
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="" class="form-label">Địa chỉ chi tiết</label>
                      <textarea
                        v-model="dataAddress.detailed_address"
                        class="form-control"
                        name=""
                        id=""
                        rows="3"
                      ></textarea>
                    </div>
                    <div class="mb-3 d-flex align-items-center">
                      <label for="" class="me-3">Chọn làm mặc định</label>
                      <el-switch v-model="dataAddress.status" />
                    </div>

                    <div class="d-flex">
                      <button
                        @click="dialogFormVisible = false"
                        class="button-simple"
                      >
                        Thoát
                      </button>
                      <button type="submit" class="button ms-4">Lưu</button>
                    </div>
                  </form>
                </el-dialog>
              </teleport>
            </div>
            <div class="payment-methods">
              <div class="title">Phương thức thanh toán</div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="order-summary">
            <div class="title">Tóm tắt đơn hàng</div>
            <div class="px-4">
              <div
                class="d-flex justify-content-between align-items-center py-2"
              >
                <span class="fs-6">giá còn :</span>
                <span class="fs-5 fw-700">
                  {{ formatMoney(totalCart) }}
                  <MoneyIcon></MoneyIcon>
                </span>
              </div>
              <div
                class="d-flex justify-content-between align-items-center py-2"
              >
                <span class="fs-6">Phí vận chuyển :</span>
                <span class="fs-5 fw-700"> 0 <MoneyIcon></MoneyIcon> </span>
              </div>
              <div
                class="d-flex justify-content-between align-items-center py-2"
              >
                <span class="fs-6">Phí bảo đảm vận chuyển :</span>
                <span class="fs-5 fw-700"> 0 <MoneyIcon></MoneyIcon> </span>
              </div>
              <div
                class="d-flex justify-content-between align-items-center py-2"
              >
                <span class="fs-6">Tổng tiền :</span>
                <span class="fs-5 fw-700">
                  {{ formatMoney(totalCart) }} <MoneyIcon></MoneyIcon>
                </span>
              </div>
              <div class="d-flex justify-content-center mt-5">
                <button class="button rounded-pill w-100 m-0 py-3">
                  Đặt hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { formatMoney } from "@/service/format-money";
import { computed, reactive, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { useAddressStore } from "@/stores/addres/address";
import { useAddresUserStore } from "@/stores/addres/addres-user";
import ButtonMain from "@/components/html/button/button-main.vue";
import { useToast } from "vue-toastification";
import MoneyIcon from "../../../components/MoneyIcon.vue";
import { useCartStore } from "@/stores/cart/cart";
export default {
  name: "PayCart",
  components: { ButtonMain, MoneyIcon },
  setup() {
    const toast = useToast();
    const storeCart = useCartStore();
    const storeAddress = useAddressStore();
    const storeAddresUser = useAddresUserStore();
    storeAddress.getCityProvinces();
    storeCart.totalPriceCart();
    storeAddresUser.list();
    var totalCart = computed(() => storeCart.totalCart);
    const cityprovinces = computed(() => storeAddress.cityProvinces);
    const addres_users = computed(() => storeAddresUser.addres_users);
    const amount_addres_users = computed(() => storeAddresUser.amount);

    const dataAddress = reactive({
      name: null,
      phone: null,
      city_province: null,
      district: null,
      ward: null,
      detailed_address: null,
      status: null,
    });
    const rule = computed(() => {
      return {
        dataAddress: {
          name: {
            required: helpers.withMessage("Chưa nhập trường này !!", required),
            $autoDirty: true,
            $lazy: true,
          },
          phone: {
            required: helpers.withMessage("Chưa nhập trường này !!", required),
            $autoDirty: true,
            $lazy: true,
          },
          city_province: {
            required: helpers.withMessage("Chưa nhập trường này !!", required),
            $autoDirty: true,
            $lazy: true,
          },
        },
      };
    });
    const v$ = useVuelidate(rule, dataAddress);

    return {
      v$,
      dataAddress,
      cityprovinces,
      storeAddresUser,
      addres_users,
      amount_addres_users,
      toast,
      totalCart,
      formatMoney,
    };
  },
  data() {
    return {
      districts: null,
      wards: null,
      is_addres_user: true,
      dialogFormVisible: false,
    };
  },
  methods: {
    selectCityChane(val: any) {
      const storeAddress = useAddressStore();
      storeAddress.getDistrict(val);
      this.districts = computed(() => storeAddress.districts);
      this.dataAddress.district = null;
      this.dataAddress.ward = null;
    },
    selectDistrictChane(val: any) {
      const storeAddress = useAddressStore();
      storeAddress.getWard(val);
      this.wards = computed(() => storeAddress.wards);
      this.dataAddress.ward = null;
    },
    onSubmit() {
      this.storeAddresUser.add(this.dataAddress);
      this.dialogFormVisible = !this.dialogFormVisible;
      this.dataAddress = reactive({
        name: null,
        phone: null,
        city_province: null,
        district: null,
        ward: null,
        detailed_address: null,
        status: null,
      });
    },
    defaultActiveAddressUser(id: number, status: number) {
      if (status == 1) {
        this.toast.warning("Địa chỉ này đã là mặc định !");
        return;
      }
      this.storeAddresUser.update_active({ id: id, status: status });
      this.is_addres_user = !this.is_addres_user;
      return;
    },
  },
};
</script>

<style>
.pay .information-line {
}

.pay .delivery-address {
}

.pay .payment-methods {
  display: revert;
}

.pay .order-summary {
}

.pay .title {
  text-transform: capitalize;
  font-size: 1.3rem;
  text-align: unset;
  margin: unset;
  border-bottom: solid 1px var(--color-border);
  padding-bottom: 10px;
}

.c-address-item {
  position: relative;
  padding: 20px 20px 30px;
  margin-bottom: 10px;
  border: 1px solid #e5e5e5;
  width: 100%;
  height: 155px;
  color: black;
  transition: all 0.3s ease-out;
}

.c-address-item:hover {
  background-color: #e5e5e5;
}

.c-address-item.default-address {
  background-color: #e5e5e5;
}

.c-address-item:before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 4px;
  height: 100%;
  background-image: url(https://sheinsz.ltwebstatic.com/she_dist/images/border-e8fd9a0d48.png);
}

.c-address-item .name-phone {
  margin-bottom: 16px;
  display: -webkit-box;
  display: flex;
  line-height: 22px;
}

.c-address-item .name-phone .name {
  margin-right: 8px;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: black;
}

.c-address-item .name-phone .phone {
  font-size: 13px;
  color: #666;
  white-space: nowrap;
}

.c-address-item > p {
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 17px;
  word-break: break-all;
  color: black;
}

.c-address-item .operate {
  position: absolute;
  bottom: 10px;
  right: 20px;
}
</style>
