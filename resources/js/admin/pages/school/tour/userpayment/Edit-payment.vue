<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-around">
                <div class="col-md-12">
                    <form role="form" enctype="multipart/form-data" @submit.prevent="updateTourtype()">
                        <div class="row">        
                          <div class="col-sm-8">
                            <div class="form-group">
                                <label for="name">tourtype Name</label>
                                <input type="text" class="form-control"  placeholder="Enter tourtype Name" v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }">
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
        </div><!-- /.container-fluid -->
    </section>
</template>

<script>
import { Form, HasError } from 'vform'
export default {
    name: "EditPaymentUser",
    components:{Form,
  'has-error': HasError
  },
    data(){
        return{
            form: new Form({
                name:'',
            })
        }
    },
    created(){
        this.TourtypeData();
    },
    methods:{
        TourtypeData(){
            axios.get(`/api/tourtype/${this.$route.params.id}/edit`).then((response)=>{
                this.form.fill(response.data);
            })
        },
        updateTourtype(){
        this.form.put(`/api/tourtype/${this.$route.params.id}`).then((response)=>{
               this.$router.push('/tourtype')
                this.$toast.fire({
                    icon: 'success',
                    title: 'Tourtype Updated successfully'
                })
            })
            .catch(()=>{

            })
        },
        goBack(){
          this.$router.push(`/tourtype`);
        },
    }

}
</script>
