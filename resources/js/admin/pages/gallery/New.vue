<!-- 
This template helps us to create a new Category it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="AddPost()"
      >
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="category">Gallery Category</label>
              <dropdown-filter class="mb-2" :itemList="categories" @update:option="UpdateCategory" />

              <has-error :form="form" field="category"></has-error>
            </div>
          </div>

          <div class="col-sm-8">
            <div class="form-group">
              <label for="title">Gallery Title</label>
              <input
                type="text"
                v-model="form.title"
                placeholder="Tour to Surat"
                class="form-control"
              />
              <has-error :form="form" field="title"></has-error>
            </div>
          </div>

          <div class="col-sm-8">
            <div class="form-group">
              <label for="category">School</label>

              <dropdown-filter class="mb-2" :itemList="schools" @update:option="updateSchool" />

              <has-error :form="form" field="school_id"></has-error>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="images">Select Multiple Images</label>
              <input
                type="file"
                multiple="multiple"
                class="form-control w-100"
                ref="attachments"
                @change="changePhoto"
              />
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
export default {
  name: "NewGallery",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    FormButtons,
    "dropdown-filter": DropdownFilter,
  },
  data() {
    return {
      options: [],
      categories:[
        {name:"Domestic",id:"domestic"},
        {name:"International",id:"international"}
      ],
      schools: [],
      form: new Form({
        category: "",
        title: "",
        school_id: "",
        images: [],
      }),
    };
  },
  mounted() {
    this.getSchools();
  },
  methods: {
    getSchools() {
      axios.get("/api/school").then((response) => {
        for (var i = 0; i < response.data.length; i++) {
          this.schools.push({
            name: response.data[i].school_name,
            id: response.data[i].id
          });
        }
      });
    },
    UpdateCategory(v){ this.form.category = v.id },    
    updateSchool(v){ this.form.school_id = v.id },

    changePhoto(event) {
      for (var i = 0; i < event.target.files.length; i++) {
        let file = event.target.files[i];
        let reader = new FileReader();
        reader.onload = (event) => {
          this.form.images.push({
            name: file.name,
            file: event.target.result,
          });
        };
        reader.readAsDataURL(file);
      }
    },

    AddPost() {
      this.form
        .post("/api/gallery")
        .then((response) => {
          this.form.reset();
          this.$router.push('/gallery');
          this.$toast.fire({
            icon: "success",
            title: "Gallery Added successfully",
          });
        })
        .catch(() => {});
    },
  },
};
</script>
