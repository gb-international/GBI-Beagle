<!-- Edit itinerary template -->
<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-around">
                <!-- left column -->
                <div class="col-md-12">
                  <h3 class="card-title">Update  Itinerary  {{ this.$route.params.itineraryid }}</h3>
                    <form role="form" enctype="multipart/form-data" @submit.prevent="updateItinerary()">
                      <div class="row">
                        <div class="col-sm-4">
                          <div class="form-group">
                              <label for="sourceId">Source</label>
                              <input type="text" class="form-control" name="source" v-model="form.source" :class="{ 'is-invalid': form.errors.has('source') }" placeholder="Enter Source" >
                               <has-error :form="form" field="source"></has-error>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="form-group">
                              <label for="destinationId">Destination</label>
                              <input type="text" class="form-control" v-model="form.destination" :class="{ 'is-invalid': form.errors.has('destination') }"  placeholder="Enter Destination" name="destination">
                              <has-error :form="form" field="destination"></has-error>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="form-group">
                              <label for="noofdaysId">Number Of Days</label>
                              <input type="text" class="form-control" v-model="form.noofdays" :class="{ 'is-invalid': form.errors.has('noofdays') }"  placeholder="Enter Number Of Days" name="noofdays">
                              <has-error :form="form" field="noofdays"></has-error>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-4">
                          <div class="form-group">
                           <label for="tourtypeId">Tour Type</label>   
                               <div>
                                 
                                 <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" class="custom-control-input" id="NationalId" value="National" name="tourtype"  v-model="form.tourtype">
                                    <label class="custom-control-label" for="NationalId">National</label>
                                  </div>

                                  <!-- Default inline 2-->
                                  <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" class="custom-control-input" value="International" id="InternationalId" name="tourtype" v-model="form.tourtype">
                                    <label class="custom-control-label" for="InternationalId">International</label>
                                  </div>
                               </div>
                              
                              <div class="error" v-if="form.errors.has('tourtype')">
                                {{ form.errors.get("tourtype") }}
                              </div>
                          </div>
                          
                        </div>
                        <div class="col-sm-8">
                          <div class="form-group">
                              <label for="titleId">Title</label>
                              <input type="text" class="form-control"  placeholder="Enter Title"  name="title" v-model="form.title" :class="{ 'is-invalid': form.errors.has('title') }">
                              <has-error :form="form" field="title"></has-error>
                          </div>
                          
                        </div>
                      </div>
                          <div class="form-group">
                                  <label for="descriptionId">Description</label>
                                  <textarea class="form-control" placeholder="Enter Description"  id="descriptionId" rows="5" name="description" v-model="form.description" :class="{ 'is-invalid': form.errors.has('description') }"></textarea>
                                  <has-error :form="form" field="description"></has-error>
                          </div>
                      <div class="row">
                        <div class="col-sm-4">
                          <div class="form-group" >
                              <input @change = "changePhoto($event)" name="photo" type="file" :class="{ 'is-invalid': form.errors.has('photo') }">
                              <img :src="updateImage()" alt="" width="80" height="80">
                              <has-error :form="form" field="photo"></has-error>
                          </div>
                        </div>
                        <div class="col-sm-8">
                          <button type="submit" class="btn btn-primary itrn_add_btn">Update & Continue</button>
                        </div>
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
        name: "Edit",
        created(){
            axios.get(`/itinerary/${this.$route.params.itineraryid}`)
            .then((response)=>{
                console.log(response.data)
                       this.form.fill(response.data.itinerary)
                       
                    })
                   
        },
        data(){
            return {
              // Create a new form instance
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
            updateItinerary()
            {
                // Submit the form via a itinerary request
                this.form.post(`/update-itinerary/${this.$route.params.itineraryid}`)
                  .then((response)=>{
                       this.$router.push('/itinerary-list')
                        toast({
                            type: 'success',
                            title: 'Itinerary Updated successfully'
                        })
                    })
                    .catch(()=>{

                    })
            },
             updateImage(){
                let img = this.form.photo;
                if(img.length>100){
                    return  this.form.photo
                }else{
                    return `uploadimage/${this.form.photo}`
                }

            }
        }
    }
</script>

<style scoped>

</style>