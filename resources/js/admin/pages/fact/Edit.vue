<!-- 
This template helps us to edit events it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
 <template>
  <form-layout>
    <template #formdata>
        <section class="formSection">
      <div class="LoaderDiv" v-show="loading">
        <img class="loaderLogo" src="/loader/logo_gif.gif">
        <p class="loadText">Loading..</p>
      </div>
      <form role="form" @submit.prevent="updateFact()"
        :style="!loading ? '' : 'opacity: 0.5' "
        >
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.name"
                placeholder="Enter name"
              />
            </div>
          </div>

          <div class="col-sm-12">
            <div class="form-group">
              <label for="description">Description</label>
              <vue-editor
                v-model="form.description"
                :customModules="customModulesForEditor"
                :editorOptions="editorSettings"
                id="editor"
                useCustomImageHandler
                @image-added="handleImageAdded"
                @image-removed="handleImageRemoved"
              ></vue-editor>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              
              <label for="status">Status</label>
              <select class="form-control customSelect" v-model="form.status">
                <option v-for="(data, id) in status_list" :value="id"  :key="id">{{data.name}}</option>
              </select>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
                <label for="countries">Country</label>
                <dropdown-list class="mb-2" 
                :itemList="country_list" 
                    @update:option="UpdateCountry"
                     v-model="form.country_id"/>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
                <label for="state_id">State</label>
                <dropdown-list class="mb-2" 
                :itemList="state_list" @update:option="UpdateState" 
                v-model="form.state_id" />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
                <label for="city_id">City</label>
                <dropdown-list class="mb-2" 
                :itemList="city_list" @update:option="UpdateCity" 
                v-model="form.city_id"/>
            </div>
          </div>
        </div>
        <form-buttons />
      </form>
        </section>
    </template>
</form-layout>
</template>

<script>

import { Form, HasError } from "vform";
import Vue2EditorMixin from '@/admin/mixins/Vue2EditorMixin';
import FormButtons from '@/admin/components/buttons/FormButtons.vue';
import FormLayout from '@/admin/components/layout/FormLayout.vue';
import StatusDropdown from "@/admin/components/form/StatusDropdown.vue";
import DropdownList from "@/admin/components/form/DropdownList.vue";

export default {
  name: "EditFact",
  components: {
    Form,
    "has-error": HasError,
    "dropdown-list": DropdownList,
    'form-buttons':FormButtons,
    'form-layout':FormLayout,
    "status-dd": StatusDropdown,
  },
  mixins:[Vue2EditorMixin],
  data() {
    return {
      country_list: [],
      state_list: [],
      city_list: [],
      form_collection:'',
      status_list:[
        {name:"Draft",id:0},
        {name:"Published",id:1}
      ],
      form: new Form({
        name:"",
        country_id:"",
        status:"",
        state_id:"",
        city_id:"",
        description:"",
      }),
      loading: false,
    };
  },
  watch: {
    "form.country_id": function () {
      this.stateData(this.form.country_id);
    },
    "form.state_id": function () {
      this.cityData(this.form.state_id);
    },
  },
  mounted(){
     this.getcountries();
     this.editFact();
    },
    methods: {
      UpdateCountry(v){ this.form.country_id = v.id },
      UpdateState(state){ this.form.state_id = state.id },
      UpdateCity(city){ this.form.city_id = city.id },    
      updateStatus(status){ this.form.status = status.id }, 
      editFact() {
        axios.get(`/api/fact/fact/${this.$route.params.id}/edit`).then((response) => {
          setTimeout(() => $("#example").DataTable(), 1000);
          this.form.fill(response.data);
      });
    },   
    getcountries() {
      axios.get("/api/all-country").then((res) => {
        if (res) {
          this.country_list = res.data
        }
      });
    },
    stateData(id) {
      axios.get("/api/all-state-per-country/" + id).then((res) => {
        if (res) {
          this.state_list = res.data; 
        }
      });
    },
    cityData(id) {
      axios.get("/api/all-city-per-state/" + id).then((res) => {
        if (res) {
          this.city_list = res.data; 
        }
      });
    },

    /*emitSock(){
      //console.log('Emit')
      this.socket.emit('sendToServer', 'NA');
    },*/
    
    
    updateFact() {
      this.form_collection = new Form({name: this.form.name, description: this.form.description, status:this.form.status});
      console.log(this.form.city_id)
      
      if(this.form.country_id == null){
        delete this.form_collection.country_id;
      }
      else{
        this.form_collection.country_id = this.form.country_id;
      }
      
      if(this.form.state_id == null){
        delete this.form_collection.state_id;
      }
      else{
        this.form_collection.state_id = this.form.state_id;
      }
      
      if(this.form.city_id ==null){
        delete this.form_collection.city_id;
      }
      else{
        this.form_collection.city_id = this.form.city_id;
      }

      this.form_collection.put(`/api/fact/fact/${this.$route.params.id}`)
      .then((res) => {
          if(res.data.status == 422){
            if(res.data.errors.name){
              this.$toast.fire({
                  icon: "error",
                  title: res.data.errors.name[0],
                });        
              return false;
            }
            if(res.data.errors.description){
              this.$toast.fire({
                  icon: "error",
                  title: res.data.errors.description[0],
                });        
              return false;
            }
            if(res.data.errors.status){
              this.$toast.fire({
                  icon: "error",
                  title: res.data.errors.status[0],
                });        
              return false;
            }
            if(res.data.errors.country_id){
              this.$toast.fire({
                  icon: "error",
                  title: res.data.errors.country_id[0],
                });        
              return false;
            }
            if(res.data.errors.state_id){
              this.$toast.fire({
                  icon: "error",
                  title: res.data.errors.state_id[0],
                });        
              return false;
            }
            if(res.data.errors.city_id){
              this.$toast.fire({
                  icon: "error",
                  title: res.data.errors.city_id[0],
                });        
              return false;
            }
          }
          this.$router.push(`/fact/`);
          this.$toast.fire({
            title: res.data,
          });
        })
        .catch((error) => {
        });
    },
  },
};
</script>

<style scoped>
  .warn-error {
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #dc3545;
  }
</style>
