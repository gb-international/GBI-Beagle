<template>
  <div class="container" id="payment_information">
    <form class="form" method="POST" action="/payment">
      <div class="desktop">
        <!-- desktop view -->
        <div class="row pt-4 pb-4">
          <div class="col-sm-8">
            <h6>Billing Information</h6>
            <div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group m-1">
                    <label for="name">Billing Name</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.billing_name"
                      name="billing_name"
                      required
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group m-1">
                    <label for="address">Billing Address</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.billing_address"
                      name="billing_address"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-4">
                  <div class="form-group m-1">
                    <label for="city">Billing City</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.billing_city"
                      name="billing_city"
                      required
                    />
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="form-group m-1">
                    <label for="state">Billing State</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.billing_state"
                      name="billing_state"
                      required
                    />
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group m-1">
                    <label for="billing_zip">Billing Zip Code</label>
                    <input
                      type="number"
                      class="form-control"
                      v-model="form.billing_zip"
                      name="billing_zip"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4">
                  <div class="form-group m-1">
                    <label for="country">Billing Country</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.billing_country"
                      name="billing_country"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group m-1">
                    <label for="phone_no">Phone Number</label>
                    <input
                      type="number"
                      class="form-control"
                      v-model="form.billing_tel"
                      name="billing_tel"
                      required
                    />
                  </div>
                  <p>
                    <small class="text-danger">{{ errors.billing_tel }}</small>
                  </p>
                </div>

                <div class="col-sm-6">
                  <div class="form-group m-1">
                    <label for="email">Billing Email</label>
                    <input
                      type="email"
                      class="form-control"
                      v-model="form.billing_email"
                      name="billing_email"
                      required
                    />
                  </div>
                  <p>
                    <small class="text-danger">{{
                      errors.billing_email
                    }}</small>
                  </p>
                </div>
                <div class="d-none">
                  <input type="text" v-model="form.user_id" name="user_id" />
                  <input
                    type="text"
                    v-model="form.travel_code"
                    name="travel_code"
                  />
                  <input type="text" v-model="form.tour_id" name="tour_id" />
                  <input
                    type="text"
                    v-model="form.school_id"
                    name="school_id"
                  />
                  <input
                    type="text"
                    v-model="form.base_price"
                    name="base_price"
                  />
                </div>
              </div>
            </div>

            <p class="mt-3 pl-1">
              <label for="checkbox"
                ><input type="checkbox" id="checkbox" @click="toggleShipping" />
                <small
                  >My billing and shipping address are different</small
                ></label
              >
            </p>

            <div v-if="shipping_toggle">
              <h6>Shipping Information</h6>
              <div>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group m-1">
                      <label for="name">Shipping Name</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.delivery_name"
                        name="delivery_name"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group m-1">
                      <label for="address">Shipping Address</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.delivery_address"
                        name="delivery_address"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-4">
                    <div class="form-group m-1">
                      <label for="city">Shipping City</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.delivery_city"
                        name="delivery_city"
                      />
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="form-group m-1">
                      <label for="state">Shipping State</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.delivery_state"
                        name="delivery_state"
                      />
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group m-1">
                      <label for="zipcode">Shipping Zip Code</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.delivery_zip"
                        name="delivery_zip"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="form-group m-1">
                      <label for="country">Shipping Country</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.delivery_country"
                        name="delivery_country"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group m-1">
                      <label for="phone_no">Phone Number</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.delivery_tel"
                        name="delivery_tel"
                      />
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="form-group m-1">
                      <label for="email">Shipping Email</label>
                      <input
                        type="email"
                        class="form-control"
                        v-model="form.delivery_email"
                        name="delivery_email"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4 pl-4 pr-4">
            <div class="payment-card">
              <payment-card
                :amount="amount"
                :pax="1"
              ></payment-card>
            </div>
            <button
              v-if="submit_button == false"
              @click="submitForm"
              type="button"
              class="btn btn-block submit-button btn-info p-3 font-weight-bold border-radius-0"
            >
              Confirm & Pay
            </button>

            <button
              v-else
              type="submit"
              class="btn btn-block submit-button btn-info p-3 font-weight-bold border-radius-0"
            >
              Confirm & Pay
            </button>
          </div>
        </div>
      </div>

      <div class="mobile m-0 p-0">
        <div class="row bg-white text-center">
          <div
            class="col pt-4 pb-2 link font-weight-bold"
            @click="activate(0)"
            :class="{ active: mobile.active_el == 0 }"
          >
            Payment info
          </div>
          <div
            class="col pt-4 pb-2 link font-weight-bold"
            @click="activate(1)"
            :class="{ active: mobile.active_el == 1 }"
          >
            Billing info
          </div>
          <div
            class="col pt-4 pb-2 link font-weight-bold"
            @click="activate(2)"
            :class="{ active: mobile.active_el == 2 }"
          >
            Shipping info
          </div>
        </div>
        <div class="p-1 pt-3">
          <payment-card
            v-if="mobile.active_el == 0"
            :amount="amount"
            :pax="form.no_of_person"
          ></payment-card>

          <div v-if="mobile.active_el == 1">
            <h5 class="pl-1">Billing Information</h5>
            <div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group m-1">
                    <label for="name">Billing Name</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.billing_name"
                      name="billing_name"
                      required
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group m-1">
                    <label for="address">Billing Address</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.billing_address"
                      name="billing_address"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-4">
                  <div class="form-group m-1">
                    <label for="city">Billing City</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.billing_city"
                      name="billing_city"
                      required
                    />
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="form-group m-1">
                    <label for="state">Billing State</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.billing_state"
                      name="billing_state"
                      required
                    />
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group m-1">
                    <label for="billing_zip">Billing Zip Code</label>
                    <input
                      type="number"
                      class="form-control"
                      v-model="form.billing_zip"
                      name="billing_zip"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4">
                  <div class="form-group m-1">
                    <label for="country">Billing Country</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.billing_country"
                      name="billing_country"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group m-1">
                    <label for="phone_no">Phone Number</label>
                    <input
                      type="number"
                      class="form-control"
                      v-model="form.billing_tel"
                      name="billing_tel"
                      required
                    />
                  </div>
                  <p>
                    <small class="text-danger">{{ errors.billing_tel }}</small>
                  </p>
                </div>

                <div class="col-sm-6">
                  <div class="form-group m-1">
                    <label for="email">Billing Email</label>
                    <input
                      type="email"
                      class="form-control"
                      v-model="form.billing_email"
                      name="billing_email"
                      required
                    />
                  </div>
                  <p>
                    <small class="text-danger">{{
                      errors.billing_email
                    }}</small>
                  </p>
                </div>
                <div class="d-none">
                  <input type="text" v-model="form.user_id" name="user_id" />
                  <input
                    type="text"
                    v-model="form.travel_code"
                    name="travel_code"
                  />
                  <input type="text" v-model="form.tour_id" name="tour_id" />
                  <input
                    type="text"
                    v-model="form.school_id"
                    name="school_id"
                  />
                  <input
                    type="text"
                    v-model="form.base_price"
                    name="base_price"
                  />
                  <input
                    type="text"
                    v-model="form.no_of_person"
                    name="no_of_person"
                  />
                </div>
              </div>
            </div>
          </div>

          <div v-if="mobile.active_el == 2" class="min-height-90">
            <p class="mt-3 pl-1">
              <label for="mobile-checkbox"
                ><input
                  type="checkbox"
                  id="mobile-checkbox"
                  @click="toggleShipping"
                />
                <small
                  >My billing and shipping address are different</small
                ></label
              >
            </p>
            <div v-if="shipping_toggle">
              <h5 class="pl-1">Shipping Information</h5>
              <div>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group m-1">
                      <label for="name">Shipping Name</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.delivery_name"
                        name="delivery_name"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group m-1">
                      <label for="address">Shipping Address</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.delivery_address"
                        name="delivery_address"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-4">
                    <div class="form-group m-1">
                      <label for="city">Shipping City</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.delivery_city"
                        name="delivery_city"
                      />
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="form-group m-1">
                      <label for="state">Shipping State</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.delivery_state"
                        name="delivery_state"
                      />
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group m-1">
                      <label for="zipcode">Shipping Zip Code</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.delivery_zip"
                        name="delivery_zip"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="form-group m-1">
                      <label for="country">Shipping Country</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.delivery_country"
                        name="delivery_country"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group m-1">
                      <label for="phone_no">Phone Number</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.delivery_tel"
                        name="delivery_tel"
                      />
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="form-group m-1">
                      <label for="email">Shipping Email</label>
                      <input
                        type="email"
                        class="form-control"
                        v-model="form.delivery_email"
                        name="delivery_email"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          v-if="submit_button == false"
          @click="submitForm"
          type="button"
          class="btn btn-block submit-button btn-info p-3 font-weight-bold mt-3 border-radius-0"
        >
          Confirm & Pay
        </button>

        <button
          v-else
          type="submit"
          class="btn btn-block submit-button btn-info p-3 font-weight-bold mt-3 border-radius-0"
        >
          Confirm & Pay
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import PaymentCard from "@/front/components/form/payment/StudentPaymentCard.vue";
export default {
  components: {
    PaymentCard,
  },
  data() {
    return {
      shipping_toggle: false,
      mobile: {
        active_el: 0,
      },
      validated: false,
      submit_button: false,
      errors: {
        billing_email: "",
        billing_tel: "",
      },
      form: {
        // billing_customer_name: "",
        billing_name: "",
        billing_address: "",
        billing_city: "",
        billing_state: "",
        billing_zip: "",
        billing_country: "",
        billing_tel: "",
        billing_email: "",
        delivery_name: "",
        delivery_address: "",
        delivery_city: "",
        delivery_state: "",
        delivery_zipcode: "",
        delivery_country: "",
        delivery_tel: "",
        delivery_email: "",
        user_id: "",
        travel_code: "",
        tour_id: "",
        school_id: "",
        base_price: "",
        no_of_person: "",
      },
      amount: 0,
    };
  },
  watch: {
    "form.billing_name": function () {
      this.billingFormat();
    },
    "form.billing_address": function () {
      this.billingFormat();
    },
    "form.billing_city": function () {
      this.billingFormat();
    },
    "form.billing_state": function () {
      this.billingFormat();
    },
    "form.billing_zip": function () {
      this.billingFormat();
    },
    "form.billing_country": function () {
      this.billingFormat();
    },
    "form.billing_email": function () {
      this.validateEmail(this.form.billing_email);
      this.billingFormat();
    },
    "form.billing_tel": function () {
      this.validateTel(this.form.billing_tel);
      this.billingFormat();
    },
  },
  created() {
    if (this.$cookies.get("payment-data") == null) {
      this.$router.push("/");
    }
    var data = this.$cookies.get("payment-data");
    console.log(data);
    this.amount = parseInt(data.base_price);
    this.form.user_id = data.user_id;
    this.form.travel_code = data.travel_code;
    this.form.tour_id = data.tour_id;
    this.form.school_id = data.school_id;
    this.form.base_price = parseInt(data.base_price);
  },

  methods: {
    activate(nav_number) {
      this.mobile.active_el = nav_number;
    },
    toggleShipping() {
      this.shipping_toggle = !this.shipping_toggle;
    },
    submitForm() {
      if (
        this.form.billing_name.length < 1 ||
        this.form.billing_address.length < 1 ||
        this.form.billing_country.length < 1 ||
        this.form.billing_state.length < 1 ||
        this.form.billing_city.length < 1 ||
        this.form.billing_zip.length < 1 ||
        this.form.billing_tel.length < 1 ||
        this.form.billing_email.length < 1
      ) {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill Billing  fields",
        });
        return false;
      }
    },
    billingFormat() {
      if (
        this.form.billing_name.length < 1 ||
        this.form.billing_address.length < 1 ||
        this.form.billing_country.length < 1 ||
        this.form.billing_state.length < 1 ||
        this.form.billing_city.length < 1 ||
        this.form.billing_zip.length < 1 ||
        this.form.billing_tel.length < 1 ||
        this.form.billing_email.length < 1 ||
        this.errors.billing_email != "" ||
        this.errors.billing_tel != ""
      ) {
        this.submit_button = false;
        return false;
      } else {
        this.submit_button = true;
      }
    },
    shippingFormat() {
      if (this.shipping_toggle == true) {
        if (
          this.form.shipping_name.length < 1 ||
          this.form.shipping_address.length < 1 ||
          this.form.shipping_country.length < 1 ||
          this.form.shipping_state.length < 1 ||
          this.form.shipping_city.length < 1 ||
          this.form.shipping_zip.length < 1 ||
          this.form.shipping_tel.length < 1 ||
          this.form.shipping_email.length < 1 ||
          this.errors.billing_email != "" ||
          this.errors.billing_tel != ""
        ) {
          this.submit_button = false;
          return false;
        } else {
          this.submit_button = true;
        }
      }
    },
    validateEmail(email) {
      if (email != "") {
        var re = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,3}$/;
        let result = re.test(email);
        if (result == false) {
          this.errors.billing_email = "Please Enter Valid Email";
          return false;
        } else {
          this.errors.billing_email = "";
        }
      }
      this.billingFormat();
    },

    validateTel(tel) {
      if (tel != "") {
        var re = /^[789]\d{9}$/;
        let result = re.test(tel);
        if (result == false) {
          this.errors.billing_tel = "Please Enter Valid Phone number";
          return false;
        } else {
          this.errors.billing_tel = "";
        }
      }
      this.billingFormat();
    },
  },
};
</script>