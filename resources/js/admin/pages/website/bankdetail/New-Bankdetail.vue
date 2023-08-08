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
              <dropdown-filter class="mb-2" :itemList="banknames" @update:option="UpdateBank" />

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
              <dropdown-filter class="mb-2" :itemList="account_type" @update:option="updateAccountType" />

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
import DropdownFilter from "@/admin/components/form/DropdownFilter.vue";
export default {
  name: "NewBankDetail",
  components: {
    Form,
    "has-error": HasError,
    "back-button": BackButton,
    "submit-button": SubmitButton,
    "form-layout": FormLayout,
    "dropdown-filter": DropdownFilter,
  },
  data() {
    return {
      // Create a new form instance
      banknames: [],
      account_type : [
        {name:'Current Account',id:'Current Account'},
        {name:'Saving Account',id:'Saving Account'},
        {name:'Recurring Deposit Account',id:'Recurring Deposit Account'},
        {name:'Fixed Deposit Account',id:'Fixed Deposit Account'},
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
          this.$router.push(`/schoolbankdetails`);
          this.$toast.fire({
            icon: "success",
            title: "Bank Details Added successfully",
          });
        })
        .catch(() => {});
    },
    bankNameList() {
      axios.get("/api/banknames").then((res) => {
        if (res.data) {
          for (let i = 0; i < res.data.length; i++) {
            this.banknames.push({
              name: res.data[i].name,
              id: res.data[i].id,
            });
          }
        }
      });
    },
    UpdateBank(v){ this.form.bank_name = v.name },    
    updateAccountType(v){ this.form.account_type = v.name },
  },
};
</script>
