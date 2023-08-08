<!-- 

This template helps us to create a new hotel it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <section class="content">
    <div class="container-fluid">
      <!--************************************************
          Template Type: Adding New Hotel
          Author:@Ajay

      ****************************************************-->
      <div class="row justify-content-around">
        <!-- left column -->
        <div class="col-md-12">
          <form role="form" enctype="multipart/form-data" @submit.prevent="AddSchool()">
            <div class="row">
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="name">tourtype Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter tourtype Name"
                    v-model="form.name"
                    :class="{ 'is-invalid': form.errors.has('name') }"
                  />
                  <has-error :form="form" field="name"></has-error>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-2"></div>
              <div class="col-sm-4">
                <div class="form-group text-center">
                  <button class="btn btn-primary itrn_add_btn" @click="goBack()">Back</button>
                  <!-- <router-link :to="`/list-city`">Back</router-link> -->
                </div>
              </div>
              <div class="col-sm-4">
                <div class="form-group text-center">
                  <button type="submit" class="btn btn-primary btn-block itrn_add_btn">SUBMIT</button>
                </div>
              </div>
              <div class="col-sm-2"></div>
            </div>
          </form>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </section>
</template>

<script>
import { Form, HasError } from "vform";
export default {
  name: "NewPaymentUser",
components:{Form,
  'has-error': HasError
  },
  data() {
    return {
      // Create a new form instance
      form: new Form({
        name: ""
      })
    };
  },
  methods: {
    AddSchool() {
      var path = `/api/tourtype`;
      this.form
        .post(path)
        .then(response => {
          this.$router.push(`/tourtype`);
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated !!!"
          });
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }
        });
    },

    goBack() {
      this.$router.push(`/tourtype`);
    }
  }
};
</script>