<template>
  <div class="container">
    <div class="row pt-4">
      <div class="col-sm-4">
        <label for="payment_mode">Payment Mode</label>
        <select class="form-control">
          <option value="cheque">Cheque</option>
          <option value="cash">cash</option>
          <option value="netbanking">Net Banking</option>
        </select>
      </div>

      <div class="col-sm-4">
        <label for="total_tour_price">Total Tour Price</label>
        <input
          type="number"
          class="form-control"
          placeholder="Enter amount to be paid .."
        />
      </div>

      <div class="col-sm-4">
        <label for="collect_amount">Collect Amount</label>
        <input
          type="number"
          class="form-control"
          placeholder="Enter Received Amount from user"
        />
      </div>

      <div class="col-sm-4">
        <label for="total_tour_price">Payment Status</label>
        <select class="form-control">
          <option value="pending">Pending</option>
          <option value="success">Paid</option>
        </select>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-">
        <button
          @click="submitForm()"
          type="button"
          class="btn btn-primary itrn_add_btn back_btn"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"CollectPayment",
  data() {
    return {};
  },
  beforeMount() {
    this.CheckPayment();
  },
  methods: {
    CheckPayment() {
      axios
        .post("/api/createpayment", { id: this.$route.params.id })
        .then((response) => {
          console.log(response);
        });
    },
    submitForm() {
      console.log("hi");
    },
  },
};
</script>