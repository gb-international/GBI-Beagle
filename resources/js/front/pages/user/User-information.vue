<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div id="user_inform_model">
    <div class="row justify-content-center w-100">
      <div class="col-sm-7">
        <div class="user-model card p-20 mt-15">
          <label>Three Step Verification</label>
          <form-wizard
            @on-complete="onComplete"
            @on-loading="setLoading"
            @on-validate="handleValidation"
            @on-error="handleErrorMessage"
            shape="circle"
            color="#1c1650"
            error-color="#e74c3c"
          >
            <tab-content title="Personal details" :before-change="validateAsync">
              <label>Select Your Profession</label>
              <select class="form-control" v-model="profession">
                <option value="student">Student</option>
                <option value="teacher">Teacher/Principal/Dean</option>
                <option value="corporate">Corporate</option>
                <option value="other">Other</option>
              </select>
            </tab-content>

            <tab-content title="Additional Info" :before-change="validateAsyncSecond">


              <div class="form-group" v-if="school_field">
                <label>Select Your Educational Institution</label>
                <select class="form-control" v-model="institution">
                  <option
                    v-for="school in school_list"
                    :value="school.id"
                    :key="school.id"
                  >{{ school.school_name }}</option>
                  <option value="other">Other</option>
                </select>
              </div>

              
              <div class="form-group" v-if="namefield">
                <label>Enter {{ label_name }} Name</label>
                <input type="text" class="form-control" v-model="name">
              </div>

              
              <div class="form-group" v-if="addressfield">
                <label>Enter Address</label>
                <textarea class="form-control" v-model="address"></textarea>
              </div>




            </tab-content>

            <tab-content title="Last step" :before-change="validateAsyncLast">
              <div class="form-group">
                <label v-if="profession == 'student'">Enter Your School/College ID</label>
                <label v-else>Enter Your Affiliation Number</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="institution_code"
                  placeholder="Enter Your School/College ID"
                />
              </div>
            </tab-content>

            <div class="loader" v-if="loadingWizard"></div>
            <div v-if="errorMsg">
              <span class="error">{{errorMsg}}</span>
            </div>
          </form-wizard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";

export default {
  name: "ProfileEdit",
  components: {
    FormWizard,
    TabContent
  },
  data() {
    return {
      name:'',
      address:'',
      
      school_field:false,
      namefield:false,
      addressfield:false,
      institutionfield:false,

      second_step:false,

      label_name:'',
      oddclass: false,
      evenclass: true,
      loadingWizard: false,
      errorMsg: null,
      school_list: "",
      profession: "",
      institution: "",
      institution_code: "",
    };
  },
  beforeMount(){
    if (this.$cookies.get('access_token') == null) {
      this.$router.push("/");
    }
  },
  mounted() {

    this.$axios.get("/api/school-list").then(response => {
      this.school_list = response.data;
    });
    
    var data = [];
    this.$api.POST("/api/user-show", [])
      .then(response => {
        if (response.success.status == 1) {
            this.$router.push("/dashboard");
          }
      })
      .catch(error => {
        this.handleError(error);
      });

      
  },
  watch:{
    institution:function(){
      if(this.institution != ''){
        this.second_step = true;
      }

      if(this.institution == 'other'){
        this.namefield = true;
        this.addressfield = true;
        this.label_name = 'Educational Institution'
      }else{
        this.namefield = false;
        this.addressfield = false;
      }
    },
    profession:function(){
      this.namefield = false;
      this.addressfield = false;
      this.school_field = false;
      console.log(this.school_field);
      if(this.profession == 'corporate'){
        this.namefield = true;
        this.addressfield = true;
        this.label_name = 'Corporate'
      }else if(this.profession == 'other'){
        this.namefield = true;
        this.label_name = "Occupation";
      }else{
        this.school_field = true;
      }
    },
    name:function(){
      if(this.name != ''){
        this.second_step = true;
      }
    },
    address:function(){
      if(this.address != ''){
        this.second_step = true;
      }
    }
  },
  methods: {
    onComplete: function() {
      var data = {
        user_profession: this.profession,
        school_id: this.institution,
        profession_name: this.name,
        profession_address: this.address,
        institution_code: this.institution_code
      };

      this.$axios
        .post("/api/user-info-update", data, {
          headers: { Authorization: `Bearer ${this.$cookies.get('access_token')}` }
        })
        .then(response => {
          const data = this.$cookies.get('user');
          data.status = 1;
          data.user_profession = this.profession;
          this.$cookies.remove('user');
          this.$cookies.set('user',data);
          this.$router.push("/dashboard");
        })
        .catch(error => {
          this.$swal.fire({
            icon:'error',
            title:'Please fill all the fields'
          });
        });
    },
    setLoading: function(value) {
      this.loadingWizard = value;
    },
    handleValidation: function(isValid, tabIndex) {
      console.log("Tab: " + tabIndex + " valid: " + isValid);
    },
    handleErrorMessage: function(errorMsg) {
      this.errorMsg = errorMsg;
    },
    validateAsync: function() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.profession == "") {
            reject("Select your profession");
          } else {
            resolve(true);
          }
        }, 500);
      });
    },
    
    validateAsyncSecond: function() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.second_step != true) {
            reject("Please enter additional information");
          } else {
            resolve(true);
          }
        }, 500);
      });
    },

    validateAsyncLast: function() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.institution_code == "") {
            reject("Enter your institution code");
          } else {
            resolve(true);
          }
        }, 500);
      });
    }
  }
};
</script>
