<!-- add new itinerary template -->
<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-around">
                <!-- left column -->
                
                <div class="col-md-12">
                    <form role="form" enctype="multipart/form-data" @submit.prevent="addItinerary()">
                      <div class="row" v-for="(row,index) in rows">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="sourceId">Source</label>
                                <input type="text" class="form-control" name="source" v-model="row.source" :class="{ 'is-invalid': form.errors.has('source') }" placeholder="Enter Source" >
                                 <has-error :form="form" field="source"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="destinationId">Destination</label>
                                <input type="text" class="form-control" v-model="row.destination" :class="{ 'is-invalid': form.errors.has('destination') }"  placeholder="Enter Destination" name="destination">
                                <has-error :form="form" field="destination"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            
                            <button v-if="city_button == row['last_button']" type="button" class="btn itrn_add_btn" @click="addRow">ADD ANOTHER CITY</button>

                            <button v-else="city_button != row['last_button']" type="button" class="btn cross_btn"  @click="deleteRow(index)">X</button>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="noofdaysId">Number Of Days</label>
                                <input type="text" class="form-control" v-model="form.noofdays" :class="{ 'is-invalid': form.errors.has('noofdays') }"  placeholder="Enter Number Of Days" name="noofdays">
                                <has-error :form="form" field="noofdays"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group aligen_top_input">
                              <label for="hoteltype">Hotel Type</label><br>
                                <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="hotelRadio" name="hoteltype" value="3">
                                <label class="custom-control-label" for="hotelRadio">3 Star</label>
                              </div>
                              <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="hotelRadio1" name="hoteltype" value="4">
                                <label class="custom-control-label" for="hotelRadio1">4 Star</label>
                              </div> 
                              <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="hotelRadio2" name="hoteltype" value="5">
                                <label class="custom-control-label" for="hotelRadio2">5 Star</label>
                              </div> 
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label for="mode_of_transport">Mode of Transport</label><br>
                              <div class="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" class="custom-control-input" id="transport" name="transport" value="flight">
                                <label class="custom-control-label" for="transport">Flight</label>
                              </div>

                              <div class="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" class="custom-control-input" id="transport1" name="transport" value="bus">
                                <label class="custom-control-label" for="transport1">Bus</label>
                              </div>

                              <div class="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" class="custom-control-input" id="transport2" name="transport" value="train">
                                <label class="custom-control-label" for="transport2">Train</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-12">
                            <label for="itineraryPaste">Paste Itinerary</label>
                            <textarea class="form-control" name="itineraryPaste" rows="5" placeholder="Paste Itinerary"></textarea>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-4"></div>
                          <div class="col-sm-4">
                            <div class="form-group text-center">
                              <button type="submit" class="btn btn-primary btn-block itrn_add_btn">SAVE</button>
                            </div>
                          </div>
                          <div class="col-sm-4"></div>
                        </div>                        
                    </form>
                </div>
            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </section>
</template>

<script>
   export default {
        name: "New",
        data(){
            return {
              // Create a new form instance
              rows: [{ 'source': '', 'destination': '','last_button':'1'}],
              city_button:1,
              form: new Form({
                source: '',
                destination: '',
                noofdays: '',
                title: '',
                description: '',
                tourtype: '',
                photo:'',
                })
            }
        },
        methods:
        {
          addRow: function() {
            this.city_button=this.city_button+1;
            this.rows.push({'source': '', 'destination': '','last_button':this.city_button});
          },
          deleteRow: function(index) {
            this.rows.splice(index,1);
          },
            changePhoto(event){
                let file = event.target.files[0];

                 if(file.size>1048576){
                     swal({
                         type: 'error',
                         title: 'Oops...',
                         text: 'Something went wrong!',
                         footer: '<a href>Why do I have this issue?</a>'
                     })
                 }else{
                     let reader = new FileReader();
                     reader.onload = event => {
                         this.form.photo = event.target.result
                         console.log(event.target.result)
                     };
                     reader.readAsDataURL(file);
                 }

            },
            addItinerary()
            {
                // Submit the form via a itinerary request
                this.form.post('/add-itinerary')
                  .then((response)=>{
                    console.log(response.data)
                       this.$router.push(`/add-days-itinerary/${response.data.id}`)
                        toast({
                            type: 'success',
                            title: 'Itinerary Added successfully'
                        })
                    })
                    .catch(()=>{

                    })
            }
        }
    }
</script>

<style scoped>

</style>