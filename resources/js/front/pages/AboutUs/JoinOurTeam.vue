  <template>
  <!--************************************************
      Author:@Ajay
      ****************************************************-->

  <div id="joinOurteam">
    <div class="career_banner text_on_image banner_bg">
      <div class="content">
        <p class="heading">JOIN OUR TEAM</p>
      </div>
    </div>

    <main>
      <!-- End banner area -->
      <section>
        <article class="join-team">
          <div class="container">
            <h1 class="text-center">JOIN OUR BRILLIANT MINDS</h1>
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
                      placeholder="Enter contactno"
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
                      placeholder="Enter address"
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
                      placeholder="Enter state"
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
                      placeholder="Enter city"
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
                      placeholder="Enter zipcode"
                    />
                    <has-error :form="form" field="zipcode"></has-error>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <select
                      class="form-control"
                      v-model="form.postvancy"
                      :class="{ 'is-invalid': form.errors.has('postvancy') }"
                    >
                      <option value default="default">Select Post</option>

                      <option 
                        v-for="position in positions" 
                        :key="position" 
                        :value="position">{{ position}}</option>
                    </select>
                    <has-error :form="form" field="postvancy"></has-error>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-fullwidth">
                    <div class="upload-btn-wrapper">
                      <button class="btn button3">Select File</button>
                      <input
                        name="resume"
                        type="file"
                        @change="onFileChange"
                        :class="{ 'is-invalid': form.errors.has('resume') }"
                        accept=".pdf, .doc, .docx"
                      />
                      <has-error :form="form" field="resume"></has-error>
                      <span v-if="filename">{{ filename }}</span>
                    </div>
                    <p>
                      <small>Please uplod PDF file only</small>
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
                <button type="submit" class="btn profile_button mb-5" value="Submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<script>
import { Form, HasError } from "vform";
export default {
  name: "JoinOurTeam",
  metaInfo: {
    title: "Join Our Team",
    meta: [
      {
        name: "description",
        content:
          "@GoWithGBI Lets travel together and make the world a better place .Join our brilliant minds",
      },
      {
        name: "keywords",
        content:
          "@GoWithGBI,join our team,explore Your career with GBI,exciting journey,research oriented process,challenges,explore your travel instinct,discover ,travel passion,learn,explore,discover",
      },
      {
        name: "url",
        content: "https://www.gowithgbi.com/about-us/join-our-team",
      },
    ],
  },
  components: {
    HasError,
  },
  data() {
    return {
      filename: "",
      form: new Form({
        firstname: "",
        lastname: "",
        email: "",
        contactno: "",
        address: "",
        state: "",
        city: "",
        zipcode: "",
        postvancy: "",
        resume: "",
        messagescon: "",
      }),
      positions:["Business Development Executive (Delhi)","Business Development Executive (Punjab)", "Business Development Executive (Hyderabad)", "Software Developer", "Business Lead Generation Executive"],
    };
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (files[0].size > 2097152) {
        swal.fire(
          "Alert!",
          "Resume size should not be more than 2 MB",
          "warning"
        );

        return false;
      }
      if (!files.length) return;

      this.createImage(files[0]);
      var fileData = event.target.files[0];
      this.filename = fileData.name;
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = (e) => {
        vm.form.resume = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    sendmailResume() {
      this.form
        .post("/api/join-our-team/send")
        .then((response) => {
          this.form.reset();
          this.filename = "";
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