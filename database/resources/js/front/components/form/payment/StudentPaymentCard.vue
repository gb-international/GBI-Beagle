<template>
  <div class="payment-card-form">
    <div class="row">
      <div class="col-8">Basic Package Cost</div>
      <div class="col-4 text-right">
        <img src="/images/icons/rupee.png" />{{ amount }}
      </div>
    </div>
    <hr />

    <div class="row">
      <div class="col-8">GBI COUPON CODE</div>
      <div class="col-4 text-right"><img src="/images/icons/rupee.png" />0</div>
    </div>
    <div class="input-group mt-3 mb-3">
      <input type="text" class="form-control" placeholder="GBI Coupon Code" />
      <div class="input-group-append">
        <span class="input-group-text bg-info text-white link">Apply</span>
      </div>
    </div>
    <hr />
    <div class="row pt-2 pb-2">
      <div class="col-8">
        <p class="m-0" title="Internet charges and tax">
          Internet handeling fee
        </p>
      </div>
      <div class="col-4 text-right">{{ internet_fee }}</div>
    </div>
    <hr />
    <div class="row pt-2 pb-2 total">
      <div class="col-8">
        <p class="m-0 p-0 font-weight-bold">Grand Total</p>
        <small>(inclusive of all taxes)</small>
      </div>
      <div class="col-4 text-right">
        <img src="/images/icons/rupee.png" />{{ grand_total }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    amount: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      internet_charge: false,
      internet_fee: 0,
      grand_total: 0,
    };
  },
  created() {
    this.internet_fee = Math.ceil(((this.amount / 0.9646)*3.54) / 100);
    this.grand_total  = this.amount + this.internet_fee;
  }
};
</script>