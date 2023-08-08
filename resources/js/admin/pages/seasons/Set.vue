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
            <div class="col-md-12">
                <div class="form-group">
                    <label for="current">Select Current Season</label>
                    <dropdown-filter class="mb-2" :itemList="season_list" @update:option="currentUpdate" v-model="form.current"/>
                    <div class="error" v-if="form.errors.has('current')">
                    <label class="danger text-danger">{{
                        form.errors.get("current")
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
      season_list: [],
      form: new Form({
        current: "",
      }),
      allCreated: false
    };
  },
  mixins:[Vue2EditorMixin],
  created() {
    this.SeasonData();
    this.SeasonListData();
  },
  methods: {
    
    SeasonData(){
        axios.get(`/api/current-season`).then((response) => {
        if (response.data) {
          this.form.current = response.data.current;
          this.allCreated = true;
        }
      });
    },

    SeasonListData() {
      axios.get(`/api/season`).then((response) => {
        if (response.data) {
          for(let i = 0;i<response.data.length;i++){
            this.season_list.push({
              id:response.data[i].name,
              name:response.data[i].name
            });
          }
        }
      });
    },

    currentUpdate(value){
      this.form.current = value.id;
    },
    
    updateSeason() {
      this.form
        .put(`/api/current-season/set`)
        .then((response) => {
          //this.$router.push("/list-seasons");
          this.$toast.fire({
            icon: "success",
            title: "Season Updated",
          });
        })
        .catch(() => {});
    }
  },
};
</script>
