<!-- This template helps us to create a new hotel it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function. -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="UpdateBookedusers()"
      >
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="schoolbankdetail_id">School Bank Detail</label>
              <select
                  class="form-control select-field"
                  v-model.lazy="form.schoolbankdetail_id"
              >
              <option value="" disabled>Select Bank </option>
              <option v-for="bank in banks" :value="bank.id" :key="bank.id">
                {{ bank.name }}
              </option>
              </select>
              <has-error :form="form" field="form.schoolbankdetail_id"></has-error>
            </div>
          </div>
          
          <div class="col-sm-4">
            <div class="form-group">
              <label for="payment_mode">Payment Mode</label>
                <select
                    class="form-control select-field"
                    v-model.lazy="form.payment_mode"
                >
                <option value="" disabled>Select Payment mode </option>
                  <option value="self">Self</option>
                </select>
                <has-error :form="form" field="form.payment_mode"></has-error>
            </div>
          </div>

          
          <div class="col-sm-4">
            <div class="form-group">
              <label for="payment_type">Payment type</label>
              <select
                    class="form-control select-field"
                    v-model.lazy="form.payment_type"
                >
                <option value="" disabled>Select Payment type </option>
                  <option value="cash">Cash</option>
                  <option value="cheque">Cheque</option>
                  <option value="net">Net</option>
                </select>
                <has-error :form="form" field="form.payment_type"></has-error>
            </div>
          </div>

          
          <div class="col-sm-4">
            <div class="form-group">
              <label for="ifsc_code">IFSC Code</label>
              <input
                type="text"
                class="form-control"
                v-model="form.ifsc_code"
                :class="{ 'is-invalid': form.errors.has('ifsc_code') }"
                placeholder="Enter ifsc_code"
              />
              <has-error :form="form" field="ifsc_code"></has-error>
            </div>
          </div>

          
          <div class="col-sm-4">
            <div class="form-group">
              <label for="cheque_number">Cheque Number</label>
              <input
                type="text"
                class="form-control"
                v-model="form.cheque_number"
                :class="{ 'is-invalid': form.errors.has('cheque_number') }"
                placeholder="Enter cheque_number"
              />
              <has-error :form="form" field="cheque_number"></has-error>
            </div>
          </div>
          
          <div class="col-sm-4">
            <div class="form-group">
              <label for="cheque_bank_name">Cheque Bank Name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.cheque_bank_name"
                :class="{ 'is-invalid': form.errors.has('cheque_bank_name') }"
                placeholder="Enter cheque_bank_name"
              />
              <has-error :form="form" field="cheque_bank_name"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="date_of_issue">Date Of Issue</label>
              <input
                type="date"
                class="form-control"
                v-model="form.date_of_issue"
                :class="{ 'is-invalid': form.errors.has('date_of_issue') }"
                placeholder="Enter date_of_issue"
              />
              <has-error :form="form" field="date_of_issue"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="added_by">Added By</label>
              <select
                    class="form-control select-field"
                    v-model.lazy="form.added_by"
                >
                <option value="" disabled>Added By </option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                </select>
                <has-error :form="form" field="form.added_by"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="amount">Amount</label>
              <input
                type="number"
                class="form-control"
                v-model="form.amount"
                :class="{ 'is-invalid': form.errors.has('amount') }"
                placeholder="Enter amount"
              />
              <has-error :form="form" field="amount"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="status">Status</label>
              <select
                    class="form-control select-field"
                    v-model.lazy="form.status"
                >
                <option value="" disabled>Payment Status </option>
                  <option value="success">Success</option>
                  <option value="peding">Pending</option>
                </select>
                <has-error :form="form" field="form.status"></has-error>
            </div>
          </div>
        </div>
        <form-buttons />
      </form>
    </template>
  </form-layout>
</template>
<script>
import { Form, HasError } from "vform";

import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import SubmitButton from "@/admin/components/buttons/SubmitButton.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import { mapState } from "vuex";
export default {
  name: "EditBookeduserPament",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "submit-button": SubmitButton,
    "form-layout": FormLayout,
  },
  data() {
    return {
      form: new Form({
        schoolbankdetail_id: "",
        payment_mode: "",
        payment_type: "",
        ifsc_code: "",
        cheque_number: "",
        cheque_bank_name: "",
        date_of_issue: "",
        added_by: "",
        amount: "",
        payment_data: "",
        status: "",
      }),
      banks:[],
    };
  },
  mounted() {
    this.getitems();
  },
  computed: {
    ...mapState(["editdata","post_get_items"]),
  },
  watch:{
    editdata:function(){
      this.form.fill(this.editdata);
      this.getSchoolBankDetail();
    }
  },
  methods: {
    getitems() {
      let id =  this.$route.params.id;
      this.$store.dispatch('getEditData','/bookedusers/'+id+'/edit');
    },
    
    getSchoolBankDetail() {
      let api = "/api/bookedusers/bankdetails/" + this.editdata.tour_code;
      axios.get(api).then((res) => {
        this.banks = res.data;
      });
    },
    UpdateBookedusers() {
      this.form.put(`/api/bookedusers/${this.$route.params.id}`)
        .then((res) => {
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated",
          });
        })
        .catch(() => {});
    },
    back() {
      this.$router.push("/tags");
    },
  },
};
</script> 