<!-- 
This template helps us to create a new Escort it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="addEscort()"
      >
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                name="name"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
                placeholder="Enter Name"
              />
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="bank_name">Bank Name</label>
              <select
                class="form-control select-field"
                v-model="form.bank_name"
                :class="{ 'is-invalid': form.errors.has('bank_name') }"
              >
              <option value="" disabled hidden>Select Bank</option>
                <option
                  v-for="bank in banknames"
                  :value="bank.name"
                  :key="bank.id"
                >
                  {{ bank.name }}
                </option>
              </select>
              <has-error :form="form" field="bank_name"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="account_number">Account Number</label>
              <input
                type="number"
                class="form-control"
                v-model="form.account_number"
                :class="{ 'is-invalid': form.errors.has('account_number') }"
                placeholder="Enter Account Number"
                name="account_number"
              />
              <has-error :form="form" field="account_number"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="account_type">Account Type</label>
              <select
                class="form-control select-field"
                v-model="form.account_type"
                :class="{ 'is-invalid': form.errors.has('account_type') }"
              >
              <option value="" disabled hidden>Select Account Type</option>
                <option v-for="type in account_type" :value="type" :key="type">
                  {{ type }}
                </option>
              </select>
              <has-error :form="form" field="account_type"></has-error>
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
                placeholder="Enter IFSC Code"
                name="ifsc_code"
              />
              <has-error :form="form" field="ifsc_code"></has-error>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-4">
            <back-button url="/schoolbankdetails"></back-button>
          </div>
          <div class="col-sm-4">
            <div class="form-group text-center">
              <submit-button />
            </div>
          </div>
          <div class="col-sm-2"></div>
        </div>
      </form>
    </template>
  </form-layout>
</template>

<script>
import { Form, HasError } from "vform";
import BackButton from "@/admin/components/buttons/BackButton.vue";
import SubmitButton from "@/admin/components/buttons/SubmitButton.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
export default {
  name: "New",
  components: {
    Form,
    "has-error": HasError,
    "back-button": BackButton,
    "submit-button": SubmitButton,
    "form-layout": FormLayout,
  },
  data() {
    return {
      // Create a new form instance
      banknames: [],
      account_type: [
        "Current Account",
        "Saving Account",
        "Recurring Deposit Account",
        "Fixed Deposit Account",
      ],
      form: new Form({
        name: "",
        bank_name: "",
        account_number: "",
        account_type: "",
        ifsc_code: "",
      }),
    };
  },
  mounted() {
    this.bankNameList();
  },
  methods: {
    addEscort() {
      this.form
        .post("/api/schoolbankdetails")
        .then((response) => {
          this.$router.push(`/bankdetail`);
          this.$toast.fire({
            icon: "success",
            title: "Escort Added successfully",
          });
        })
        .catch(() => {});
    },
    bankNameList() {
      axios.get("/api/banknames").then((response) => {
        this.banknames = response.data;
      });
    },
  },
};
</script>
