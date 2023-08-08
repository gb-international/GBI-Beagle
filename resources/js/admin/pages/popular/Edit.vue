<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        v-if="allCreated"
        enctype="multipart/form-data"
        @submit.prevent="UpdatePopular()"
      >
        <div class="row">
           <div class="col-md-12">
              <div class="form-group">
                <label for="itinerary_id">Select Itinerary</label>
                <dropdown-filter class="mb-2" :itemList="itinerary_list" @update:option="itineraryUpdate" v-model="form.itinerary_id"/>
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
                <dropdown-filter class="mb-2" :itemList="season_list" @update:option="seasonUpdate" v-model="form.season_id"/>
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
import Vue2EditorMixin from '@/admin/mixins/Vue2EditorMixin';
import DropdownFilter from "@/admin/components/form/DropdownList.vue";

export default {
  name: "EditPopular",
  components: { 
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    "dropdown-filter": DropdownFilter,
  },
  data() {
    return {
      itinerary_list: [],
      season_list: [],
      form: new Form({
        season_id: "",
        itinerary_id: ""
      }),
      allCreated: false
    };
  },
  mixins:[Vue2EditorMixin],
  created() {
    this.itineraryData();
    this.PopularData();
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
    PopularData() {
      axios
        .get(`/api/popular-itineraries/${this.$route.params.id}/edit`)
        .then((response) => {
          this.form.fill(response.data);
          this.allCreated = true
        });
    },

    itineraryData() {
      axios.get(`/api/itinerary`).then((response) => {
        if (response.data) {
          for(let i = 0;i<response.data.length;i++){
            this.itinerary_list.push({
              name:response.data[i].title,
              id:response.data[i].id
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
    UpdatePopular() {
      this.form
        .put(`/api/popular-itineraries/${this.$route.params.id}`)
        .then((response) => {
          this.$router.push("/popular-list-itineraries");
          this.$toast.fire({
            icon: "success",
            title: "Updated successfully",
          });
        })
        .catch(() => {});
    }
  },
};
</script>
