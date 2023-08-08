<!-- 
This template helps us to create a new Category it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
<section>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="AddCategory()"
      >
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                type="text"
                class="form-control"
                v-model="form.title"
                :class="{ 'is-invalid': form.errors.has('title') }"
                placeholder="Enter title"
              />
              <has-error :form="form" field="title"></has-error>
            </div>
          </div>
        </div>
        <form-buttons />
      </form>
    </template>
  </form-layout>
</section>
</template>

<script>
import { Form, HasError } from "vform";
import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
export default {
  name: "NewTag",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
  },
  data() {
    return {
      form: new Form({
        title: "",
      }),
      loading: false
    };
  },
  methods: {
    AddCategory() {
      if(this.form.title == ''){
          this.$toast.fire({
            icon: "warning",
            title: "Please enter the title.",
          });
        return false
      }
      this.loading = true
      this.form
        .post("/api/tags")
        .then((response) => {
          this.form.reset();
          this.$toast.fire({
            icon: "success",
            title: "Tag Added successfully",
          });
          this.loading = false
        })
        .catch(() => {});
    },
  },
};
</script>