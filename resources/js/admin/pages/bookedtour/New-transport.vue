<!--
This Template is for listing for the transport profile using function to get the 
data from the api to display the data about the transport from the backend .
-->
<template>
    <section class="content">
      <!--************************************************
      Template Type: Reservation List
      Author:@Ajay

      ****************************************************-->
      <div class="row justify-content-around" >
        <div class="col-md-12">
          <div class="container container_admin_body">
            <div class="reservation">
              <!-- Table -->
              <div class="row transport_data">

              </div>

              <!-- Table  -->
              <div class="transport_bottom" v-for="data in total_row" :key="data.id">
                <div id="tabs" class="container">
                  <div class="tabs">
                    <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Flights</a>
                    <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">Train</a>
                    <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">Bus</a>
                  </div>
                  <div class="content">
                    <div v-if="activetab === 1" class="tabcontent">

                        <div class="row">
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Select Airline Name</label>
                              <select class="form-control select-field" v-model="data[0].name">
                                <option v-for="air in air_list" :value="air.transName" :key="air.id">{{ air.transName }}</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Flight Number</label>
                              <input type="text" class="form-control" v-model="data[0].number">
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Source</label>
                              <input type="text" v-model="data[0].source" class="form-control" required="">
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Destination</label>
                              <input type="text" v-model="data[0].destination" class="form-control" required>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Departure</label>
                              <input type="datetime-local" v-model="data[0].departure" class="form-control">
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Arrival</label>
                              <input type="datetime-local" v-model="data[0].arrirval" class="form-control">
                            </div>
                          </div>
                          
                        </div>

                    </div>
                    <div v-if="activetab === 2" class="tabcontent">

                        <div class="row">
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Select Train Name</label>
                              <select class="form-control select-field" v-model="data[1].name">
                                <option v-for="train in train_list" :value="train.transName" :key="train.id">{{ train.transName }}</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Source</label>
                              <input type="text" v-model="data[1].source" class="form-control" required="">
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Destination</label>
                              <input type="text" v-model="data[1].destination" class="form-control" required>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Departure</label>
                              <input type="datetime-local" v-model="data[1].departure" class="form-control">
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label>Arrival</label>
                              <input type="datetime-local" v-model="data[1].arrirval" class="form-control">
                            </div>
                          </div>
                        </div>
                    </div>
                    <div v-if="activetab === 3" class="tabcontent">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label>Source</label>
                            <input type="text" v-model="data[2].source" class="form-control" required="">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label>Destination</label>
                            <input type="text" v-model="data[2].destination" class="form-control" required>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label>Departure</label>
                            <input type="datetime-local" v-model="data[2].departure" class="form-control">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label>Arrival</label>
                            <input type="datetime-local" v-model="data[2].arrirval" class="form-control">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br>
              </div>
  

              <!-- button -->
              <!-- Buttons -->
              <div class="row reservation_bottom">
                <div class="col-sm-3">
                </div>
                <div class="col-sm-3">
                  <button type="button" class="btn btn-default itrn_add_btn" @click="updateData()">UPDATE</button>
                </div>
                <div class="col-sm-4">
                  <label>Add Row</label>
                  <input type="number" name="add_row" v-model="row_input">
                  <button type="button" class="btn btn_go" @click="add_row()" placeholder="0">GO</button>
                </div>
              </div>
            </div>
          </div>                          
        </div>
      </div>
    </section>
    <!-- /.content -->
</template>
<script>

    export default {
        name: "ListBookedtranspot",
        data(){
          return{
            row_input:'',
            air_list:'',
            train_list:'',
            total_data:'',
            flightModal: false,
            trainModal: false,
            busModal:false,
            activetab: 1,
            total_row: [
              [{type:'flight', name:'',number: '',source: '',destination: '',arrirval:'',departure:'' },
              {type:'train', name:'',source: '',destination: '',arrirval:'',departure:'' },
              {type:'bus',source: '',destination: '',arrirval:'',departure:'' }]
            ],
          }
        },
// Get all the data
        created(){
          axios.get(`/api/flights`).then(response => {
            if(response.data){
              this.air_list = response.data;
            }
          });
          axios.get(`/api/trains`).then(response => {
            if(response.data){
              this.train_list = response.data;
            }
          });
          
           axios.get(`/tour_transport/${this.$route.params.id}`).then(response => {
            if(response.data.transport){
              var total = response.data.transport;
              this.total_row = JSON.parse(total);
            }
          })
        },
// End the process of the the fetching data
       methods:
       {
        updateData(){
          var path = `/tour_transport_add/${this.$route.params.id}`;
          axios.post(path, this.total_row).then(response => {
            this.$toast.fire({
              icon: 'success',
              title: 'Successfully Updated !!!'
            })
          }).catch(error => {
            if (error.response.status === 422) {
              this.errors = error.response.data.errors || {};
            }
          });
        },

        add_row(){
          for(var i=0; i< this.row_input;i++){
            this.total_row.push([{type:'flight', name:'',number: '',source: '',destination: '',arrirval:'',departure:'' },
              {type:'train', name:'',source: '',destination: '',arrirval:'',departure:'' },
              {type:'bus',source: '',destination: '',arrirval:'',departure:'' }]);
          }
          this.row_input = '';
        }

       }
    }
</script>