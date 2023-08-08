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
          <div>
            <label>Document Type</label>
            <br />
            <select class="form-control" v-model="docs.docType">
              <option value="aadhar">Aadhar Card</option>
              <option value="voterId">Voter ID</option>
              <option value="schoolId">School ID</option>
              <option value="passport">Passport</option>
            </select>
          </div>
          <div class="error" v-if="form.errors.has('docType')">
            <lable class="danger text-danger">{{
              form.errors.get("docType")
            }}</lable>
          </div>
        </div>
      </div>
    </div>

    <!-- Upload buttons / Area -->
    <div class="row py-2">
      <div class="col-md-6">
        <label>Document Front</label>
        <div class="card shadow py-5 px-4 mb-2">
          <div class="card-body d-flex justify-content-center align-items-center flex-column">
            <i class="fas fa-upload uploadIcons" @click="frontInput"></i>
            <p class="note" v-if="docs.docFront == null">Upload(.png/.jpg/.jpeg/.pdf)</p>
            <p class="note2" v-if="docs.docFront != null">File Uploaded</p>

            <input type="file" ref="frontInput" style="display: none" @change="onFileFront" accept=".png, .jpg, .jpeg, .pdf">
          
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <label>Document Back</label>
        <div class="card shadow py-5 px-4 mb-2">
          <div class="card-body d-flex justify-content-center align-items-center flex-column">
            <i class="fas fa-upload uploadIcons" @click="backInput"></i>
            <p class="note" v-if="docs.docBottom == null">Upload(.png/.jpg/.jpeg/.pdf)</p>
            <p class="note2" v-if="docs.docBottom != null">File Uploaded</p>
            <input type="file" ref="backInput" style="display: none" @change="onFileBottom" accept=".png, .jpg, .jpeg, .pdf">
          </div>
        </div>
      </div>
    </div>
    <!-- Update button Web -->
    <div class="form-group text-center">
      <button type="submit" class="btn btn-primary profile_button">
          Submit
      </button>
    </div>

    <p class="text-success" v-if="message">{{ message }}</p>
  </form>
</template>
<script>
import ProfileEditMixin from "@/front/mixins/user/ProfileEditMixin";

export default {
  name: "UploadDocsForm",
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
    };
  },
  methods: {
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
