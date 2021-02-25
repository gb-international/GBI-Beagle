<template>
  <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div id="user_edit_form" class="grey-form">
    <div class="text-center">
      <div class="avatar-upload user_edit_image">
        <form role="form" enctype="multipart/form-data">
          <div class="avatar-edit">
            <input
              type="file"
              id="imageUpload"
              accept=".png, .jpg, .jpeg"
              @change="onChange"
            />
            <label for="imageUpload"
              ><img src="/images/icons/edit.png" class="icon-width"
            /></label>
          </div>
          <div class="avatar-preview">
            <div id="imagePreview" style="background-image: url()">
              <img
                v-if="image"
                :src="'/uploadimage/' + image"
                loading="lazy"
                class="img"
              />
              <img
                v-else
                :src="'/uploadimage/' + image"
                loading="lazy"
                class="img"
                alt="user profile"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- user Edit form -->
    <div class="container">
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="updateUserData()"
      >
        <div class="row">
          <div class="col-sm-4">
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
          <div class="col-sm-4">
            <div class="form-group">
              <label for="genderId">Gender</label>
              <br />
              <!-- <br /> -->
              <div class="mt-2">
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="maleId"
                    value="male"
                    v-model="form.gender"
                  />
                  <label class="custom-control-label" for="maleId">Male</label>
                </div>

                <!-- Default inline 2-->
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    class="custom-control-input"
                    value="female"
                    id="femaleId"
                    v-model="form.gender"
                  />
                  <label class="custom-control-label" for="femaleId"
                    >Female</label
                  >
                </div>
              </div>
              <div class="error" v-if="form.errors.has('gender')">
                <lable class="danger text-danger">{{
                  form.errors.get("gender")
                }}</lable>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <!-- Radio buttons -->
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

          <div class="col-sm-4" v-if="school_field">
            <div class="form-group">
              <label>School name</label>
              <select class="form-control" v-model="form.school_id">
                <option
                  v-for="school in school_list"
                  :value="school.id"
                  :key="school.id"
                >
                  {{ school.school_name }}
                </option>
              </select>
              <has-error :form="form" field="school_id"></has-error>
            </div>
          </div>

          <div class="col-sm-4" v-if="namefield">
            <div class="form-group">
              <label>{{ label_name }} Name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.profession_name"
              />
            </div>
          </div>

          <div class="col-sm-4" v-if="addressfield">
            <div class="form-group">
              <label>Address</label>
              <input
                type="text"
                class="form-control"
                v-model="form.profession_address"
              />
            </div>
          </div>

          <div class="col-sm-4" v-if="form.institution_code">
            <div class="form-group">
              <label>Code</label>
              <input
                type="text"
                class="form-control"
                v-model="form.institution_code"
              />
            </div>
          </div>

          <div class="col-sm-4">
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

          <div class="col-sm-4">
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

          <div class="col-sm-4">
            <div class="form-group">
              <label for="email">Email ID</label>
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
          <div class="col-sm-4">
            <div class="form-group">
              <label for="phone_no">Mobile Number</label>
              <input
                type="text"
                class="form-control"
                v-model="form.phone_no"
                :class="{ 'is-invalid': form.errors.has('phone_no') }"
                placeholder="Enter Phone No"
              />
              <has-error :form="form" field="phone_no"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
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

          <div class="col-sm-4">
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
          <div class="col-sm-4">
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

          <div class="col-sm-4">
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

          <div class="col-sm-4">
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
          <div class="col-sm-4">
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

          <div class="col-sm-4">
            <div class="form-group pt-1">
              <div class="form-check pt-3">
                <input type="checkbox" class="form-check-input" id="subscribe" v-model="form.subscribe" :value="form.subscribe">
                <label class="form-check-label pt-3" for="subscribe"> GBI Newsletter</label>
              </div>
              <has-error :form="form" field="subscribe"></has-error>
            </div>
          </div>
        </div>

        <div class="form-group text-center">
          <button type="submit" class="btn btn-primary profile_button">
            UPDATE
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import ProfileEditMixin from '@/front/mixins/user/ProfileEditMixin';
export default {
  name:"ProfileEdit",
  mixins:[ProfileEditMixin],
  data(){
    return{

    }
  }
}

</script>
