<template>
  <!--************************************************
      Author:@Ajay
      ****************************************************-->

  <form
    role="form"
    enctype="multipart/form-data"
    @submit.prevent="updateDocs()"
  >
  <div class="d-flex justify-content-end">
    <button class="btn btn-info customButton backBtn" @click.prevent="$emit('close')">Back</button>
  </div>
   <!-- Update Fields -->
    <div class="row">
      <div class="col-sm-12">
        <div class="form-group">
            <label><b>Connect with Social Accounts</b></label>
        </div>
      </div>
    </div>

    <!-- Social buttons / Area -->
    <div class="row pt-2">
      <div class="col-md-6 mb-2" style="cursor: pointer;">
        <label style="font-size: 15px; font-weight: 500;">Facebook</label>
        <div class="shadow px-1" style="border-radius: 100px;">
          <div class=" d-flex justify-content-start align-items-center ml-2">
            <i class="fab fa-facebook uploadIcons" @click="frontInput" :style="allSocial.facebook ? 'color: #4267B2' : ''"></i>
            <p class="note2 pl-3 pt-1"  @click="useAuthProvider('facebook', Facebook)" v-if="allSocial.facebook">Connected with Facebook</p>
            <p class="note2 pl-3 pt-1" @click="useAuthProvider('facebook', Facebook)" v-else>Connect with Facebook</p>        
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-2" style="cursor: pointer;">
        <label style="font-size: 15px; font-weight: 500;">Instagram</label>
        <div class="shadow px-1" style="border-radius: 100px;">
          <div class="d-flex justify-content-start align-items-center ml-2">
            <i class="fab fa-instagram uploadIcons" @click="backInput"></i>
            <p class="note2 pl-3 pt-1">Connect with Instagram</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row pb-2">
      <div class="col-md-6 mb-2" style="cursor: pointer;">
        <label style="font-size: 15px; font-weight: 500;">LinkedIn</label>
        <div class="shadow px-1" style="border-radius: 100px;">
          <div class=" d-flex justify-content-start align-items-center ml-2">
            <i class="fab fa-linkedin uploadIcons" @click="frontInput"></i>
            <p class="note2 pl-3 pt-1">Connect with LinkedIn</p>          
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-2" style="cursor: pointer;">
        <label style="font-size: 15px; font-weight: 500;">Twitter</label>
        <div class="shadow px-1" style="border-radius: 100px;">
          <div class="d-flex justify-content-start align-items-center ml-2">
            <i class="fab fa-twitter uploadIcons" @click="backInput"></i>
            <p class="note2 pl-3 pt-1">Connect with Twitter</p>
          </div>
        </div>
      </div>
    </div>

    <p class="text-success" v-if="message">{{ message }}</p>
  </form>
</template>
<script>
import ProfileEditMixin from "@/front/mixins/user/ProfileEditMixin";
import { Facebook /*Github, Google , Twitter*/} from 'universal-social-auth';

export default {
  name: "SocialForm",
  mixins: [ProfileEditMixin],
  components: {
  },
  data() {
    return {
      docs: {
          docType: 'aadhar',
          docFront: null,
          docBottom: null
        },
        allSocial: {},
        responseData: {},
        hash: '',
        //data: {},
        fauth: false,
        Facebook,
    };
  },
  created(){
      this.checkSocial();
  },
  methods: {
    useAuthProvider (provider, proData) {
      const pro = proData
      const ProData = pro || Providers[provider]
      this.$Oauth.authenticate(provider, ProData).then((response) => {
      console.log(response)

        const rsp = response
        let userData = this.$cookies.get("user")
        if (rsp) {
          this.responseData.code = rsp.code
          this.responseData.provider = provider
          this.responseData.userId = userData.id
          this.SocialLogin(this.responseData)
        }
      }).catch((err) => {
        console.log(err)
       })
    },
    SocialLogin(data){
      this.$axios.post("/api/user/save-social", data,
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }).then((res) => {
          this.allSocial = res.data.data
          console.log(this.allSocial)
          /*this.$swal.fire({
          icon: "success",
          title: "Success",
          text: "Social Account Connected."
        })*/
      })
      .catch((error) => console.log(
        this.$swal.fire({
          icon: "warning",
          title: "Error",
          text: "Connection failed, please try again."
        })
      ));
    },
    checkSocial(){
      let userData = this.$cookies.get("user")
      this.$axios.post("/api/user/social/"+userData.id,
      {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      }).then((res) => {
        this.allSocial = res.data.data;
        console.log(this.allSocial)
      })
      .catch((error) => console.log(
        this.$swal.fire({
          icon: "warning",
          title: "Error",
          text: "Connection failed, please try again."
        })
      ));
    },
    // useSocialLogin () {
    //   // otp from input Otp form
    //   // hash user data in your backend with Cache or save to database
    //   const pdata = { code: this.responseData.code, otp: this.data.tok, hash: this.hash }
    //   this.$axios.post('/social-login/' + this.responseData.provider, pdata).then(async (response) => {
    //       // `response` data base on your backend config
    //     console.log('Test')
    //     if (response.data.status === 444) {
    //       this.hash = response.data.hash
    //       this.fauth = true // Option show Otp form incase you using 2fa or any addition security apply to your app you can handle all that from here
    //     }
    //   }).catch((err) => {
    //     console.log(err)
    //   })
    // },
    frontInput(){
      this.$refs.frontInput.click()
    },
    backInput(){
      this.$refs.backInput.click()
    },
    onFileFront(e){
        this.docs.docFront = e.target.files[0];
        console.log(this.docs.docFront)
    },
    onFileBottom(e){
        this.docs.docBottom = e.target.files[0];
        //console.log(this.docFront.name)
        console.log(this.docs.docBottom)
    },
    updateDocs(){
      if(!this.docs.docFront || !this.docs.docBottom || !this.docs.docType ){
        this.$swal.fire({
          icon: "warning",
          title: "Upload Empty!",
          text: "Please upload the documents."
        })
        return false
      }
      let data = new FormData();
      data.append("docFront", this.docs.docFront);
      data.append("docBottom", this.docs.docBottom);
      data.append("docType", this.docs.docType);

      console.log(data)
      this.$axios.post("/api/update-user-docs", data, {
        headers: {
        Authorization: `Bearer ${this.$cookies.get('access_token')}`,
          },
        }).then((res) => {
          this.$swal.fire({
          icon: "success",
          title: "Documents Uploaded !!",
        })
      })
      .catch((error) => console.log(
        this.$swal.fire({
          icon: "warning",
          title: "Upload Failed..",
          text: "Upload failed, please try again"
        })
      ));
    }
  }
};
</script>

<style scoped>
.uploadIcons{
  font-size: 25px;

}
.note{
  margin-top: 10px;
  font-size: 12px;
}
.note2{
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
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
  .mobBtn{
    display: inline !important;
  }
  .backBtn{
    display: inline !important;
  }
}
</style>
