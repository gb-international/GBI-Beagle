<template>
  <!--************************************************
      Author:@Manas
      ****************************************************-->
<div class="container py-5">
    <div class="row">

      <!-- First -->
      <div class="col-lg-3 py-3" :style="{'display': leftDisplay}">
        <div class="text-center d-flex justify-content-center align-items-center flex-column">
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
                  ><img :src="$gbiAssets+'/images/icons/edit.png'" class="icon-width"
                /></label>
              </div>
              <div class="avatar-preview">
                <div id="imagePreview" style="background-image: url()">
                  <img
                    v-if="image"
                    :src="image"
                    loading="lazy"
                    class="img"
                  />
                  <img
                    v-else
                    :src="image"
                    loading="lazy"
                    class="img"
                    alt="user profile"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Second Web-->
      <div class="col-lg-3 secondCol">
        <div class="secondColWeb pr-5">
          <div class="row border-top border-right p-4 secondRows" @click="selected = 'profileForm'" :style="selected == 'profileForm' ? 'background-color: rgb(216 214 214); border-right: none;' : ''">
            Profile Detail
          </div>
          <div class="row border-top border-right p-4 secondRows" @click="selected = 'loginDetailsForm'" :style="selected == 'loginDetailsForm' ? 'background-color: rgb(216 214 214); border-right: none;' : ''">
            Login Detail
          </div>
          <div class="row border-top border-right p-4 secondRows" @click="selected = 'docsForm'" :style="selected == 'docsForm' ? 'background-color: rgb(216 214 214); border-right: none;' : ''">
            Document Verfication
          </div>
          <div class="row border-top border-right border-bottom p-4" @click="selected = 'socialForm'" :style="selected == 'socialForm' ? 'background-color: rgb(216 214 214); border-right: none;' : ''">
            Social Media
          </div>
        </div>

        <!-- Second Mob -->
        <div class="secondColMob" :style="{'display': leftDisplay}">
          <div class="row border-top border-right p-4 secondRows" @click="selectForm('profileForm')" :style="selected == 'profileForm' ? 'background-color: rgb(216 214 214); border-right: none;' : ''">
            Profile Detail
          </div>
          <div class="row border-top border-right p-4 secondRows" @click="selectForm('loginDetailsForm')" :style="selected == 'loginDetailsForm' ? 'background-color: rgb(216 214 214); border-right: none;' : ''">
            Login Detail
          </div>
          <div class="row border-top border-right p-4 secondRows" @click="selectForm('docsForm')" :style="selected == 'docsForm' ? 'background-color: rgb(216 214 214); border-right: none;' : ''">
            Document Verfication
          </div>
          <div class="row border-top border-right border-bottom p-4" @click="selectForm('socialForm')" :style="selected == 'socialForm' ? 'background-color: rgb(216 214 214); border-right: none;' : ''">
            Social Media
          </div>
        </div>
      </div>


      <!-- Third -->
      <div class="col-lg-6 px-4 pt-4 thirdCol" :style="{ 'display': rightDisplay }">
        <profile-form v-if="selected == 'profileForm'" @close="backPage"/>
        <login-details-form v-if="selected == 'loginDetailsForm'" @close="backPage"/>
        <docs-form v-if="selected == 'docsForm'" @close="backPage"/>
        <social-form v-if="selected == 'socialForm'" @close="backPage"/>
      </div>

    </div>
  </div>
</template>

<script>
import ProfileEditMixin from '@/front/mixins/user/ProfileEditMixin';
import ProfileForm from '@/front/components/form/ProfileForm';
import LoginDetailsForm from '@/front/components/form/LoginDetailsForm';
import UploadDocsForm from '@/front/components/form/UploadDocsForm';
import SocialForm from '@/front/components/form/SocialForm'

export default {
  name:"ProfileEdit",
  mixins:[ProfileEditMixin],
  components: {
        "profile-form": ProfileForm,
        "login-details-form": LoginDetailsForm,
        "docs-form": UploadDocsForm,
        "social-form": SocialForm
    },
  data(){
    return{
      selected: 'profileForm',
      windowHeight: window.innerHeight,
      rightDisplay: '',
      leftDisplay: ''
    }
  },
  watch: {
        windowHeight(newHeight, oldHeight) {
              this.rightDisplay = ''
              this.leftDisplay = ''
        }
  },
  beforeDestroy() { 
      window.removeEventListener('resize', this.onResize); 
  },
  mounted() {
      this.$nextTick(() => {
          window.addEventListener('resize', this.onResize);
      })
  },
  methods:{
    onResize() {
        this.windowHeight = window.innerHeight
      },
    selectForm(form){
        this.selected = form
        this.rightDisplay = 'inline';
        this.leftDisplay = 'none';
    },
    backPage(){
      this.rightDisplay = 'none';
      this.leftDisplay = 'inline';
    }
  },
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
secondRows{
  cursor: pointer !important;
}

.thirdCol {
  padding-left: 30px !important;
}

.avatar-upload{
  margin-left: 20% !important;
}
.secondColWeb{
  display: inline;
}

.secondColMob{
  display: none;
}

.customButton{
  display: none;
}

@media only screen and (max-width: 824px) {
  .container {
    width: 100%;
  }

  .thirdCol {
    padding-left: 0px;
    display: none;
  }
  .secondColWeb{
  display: none;
  }
  .secondColMob{
    display: inline;
  }
  .avatar-upload{
    margin-left: 0px !important;
  }
  .customButton{
    display: inline;
    float: right;
  }
}
</style>