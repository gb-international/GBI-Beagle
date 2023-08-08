<template>
  <!--************************************************
      Author:@Ajay
      ****************************************************-->

  <form
    role="form"
    enctype="multipart/form-data"
    @submit.prevent="updateUserData()"
  >
  <div class="d-flex justify-content-end">
    <button class="btn btn-info customButton backBtn" @click.prevent="$emit('close')">Back</button>
  </div>
   <!-- Update Fields -->
    <div class="row">
      <div class="col-sm-12">
        <div class="form-group">
          <label for="email">Email Id</label>
          <input
            type="email"
            class="form-control"
            v-model="form.email"
            :class="{ 'is-invalid': form.errors.has('email') }"
            placeholder="Enter Email"
          />
          <has-error :form="form" field="email"></has-error>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="form-group">
          <label for="phone_no">Mobile Number</label>
          <input
            type="number"
            class="form-control"
            v-model="form.phone_no"
            :class="{ 'is-invalid': form.errors.has('phone_no') }"
            placeholder="Enter New Password"
          />
          <has-error :form="form" field="phone_no"></has-error>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="form-group">
          <label for="confirm_password">Change Password</label>
          <input
            type="text"
            class="form-control"
            placeholder="**********"
            readonly
            @click="openPassModal"
            data-toggle="modal" 
            data-target="#passModal"
          />
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="passModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Update Password</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <pass-form />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Update button -->
    <div class="form-group text-center">
      <button type="submit" class="btn btn-primary profile_button">
          UPDATE
      </button>
    </div>
    <p class="text-success" v-if="message">{{ message }}</p>
  </form>
</template>
<script>
import ProfileEditMixin from "@/front/mixins/user/ProfileEditMixin";
import UpdatePassForm from '@/front/components/form/UpdatePassForm';

export default {
  name: "LoginDetailsForm",
  mixins: [ProfileEditMixin],
  components: {
        "pass-form": UpdatePassForm
    },
  methods: {
    openPassModal(){

    }
  }
};
</script>

<style scoped>
  .backBtn{
    display: none !important;
  }
@media only screen and (max-width: 824px) {
  .profile_button {
      padding: 11px 35px !important;
  }
  .backBtn{
    display: inline !important;
  }

}
</style>
