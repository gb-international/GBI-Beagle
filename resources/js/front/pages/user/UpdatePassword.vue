<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div class="container">
    <div id="UpdatePassword" class="grey-form">
      <div class="mb-20 mt-20">
        <div class="row justify-content-center pt-20">
          <div class="col-sm-5 p-20 tour-code-card">
            <h5 class="text-center pb-15">Update Your Password</h5>
            <form class="form" method="post" @submit.prevent="UpdatePassword()">
                <div class="form-group">
                  <label for="tour_code">Current Password</label>
                  <input type="password"
                    class="form-control"
                    placeholder="Enter Current Password"
                    v-model="form.current_password"
                    :class="{ 'is-invalid': form.errors.has('current_password') }"
                    required />
                    <has-error :form="form" field="current_password"></has-error>
                </div>
                <div class="form-group">
                  <label for="tour_code">New Password</label>
                  <input type="password"
                    class="form-control"
                    placeholder="Enter New Password"
                    v-model="form.new_password"
                    :class="{ 'is-invalid': form.errors.has('new_password') }"
                    required />
                    <has-error :form="form" field="new_password"></has-error>
                </div>
                
                <div class="form-group">
                  <label for="tour_code">Confirm Password</label>
                  <input type="password"
                    class="form-control"
                    placeholder="Re-Enter Password"
                    v-model="form.confirm_password"
                    :class="{ 'is-invalid': form.errors.has('confirm_password') }"
                    required />
                    <has-error :form="form" field="confirm_password"></has-error>
                </div>
                <p class="text-success" v-if="message">{{ message }}</p>
                <div class="text-center">
                  <button type="submit" class="btn profile_button">Update</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UpdatePasswordMixin from '@/front/mixins/user/UpdatePasswordMixin';
export default{
  name:"UpdatePassword",
  mixins:[UpdatePasswordMixin],

}
</script>
