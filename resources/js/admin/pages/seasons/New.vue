<!-- 
This template helps us to create new seasons, it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="AddSeason()"
      >
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label for="name">Season Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Season Name"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
              />
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>
        
          <div class="col-sm-12">
            <div class="form-group">
              <label for="description">Description</label>
              <vue-editor
                v-model="form.description"
                :class="{ 'is-invalid': form.errors.has('description') }"
                :customModules="customModulesForEditor"
                :editorOptions="editorSettings"
                id="editor"
                useCustomImageHandler
                @image-added="handleImageAdded"
                @image-removed="handleImageRemoved"
              ></vue-editor>
              <has-error :form="form" field="description"></has-error>
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
  name: "NewSeason",
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
      form: new Form({
        name: "",
        description: "",
        date: "",
        time: "",
        photo: "",
        detail_photo: "",
        itinerary_id: ""
      }),
    };
  },

  mounted(){
    this.itineraryData();
  },
  methods: {

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
      //console.log(this.form)
      this.form.itinerary_id = value.id;
    },

    AddSeason() {
      var path = `/api/season`;
      this.form
        .post(path)
        .then((response) => {
          this.form.reset();
          this.$toast.fire({
            icon: "success",
            title: "Successfully Saved !!!",
          });
        this.$router.push(`/list-seasons`);
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }
        });
    },

    goBack() {
      this.$router.push(`/list-seasons`);
    },
  },
};
</script>