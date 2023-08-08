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
        @submit.prevent="updateGallery()"
      >
        <div class="row" v-if="form.title">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="category">Gallery Category</label>

              
              <dropdown-list class="mb-2" 
                :itemList="categories" 
                v-model="form.category" 
              />

              <has-error :form="form" field="category"></has-error>
            </div>
          </div>

          <div class="col-sm-8">
            <div class="form-group">
              <label for="category">Gallery Title</label>
              <input
                type="text"
                class="form-control"
                :options="options"
                v-model="form.title"
                placeholder="Select Itinerary"
              />
              <has-error :form="form" field="title"></has-error>
            </div>
          </div>

          <div class="col-sm-8">
            <div class="form-group">
              <label for="category">School</label>
              <dropdown-list class="mb-2" 
                :itemList="schools" 
                v-model="form.school_id" 
              />

              <has-error :form="form" field="school_id"></has-error>
            </div>
          </div>
        </div>

        <div class="row img-card-delete-icon">
          <div
            class="col-sm-4 position-relative"
            v-for="img in images"
            :key="img.id"
          >
            <div class="card">
              <div class="card-body">
                <img :src="`${img.path}`" class="w-100" />
              </div>
            </div>
            <span
              class="badge badge-danger position-absolute cursor-pointer"
              @click="deleteImage(img.id)"
              ><i class="far fa-trash-alt" aria-hidden="true"></i
            ></span>
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
import FormButton from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import DropdownList from "@/admin/components/form/DropdownList.vue";
export default {
  name: "EditGallery",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButton,
    "form-layout": FormLayout,
    "dropdown-list": DropdownList,
  },
  data() {
    return {
      options: [],
      schools: [],
      images: [],
      categories:[
        {name:"Domestic",id:"domestic"},
        {name:"International",id:"international"}
      ],
      form: new Form({
        category: "",
        title: "",
        school_id: "",
        images: [],
      }),
    };
  },

  mounted() {
    this.getGalleryList();
    this.getSchools();
  },
  methods: {
    getGalleryList() {
      axios
        .get(`/api/gallery/${this.$route.params.id}/edit`)
        .then((response) => {
          setTimeout(() => $("#example").DataTable(), 1000);
          this.form.fill(response.data);
          this.form.school_id = parseInt(response.data.school_id);
          this.form.images = [];
          this.images = response.data.images;
        });
    },

    getSchools() {
      axios.get("/api/school").then((res) => {
        for (var i = 0; i < res.data.length; i++) {
          this.schools.push({
            id: res.data[i].id,
            name: res.data[i].school_name,
          });
        }
      });
    },

    UpdateCategory(v){ this.form.category = v.id },    
    updateSchool(v){ this.form.school_id = v.id },

    updateGallery() {
      this.form
        .put(`/api/gallery/${this.$route.params.id}`)
        .then((response) => {
          this.getGalleryList();
          this.$swal.fire({
            icon: "success",
            title: "Successfully Updated",
          });
        })
        .catch(() => {});
    },
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

    deleteImage(id) {
      var data = { id: id };
      axios.post("/api/gallery-img-delete", data).then((response) => {
        this.getGalleryList();
      });
    },
    back() {
      this.$router.push("/gallery");
    },
  },
};
</script> 