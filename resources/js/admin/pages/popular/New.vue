<!-- 
This template helps us to add popular itineraries, it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="AddPopular()"
      >
        <div class="row">
           <div class="col-md-12">
              <div class="form-group">
                <label for="itinerary_id">Select Itinerary</label>
                <dropdown-filter class="mb-2" :itemList="itinerary_list" @update:option="itineraryUpdate"/>
                <div class="error" v-if="form.errors.has('itinerary_id')">
                  <label class="danger text-danger">{{
                    form.errors.get("itinerary_id")
                  }}</label>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label for="season_id">Select Season</label>
                <dropdown-filter class="mb-2" :itemList="season_list" @update:option="seasonUpdate"/>
                <div class="error" v-if="form.errors.has('season_id')">
                  <label class="danger text-danger">{{
                    form.errors.get("season_id")
                  }}</label>
                </div>
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
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import DropdownFilter from "@/admin/components/form/DropdownFilter.vue";
import Vue2EditorMixin from '@/admin/mixins/Vue2EditorMixin';
export default {
  name: "NewPopular",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    "dropdown-filter": DropdownFilter,
  },
  mixins:[Vue2EditorMixin],
  data() {
    return {
      // Create a new form instance
      itinerary_list: [],
      season_list: [],
      form: new Form({
        season_id: "",
        itinerary_id: ""
      }),
    };
  },

  mounted(){
    this.itineraryData();
    this.SeasonListData();
  },
  methods: {
    SeasonListData() {
      axios.get(`/api/season`).then((response) => {
        if (response.data) {
          for(let i = 0;i<response.data.length;i++){
            this.season_list.push({
              id:response.data[i].id,
              name:response.data[i].name
            });
          }
        }
      });
    },

    itineraryData() {
      axios.get(`/api/itinerary`).then((res) => {
        if (res.data) {
          for(let i = 0;i<res.data.length;i++){
            this.itinerary_list.push({
              name:res.data[i].title + ` (${res.data[i].id})`,
              id:res.data[i].id
            });
          }
        }
      });
    },

    itineraryUpdate(value){
      this.form.itinerary_id = value.id;
    },

    seasonUpdate(value){
      this.form.season_id = value.id;
    },

    AddPopular() {
      var path = `/api/popular-itineraries`;
      this.form
        .post(path)
        .then((response) => {
          this.form.reset();
          this.$toast.fire({
            icon: "success",
            title: "Successfully Saved !!!",
          });
        this.$router.push(`/popular-list-itineraries`);
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }
        });
    },

    goBack() {
      this.$router.push(`/popular-list-itineraries`);
    },
  },
};
</script>