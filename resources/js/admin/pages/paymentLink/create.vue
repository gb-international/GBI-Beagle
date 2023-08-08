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
        @submit.prevent="SendLink()"
        style="margin: 21px;"
        v-if="!Sending"
      >
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="tour_id">Tour Code</label>
              <dropdown-filter class="mb-2" :itemList="tour_list" @update:option="tourUpdate"/>
              <div class="error" v-if="form.errors.has('tour_id')">
                <label class="danger text-danger">{{
                  form.errors.get("tour_id")
                }}</label>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="itinerary">Itinerary</label>
              <input
                type="text"
                class="form-control"
                v-model="itinerary"
                readonly
              />
              <has-error :form="form" field="itinerary"></has-error>
            </div>
          </div>
        </div>

        <div class="row">
         <div class="col-sm-4">
            <div class="form-group">
              <label for="amount">Amount</label>
              <input
                type="number"
                class="form-control"
                placeholder="Enter Amount"
                v-model="form.amount"
              />
              <has-error :form="form" field="amount"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="email">Customer Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter Email"
                rows="5"
                v-model="form.email"
                :class="{ 'is-invalid': form.errors.has('email') }"
              />
              <has-error :form="form" field="email"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="ph_no">Customer Mobile</label>
              <input
                type="number"
                class="form-control"
                placeholder="Mobile number"
                rows="5"
                v-model="form.ph_no"
                :class="{ 'is-invalid': form.errors.has('ph_no') }"
              />
              <has-error :form="form" field="ph_no"></has-error>
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
        tour_id: "",
        ph_no: "",
        amount: "",
        email: "",
      }),
    };
  },
  mounted() {
    this.tourData();
  },
  methods: {
    tourData() {
      axios.get(`/api/tour`).then((res) => {
        if (res.data.data) {
          for(let i = 0;i<res.data.data.length;i++){
            this.tour_list.push({
              name:res.data.data[i].tour_id,
              id:res.data.data[i].id,
              itineraryId: res.data.data[i].itinerary_id,
            });
          }
        }
      });
    },

    getItinerary(val) {
      axios.get("/api/get-tour/"+val).then(response => {
          this.itinerary = response.data.title
        });
    },

    SendLink(){
      if(!this.form.tour_id  || !this.form.email  || !this.form.amount){
        this.$toast.fire({
                icon: "error",
                title: "Please fillup all the fields.",
              });
      }
      else if(String(this.form.ph_no).length !== 10){
        this.$toast.fire({
                icon: "error",
                title: "Please provide a valid phone number.",
              });
      }
      else{
         //this.Sending = true;
          this.form
            .post("/api/payment-link/send")
            .then((res) => {
              //this.Sending = false;
            })
            .catch(() => {});
            //this.$router.push('/');
            this.$toast.fire({
                icon: "success",
                title: "Payment Link Sent successfully",
            });
      }
     
    },
    tourUpdate(value){
      //console.log(this.form)
      this.form.tour_id = value.id;
      this.getItinerary(value.id);
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
</style>
