<template>
  <form-layout>
    <template #formdata>
      <form
        v-if="allCreated"
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="updateSeason()"
      >
        <div class="row">
          <div class="col-sm-12">
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
import Vue2EditorMixin from '@/admin/mixins/Vue2EditorMixin';
import DropdownFilter from "@/admin/components/form/DropdownList.vue";

export default {
  name: "EditSeason",
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
      form: new Form({
        name: "",
        description: "",
      }),
      allCreated: false
    };
  },
  mixins:[Vue2EditorMixin],
  created() {
    this.SeasonData();
  },
  methods: {
    SeasonData() {
      axios
        .get(`/api/season/${this.$route.params.id}/edit`)
        .then((response) => {
          this.form.fill(response.data);
          this.allCreated = true
        });
    },

    updateSeason() {
      this.form
        .put(`/api/season/${this.$route.params.id}`)
        .then((response) => {
          this.$router.push("/list-seasons");
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
