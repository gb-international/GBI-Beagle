<template>
  <!--************************************************
      Author:@Ajay
      ****************************************************-->

  <form
    role="form"
    enctype="multipart/form-data"
    @submit.prevent="UpdatePassword()"
  >
   <!-- Update Fields -->
    <div class="row">
      <div class="col-sm-12">
        <div class="form-group">
          <label for="current_password">Current Password</label>
          <input
            type="text"
            class="form-control"
            v-model="form.current_password"
            :class="{ 'is-invalid': form.errors.has('current_password') }"
            placeholder="Enter Current Password"
          />
          <has-error :form="form" field="current_password"></has-error>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="form-group">
          <label for="new_password">New Password</label>
          <input
            type="text"
            class="form-control"
            v-model="form.new_password"
            :class="{ 'is-invalid': form.errors.has('new_password') }"
            placeholder="Enter New Password"
          />
          <has-error :form="form" field="new_password"></has-error>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="form-group">
          <label for="confirm_password">Confirm Password</label>
          <input
            type="text"
            class="form-control"
            v-model="form.confirm_password"
            :class="{ 'is-invalid': form.errors.has('confirm_password') }"
            placeholder="Confirm Password"
          />
          <has-error :form="form" field="confirm_password"></has-error>
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
import UpdatePasswordMixin from "@/front/mixins/user/UpdatePasswordMixin";
export default {
  name: "UpdatePassForm",
  mixins: [UpdatePasswordMixin],
};
</script>
