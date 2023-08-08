<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="updateTourtype()"
      >
        <div class="row">
          <div class="col-sm-8">
            <div class="form-group">
              <label for="name">tourtype Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter tourtype Name"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
              />
              <has-error :form="form" field="name"></has-error>
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
export default {
  name: "EditTourType",
  components: { 
    Form,
   "has-error": HasError,
   "form-buttons": FormButtons,
    "form-layout": FormLayout,
  },
  data() {
    return {
      form: new Form({
        name: "",
      }),
    };
  },
  created() {
    this.TourtypeData();
  },
  methods: {
    TourtypeData() {
      axios
        .get(`/api/tourtype/${this.$route.params.id}/edit`)
        .then((response) => {
          this.form.fill(response.data);
        });
    },
    updateTourtype() {
      this.form
        .put(`/api/tourtype/${this.$route.params.id}`)
        .then((response) => {
          this.$router.push("/tourtype");
          this.$toast.fire({
            icon: "success",
            title: "Tourtype Updated successfully",
          });
        })
        .catch(() => {});
    }
  },
};
</script>
