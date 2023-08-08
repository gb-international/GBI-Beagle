<!-- 

This template helps us to create a new hotel it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="SendMsg()"
        style="margin: 21px;"
        v-if="!Sending"
      >

        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="it_name">Itinerary Name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.it_name"
                maxlength="30"
                @keyup="checkLen(form.it_name)"
                required
              />
              <has-error :form="form" field="it_name"></has-error>
            </div>
          </div>
        </div>

        <div class="row">

          <div class="col-sm-12">
            <div class="form-group">
              <label for="ph_no">Customer Mobile Numbers</label>
              <textarea
                type="text"
                class="form-control"
                placeholder="Mobile numbers"
                rows="3"
                v-model="form.ph_no"
                :class="{ 'is-invalid': form.errors.has('ph_no') }"
                required
              ></textarea>
              <has-error :form="form" field="ph_no"></has-error>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="start_date">Itinerary Start Date</label>
              <input
                type="date"
                class="form-control"
                placeholder="Enter start date"
                rows="5"
                min="today"
                v-model="form.start_date"
                :class="{ 'is-invalid': form.errors.has('start_date') }"
              />
              <has-error :form="form" field="start_date"></has-error>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="link">Itinerary PDF Link</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter PDF Link"
                rows="5"
                maxlength="30"
                v-model="form.link"
                @keyup="checkLen(form.link)"
                :class="{ 'is-invalid': form.errors.has('link') }"
              />
              <has-error :form="form" field="link"></has-error>
            </div>
          </div>

        </div>

        <SendLinkButton />
      </form>
    </template>
  </form-layout>
</template>
<script>
import { Form, HasError } from "vform";
import SendLinkButton from "@/admin/components/buttons/SendLinkButton.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import DropdownFilter from "@/admin/components/form/DropdownFilter.vue";
export default {
  name: "SendPaymentLink",
  components: {
    Form,
    "has-error": HasError,
    "SendLinkButton": SendLinkButton,
    "form-layout": FormLayout,
    "dropdown-filter": DropdownFilter,
  },
  data() {
    return {
      tour_list: [],
      itineraryList:[],
      itinerary:"",
      //Sending: false,
      form: new Form({
        ph_no: "",
        it_name: "",
        link: "",
        start_date: ""
      }),
    };
  },
  mounted() {
  },
  methods: {
    checkLen(val){ 
      if(val.length >= 30 ){
        this.$toast.fire({
                icon: "warning",
                title: "cannot exceed 30 characters",
              });
      }
    },
    SendMsg(){
      if(!this.form.ph_no  || !this.form.it_name  || !this.form.link || !this.form.start_date){
        this.$toast.fire({
                icon: "error",
                title: "Please fillup all the fields.",
              });
      }
      else{
         //this.Sending = true;
          this.form.ph_no = this.form.ph_no.replace(/ /g,'')
          this.form
            .post("/api/finalprogram/send")
            .then((res) => {
              //this.Sending = false;
            })
            .catch(() => {});
            //this.$router.push('/');
            this.$toast.fire({
                icon: "success",
                title: "Itinerary SMS Sent Successfully",
            });
      }
     
    },
  },
};
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

input[type=text] {
 background: white !important;
}
</style>
