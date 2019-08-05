<!-- add new days itinerary template -->
<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-around">
                <!-- left column -->
                <div class="col-md-12">
                       <div class="row itinerary_day_record">
                         <div class="col-sm-4">
                           <h5>Source</h5>
                           <p>Enter Source</p>
                         </div>
                          <div class="col-sm-8">
                           <h5>Destination</h5>
                           <p>Enter Destination</p>
                         </div>
                       </div>
                  <form role="form" enctype="multipart/form-data" @submit.prevent="addItineraryday()">

                      <div class="card-body">
                        <div class="rows">
                       
                          <div v-for="(item,index) in form.noofdays">
                            <div v-if="step === index+1">
                          <h1>Day {{ index+1 }}</h1>
                          <div class="row">
                            <div class="col-sm-8">
                             <div class="form-group">
                                <label for="titleId">Title {{ index+1 }}</label>

                                <input type="text" class="form-control"  placeholder="Enter Title"  name="daytitle[]"  v-model="daytitle[index+1]" :class="{ 'is-invalid': form.errors.has('daytitle') }">
                                <has-error :form="form" field="daytitle"></has-error>
                            </div>
                          </div>
                        </div>
                          <div class="form-group">
                              <label for="descriptionId">Description {{ index+1 }}</label>
                              <textarea class="form-control" placeholder="Enter Description"  rows="6" name="daydescription[]" v-model="daydescription[index+1]"  :class="{ 'is-invalid': form.errors.has('daydescription') }"></textarea>
                              <has-error :form="form" field="daydescription"></has-error>
                          </div>
                          <div class="form-group text-center">
                              <button v-if="index+1 > 1" class="btn btn-primary itrn_add_btn" @click.prevent="prev()">Previous</button>
                             <button v-if="form.noofdays != index+1" class="btn btn-primary itrn_add_btn" @click.prevent="next()">Next</button>
                              
                               <button v-if="form.noofdays == index+1" class="btn btn-primary itrn_add_btn" type="submit">Save</button>
                          </div>
                         </div>
                        </div>
                            
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
        name: "Newdayitinerary",
         created(){
            axios.get(`add-days-itinerary/${this.$route.params.id}`)
                .then((response)=>{
                    /*console.log(response.data)*/
                    this.form.fill(response.data.itinerariesdays)
                })

        },
       
        data(){

            return {
              // Create a new form instance
               step:1,
               index:'',
               daytitle: [],
               daydescription: [],
              form: new Form({
                noofdays: '',	
                id: '',
                daytitle : this.daytitle,  
                daydescription: this.daydescription
                })
            }
        },
        methods:
        {
           prev() {
              this.step--;
            },
            next() {
              this.step++;
            },
             addItineraryday()
            {
               // Submit the form via a itinerary request
                this.form.post(`/add-itinerarydays/${this.$route.params.id}`)
                  .then((response)=>{
                    console.log(response.data)
                   /* console.log(this.daytitle)
                    console.log(this.daydescription)
                  */  /*   this.$router.push('/itinerary-list')
                        toast({
                            type: 'success',
                            title: 'Itinerary Updated successfully'
                        })*/
                    })
                    .catch(()=>{

                    })
            },
                
           
        }
    }
</script>

<style scoped>

</style>