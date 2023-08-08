<template>
	<form
          role="form"
          enctype="multipart/form-data"
          @submit.prevent="updateUserData()"
        >
        <div class="d-flex justify-content-end">
          <button class="btn btn-info customButton backBtn" @click.prevent="$emit('close')">Back</button>
        </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.name"
                  :class="{ 'is-invalid': form.errors.has('name') }"
                  placeholder="Enter Name"
                />
                <has-error :form="form" field="name"></has-error>
              </div>
            </div>
             <div class="col-sm-6">
              <div class="form-group">
                <div>
                  <label>Gender</label>
                  <br />
                  <select class="form-control" v-model="form.gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div class="error" v-if="form.errors.has('gender')">
                  <lable class="danger text-danger">{{
                    form.errors.get("gender")
                  }}</lable>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <div>
                  <label>User profession</label>
                  <br />
                  <select class="form-control" v-model="form.user_profession">
                    <option value="student">Student</option>
                    <option value="teacher">Teacher/Principal/Dean</option>
                    <option value="corporate">Corporate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div class="error" v-if="form.errors.has('user_profession')">
                  <lable class="danger text-danger">{{
                    form.errors.get("user_profession")
                  }}</lable>
                </div>
              </div>
            </div>

            <div class="col-sm-12">
              <div class="form-group">
                <label for="name">Father's Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.father_name"
                  :class="{ 'is-invalid': form.errors.has('father_name') }"
                  placeholder="Enter Name"
                />
                <has-error :form="form" field="father_name"></has-error>
              </div>
            </div>

            <div class="col-sm-12">
              <div class="form-group">
                <label for="name">Mother's Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.mother_name"
                  :class="{ 'is-invalid': form.errors.has('mother_name') }"
                  placeholder="Enter mother Name"
                />
                <has-error :form="form" field="mother_name"></has-error>
              </div>
            </div>

            <div class="col-sm-12">
              <div class="">
                <label for="phone_no">DOB</label>
                <input
                  type="date"
                  class="form-control"
                  v-model="form.dob"
                  :class="{ 'is-invalid': form.errors.has('dob') }"
                  placeholder="Enter DOB"
                />
                <has-error :form="form" field="dob"></has-error>
              </div>
            </div>

            <div class="col-sm-12 pt-3">
              <div class="form-group">
                <label for="address">Address</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.address"
                  :class="{ 'is-invalid': form.errors.has('address') }"
                  placeholder="Enter Address"
                />
                <has-error :form="form" field="address"></has-error>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="phone_no">City</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.city"
                  :class="{ 'is-invalid': form.errors.has('city') }"
                  placeholder="Enter City"
                />
                <has-error :form="form" field="city"></has-error>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="form-group">
                <label for="phone_no">State</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.state"
                  :class="{ 'is-invalid': form.errors.has('state') }"
                  placeholder="Enter state"
                />
                <has-error :form="form" field="state"></has-error>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="form-group">
                <label for="country">Country</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.country"
                  :class="{ 'is-invalid': form.errors.has('country') }"
                  placeholder="Enter country"
                />
                <has-error :form="form" field="country"></has-error>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="phone_no">Zip Code</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.zip_code"
                  :class="{ 'is-invalid': form.errors.has('zip_code') }"
                  placeholder="Enter zip_code"
                />
                <has-error :form="form" field="zip_code"></has-error>
              </div>
            </div>

           <!-- <div class="col-sm-12">
              <div class="form-group pt-1">
                <div class="form-check pt-3">
                  <input type="checkbox" class="form-check-input" id="subscribe" v-model="form.subscribe" :value="form.subscribe">
                  <label class="form-check-label pt-3" for="subscribe"> GBI Newsletter</label>
                </div>
                <has-error :form="form" field="subscribe"></has-error>
              </div>
            </div> -->
          </div>

          <div class="form-group text-center">
            <button type="submit" class="btn btn-primary profile_button">
              UPDATE
            </button>
          </div>
        </form>
</template>

<script>
import ProfileEditMixin from '@/front/mixins/user/ProfileEditMixin';

export default {
  name:"ProfileForm",
  mixins:[ProfileEditMixin],
  data(){
    return{

    }
  }
}
</script>

<style scoped>
.sideBarStg{
  border-top: 1px solid grey; 
  border-right: 1px solid grey;
}
.container {
    width: 125%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
select{
  border: 1px solid #ced4da !important;
}
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