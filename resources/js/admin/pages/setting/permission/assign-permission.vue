<!-- 
Creator: @Manas
This template helps us to add new permissions to the GBI Members

 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        enctype="multipart/form-data"
        @submit.prevent="addPermission()"
      >
        <div class="row">
          <div class="col-sm-10">
            <div class="form-group">
              <label for="role_name">Select Permission Category</label>
              <dropdown-filter class="mb-2" 
                :itemList="permissions" 
                @update:option="updatePerms" 
              />
            </div>
          </div>

          
           <div class="col-sm-4"
           >
            <label class="text-capitalize permission-label">Create</label>
            <b-form-checkbox  
                   name="check-button" 
                   size="lg"
                   v-model="form.create" 
                   switch>
            </b-form-checkbox>
           </div>
           <div class="col-sm-4"
           >
            <label class="text-capitalize permission-label">Edit</label>
            <b-form-checkbox  
                   name="check-button" 
                   size="lg"
                    v-model="form.edit" 
                   switch>
            </b-form-checkbox>
           </div>
           <div class="col-sm-4" 
           v-if="userRole == 1"
           >
            <label class="text-capitalize permission-label">Delete</label>
            <b-form-checkbox  
                   name="check-button" 
                   size="lg"
                    v-model="form.delete" 
                   switch>
            </b-form-checkbox>
           </div>
           <div class="col-sm-4"
           >
            <label class="text-capitalize permission-label">Publish</label>
            <b-form-checkbox  
                   name="check-button" 
                   size="lg"
                    v-model="form.publish" 
                   switch>
            </b-form-checkbox>
           </div>
           <div class="col-sm-4"
           >
            <label class="text-capitalize permission-label">View</label>
            <b-form-checkbox  
                   name="check-button" 
                   size="lg"
                    v-model="form.view" 
                   switch>
            </b-form-checkbox>
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
  name: "NewMember",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
     "dropdown-filter": DropdownFilter,
  },
  data() {
    return {
      role_list: [],
      permissions: [],
      //userDetails: {},
      userRole: window.userRole,
      permDetails: {},
      form: new Form({
        permission_id: '',
        user_roles_id: this.$route.params.id,
        user_id: '',
        permission_name: '',
        create: false,
        edit: false,
        delete: false,
        publish: false,
        view: false,
      }),
    };
  },

  created() {
    this.getPermissions(window.userRole);
    //this.getRoles();
    //this.getDepartment();
    //this.getPerms();
    //console.log(window.userRole)
  },

  methods: {

    /*getPerms(perm_id){
      axios.get("/api/sub-perms/"+perm_id+"/"+this.$route.params.id).then((res) => {
        if (res) {
          for(let i = 0;i<res.data.length;i++){
            this.permission_list.push({
              name:res.data[i].name,
              id:res.data[i].id,
              status: false
            });
          }
        }
      });
    },*/
    /*getUserDetails(){
      axios.get("/api/user/details").then((res) => {
         this.userDetails = res.data;
         /*
        });
    },*/

    getPermDetails(permId){
      axios.get("/api/check/permission/"+permId+"/"+this.$route.params.id).then((res) => {
         this.form.permission_id = permId;
         this.form.permDetails = res.data;
         this.form.create = res.data.create;
         this.form.edit = res.data.edit;
         this.form.delete = res.data.delete;
         this.form.publish = res.data.publish;
         this.form.view = res.data.view;
         this.form.user_id = res.data.user_id;
         this.form.permission_name = res.data.permission_name;
         //console.log(this.permDetails);
         //this.getPermissions(this.userDetails.user_role);
      });
    },

    getPermissions(role_id){
      if(role_id == 1){
          axios.get("/api/permission").then((res) => {
          if (res) {
            for(let i = 0;i<res.data.length;i++){
              this.permissions.push({
                name:res.data[i].name,
                id:res.data[i].id
              });
            }
          }
        });
      } else {
        axios.get("/api/user-permissions/"+window.userId).then((res) => {
          if (res) {
            console.log(res.data.data)
            for(let i = 0;i<res.data.data.length;i++){
              this.permissions.push({
                name:res.data.data[i].permission,
                id:res.data.data[i].permission_id
              });
            }
          }
        });
      }
      
    },

    //updateRole(v){ this.form.role_name = v.id },
    updatePerms(v){ this.getPermDetails(v.id) },

    addPermission() {

      if(!this.form.permission_id || !this.form.user_roles_id){
        this.$toast.fire({
            icon: "warning",
            title: "Please add a permission.",
          });
        return false;
      }
     /* else if(this.form.view == false || this.form.view == null){
        this.$toast.fire({
            icon: "warning",
            title: "Must enable the view permission.",
          });
        return false;
      } */

      if(this.form.create){
        this.form.create = this.form.create.toString();
      } else{
        this.form.create = 'false';
      }
      if(this.form.edit){
        this.form.edit = this.form.edit.toString();
      } else{
        this.form.edit = 'false';
      }
      if(this.form.delete){
        this.form.delete = this.form.delete.toString();
      } else{
        this.form.delete = 'false';
      }
      if(this.form.publish){
        this.form.publish = this.form.publish.toString();
      } else{
        this.form.publish = 'false';
      }
      if(this.form.view){
        this.form.view = this.form.view.toString();
      } else{
        this.form.view = 'false';
      }
      console.log(this.form)
        this.form
        .post("/api/permission/assign")
        .then((res) => {
          //this.$router.push(`/list-member`);
          this.$toast.fire({
            icon: "success",
            title: "Permission Added Successfully",
          });
        })
        .catch(() => {});
    },
  },
};
</script>
