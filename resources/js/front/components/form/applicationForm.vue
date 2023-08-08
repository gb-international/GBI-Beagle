  <template>
  <!--************************************************
      Author:@Manas
      ****************************************************-->

    <main>
        <article class="join-team" style="background: #dcdcdc !important;">
          <div class="container pb-5">
            <heading class="text-center" text="Join Our Brilliant Minds" />
            <form
              role="form"
              method="POST"
              @submit.prevent="sendmailResume()"
              enctype="multipart/form-data"
            >
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.firstname"
                      :class="{ 'is-invalid': form.errors.has('firstname') }"
                      placeholder="Enter first name"
                    />
                    <has-error :form="form" field="firstname"></has-error>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.lastname"
                      :class="{ 'is-invalid': form.errors.has('lastname') }"
                      placeholder="Enter last name"
                    />
                    <has-error :form="form" field="lastname"></has-error>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.current_company"
                      :class="{ 'is-invalid': form.errors.has('current_company') }"
                      placeholder="Last/current Company"
                    />
                    <has-error :form="form" field="current_company"></has-error>
                  </div>
                </div>
                 <div class="col-sm-6">
                  <div class="form-group">
                    <div class="input-group mb-2">
                      <input
                        type="number"
                        min="0"
                        class="form-control"
                        v-model="form.job_exp"
                        :class="{ 'is-invalid': form.errors.has('job_exp') }"
                        placeholder="Job Exp."
                      />
                      <div class="input-group-prepend">
                        <div class="input-group-text">Years</div>
                      </div>
                    </div>
                    <has-error :form="form" field="job_exp"></has-error>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
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
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.contactno"
                      :class="{ 'is-invalid': form.errors.has('contactno') }"
                      placeholder="Enter Mobile number"
                    />
                    <has-error :form="form" field="contactno"></has-error>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
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
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.state"
                      :class="{ 'is-invalid': form.errors.has('state') }"
                      placeholder="Enter State"
                    />
                    <has-error :form="form" field="state"></has-error>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
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
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.zipcode"
                      :class="{ 'is-invalid': form.errors.has('zipcode') }"
                      placeholder="Enter Zipcode"
                    />
                    <has-error :form="form" field="zipcode"></has-error>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                   <!-- <select
                      class="form-control"
                      v-model="form.applyingfor"
                      :class="{ 'is-invalid': form.errors.has('applyingfor') }"
                    >
                      <option value default="default">Applying For</option>

                      <option 
                        v-for="position in positions" 
                        :key="position" 
                        :value="position">{{ position}}</option>
                    </select> -->
                    <input
                      type="text"
                      class="form-control"
                      :value="form.applyingfor"
                      :class="{ 'is-invalid': form.errors.has('applyingfor') }"
                      readonly
                    />
                    <has-error :form="form" field="applyingfor"></has-error>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-fullwidth">
                    <div class="upload-btn-wrapper">
                      <button class="btn button3" style="font-size: 16px;">{{!form.filename ? 'Select File' : 'Uploaded' }}</button>
                      <input
                        name="resume"
                        type="file"
                        @change="onFileChange"
                        :class="{ 'is-invalid': form.errors.has('resume') }"
                        accept=".pdf"
                      />
                      <has-error :form="form" field="resume"></has-error>
                    </div>
                    <p>
                      <small class="ml-2">{{ form.filename ? form.filename : 'Please uplod PDF file only'}}</small>
                    </p>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      v-model="form.messagescon"
                      :class="{ 'is-invalid': form.errors.has('messagescon') }"
                      rows="4"
                      placeholder="Write something.."
                    ></textarea>
                    <has-error :form="form" field="messagescon"></has-error>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button type="submit" class="btn profile_button" value="Submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </article>
    </main>
  </div>
</template>

<script>
import { Form, HasError } from "vform";
import Heading from '@/front/components/layout/Heading.vue';
export default {
  name: "Application form",
  
  components: {
    HasError,
    Heading,
  },
  props: [
    'job'
  ],
  data() {
    return {
      form: new Form({
        firstname: "",
        lastname: "",
        email: "",
        contactno: "",
        address: "",
        state: "",
        city: "",
        zipcode: "",
        applyingfor: this.job,
        resume: "",
        filename: "",
        messagescon: "",
        current_company: "",
        job_exp: ""
      }),
      positions:["Business Development Executive (Delhi)","Business Development Executive (Punjab)", "Business Development Executive (Hyderabad)", "Software Developer", "Business Lead Generation Executive"],
    };
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (files[0].size > 2097152) {
        this.swal.fire(
          "Alert!",
          "Resume size should not be more than 2 MB",
          "warning"
        );

        return false;
      }
      if (!files.length) return;

      this.createImage(files[0]);
      var fileData = e.target.files[0];
      this.form.filename = fileData.name;
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      reader.onload = (e) => {
        this.form.resume = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    sendmailResume() {
      this.form.job_exp = this.form.job_exp+' Years'
      this.form
        .post("/api/join-our-team/send")
        .then((response) => {
          this.form.reset();
          this.form.filename = "";
          this.$swal.fire(
            "Successfully Submited!",
            "Your resume has been sent to HR Deparment..",
            "success"
          );
        })

        .catch(() => {});
    }, // end sendmailResume
  },
};
</script>