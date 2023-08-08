<template>
  <div>
    <div
      id="AlertModalForExplore"
      class="modal fade modal-border-radius"
      role="dialog"
    >
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-body p-2">
            <div class="text-center modal-padding">
              <h4>Sorry</h4>
              <p class="text-muted">Itinerary Not Available</p>
              <button
                type="button"
                class="btn swal-close-button mt-3 text-center"
                data-dismiss="modal"
              >
                OK
              </button>
            </div>

            <p data-dismiss="modal" class="modal-footer-link-custom">
              For Itinerary
              <span
                class="pointer"
                data-toggle="modal"
                data-target="#itinerayrFormModal"
                >Click Here</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade modal-border-radius" id="itinerayrFormModal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body">
            <form class="form p-3" method="post" @submit.prevent="submitForm()">
              <div class="row pb-3 break-word">
                <div class="col-sm-5">
                  <div class="row">
                    <div class="col">
                      <div class="form-group">
                        <label for="tour_code">Source</label>
                        <div class="text-muted">{{ sources.value }}</div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-group">
                        <label for="tour_code"> Destination </label>
                        <div class="text-muted">{{ destinations.value }}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-7">
                  <div class="row">
                    <div class="col">
                      <div class="form-group">
                        <label for="tour_code">In Mood For</label>
                        <p class="text-muted">{{ tourtypes }}</p>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-group">
                        <label for="tour_code">No. of Days</label>
                        <p class="text-muted pl-4">{{ noofdays }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="tour_code">Mobile Number</label>
                    <input
                      type="number"
                      class="form-control input-border"
                      placeholder="Enter Mobile Number"
                      v-model.number="form.phoneno"
                      required
                      :class="{ 'is-invalid': form.errors.has('phoneno') }"
                    />
                    <has-error :form="form" field="phoneno"></has-error>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="tour_code">Email ID</label>
                    <input
                      type="email"
                      class="form-control input-border"
                      placeholder="Enter Email"
                      v-model="form.email"
                      required
                      :class="{ 'is-invalid': form.errors.has('email') }"
                    />
                    <has-error :form="form" field="email"></has-error>
                  </div>
                </div>
              </div>

              <div class="text-center">
                <button
                  type="submit"
                  class="btn swal-close-button mt-3 text-center"
                >
                  OK
                </button>
                <!-- <button type="submit" class="btn swal-close-button mt-3 text-center" data-dismiss="modal">OK</button> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, HasError } from "vform";
export default {
  name: "ExploreAlertsModals",
  props: {
    sources: { required: true },
    destinations: { required: true },
    tourtypes: { required: true },
    noofdays: { required: true },
  },
  components: {
    Form,
    HasError,
  },
  data() {
    return {
      form: new Form({
        source: "",
        destination: "",
        tourtype: "",
        noofday: "",
        phoneno: "",
        email: "",
      }),
    };
  },
  methods: {
    submitForm() {
      this.form.source = this.sources.value;
      this.form.destination = this.destinations.value;
      this.form.tourtype = this.tourtypes;
      this.form.noofday = this.noofdays;
      this.form.post("/api/request-itinerary").then((res) => {
        this.form.reset();
        this.$swal.fire(
          "Submited!!",
          "Your Query Has Been Submited !!",
          "success"
        );
        $("#itinerayrFormModal").modal("hide");
      });
    },
  },
};
</script>
