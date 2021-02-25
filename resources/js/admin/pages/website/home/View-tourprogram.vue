<!-- 

This is template is for the viewing the itineraray with the help of the id of the itinerary 
It takes id from the url and get the data from the api .

-->
<template>
    <section class="content">
      <!--************************************************
      Template Type: View Itinerary Deatails
      Author:@Ajay

      ****************************************************-->
        <div class="row justify-content-around" >
            <div class="col-md-12">
              <div class="container container_admin_body">
                <!-- Start Card -->        
                  <div class="card_view admin_encyclopedia">
                    <!-- This row will show the itinerary detail -->
                    <h3 class="text-center">Escort Detail #{{ this.$route.params.id }}</h3>
                    <br>
                    <div class="row">
                      <div class="col-sm-7">
                        <div class="row">
                          <div class="col-sm-6">
                            <h5>State Name</h5>
                            <p>{{list_data.state_name}}</p>                            
                          </div>
                          <div class="col-sm-6">
                            <h5>Slug</h5>
                            <p>{{list_data.slug}}</p>                            
                          </div>
                          
                          
                          <hr>
                          <div class="col-sm-12">
                            <h5>Banner Image</h5>
                            <img :src="getImgUrl(list_data.banner_image)" class="img-thumbnail">
                          </div>
                          <br>
                          <div class="col-sm-12">
                            <h5>Description</h5>
                            <p v-html="list_data.description"></p>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-5">
                        <div class="col-sm-12 card map_link p-0">
                          <p class="p-0 m-0" v-html="list_data.map_link"></p>                          
                        </div>

                        <div class="col-sm-5">
                            <h5>Thumbnail</h5>
                            <img :src="getImgUrl(list_data.thumbnail)" class="img-thumbnail">
                          </div>
                      </div>
                    </div>

                    <h5>Images</h5>
                    <div class="row images_row">
                      <br>
                      <br>
                      <div class="col-sm-3">
                        <img :src="getImgUrl(list_data.image_one)" class="img-thumbnail">
                      </div>
                      <div class="col-sm-3">
                        <img :src="getImgUrl(list_data.image_two)" class="img-thumbnail">
                      </div>
                      <div class="col-sm-3">
                        <img :src="getImgUrl(list_data.image_three)" class="img-thumbnail">
                      </div>
                      <div class="col-sm-3">
                        <img :src="getImgUrl(list_data.image_four)" class="img-thumbnail">
                      </div>
                      <div class="col-sm-3">
                        <img :src="getImgUrl(list_data.image_five)" class="img-thumbnail">
                      </div>
                      <div class="col-sm-3">
                        <img :src="getImgUrl(list_data.image_six)" class="img-thumbnail">
                      </div>
                      <div class="col-sm-3">
                        <img :src="getImgUrl(list_data.image_seven)" class="img-thumbnail">
                      </div>
                      <div class="col-sm-3">
                        <img :src="getImgUrl(list_data.image_eight)" class="img-thumbnail">
                      </div>
                    </div>

                    <hr>
                    <h5>Itinerary</h5>
                    <div class="row">
                      <div class="col-sm-6">
                        <ul>
                          <li>{{ list_data.one }}</li>
                          <li>{{ list_data.two }}</li>
                          <li>{{ list_data.three }}</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                  <!-- End card -->
                  <div class="col-sm-4 content-justify-center">
                    <button type="button" @click="goBack();" class="btn btn-primary itrn_add_btn back_btn">BACK</button>
                  </div>
                </div>                          
                <!-- end -->
            </div>
        </div>
    </section>
    <!-- /.content -->
</template>

<script>
export default {
  name: "View",
  data(){
    return{
      list_data:[]   
    }
  },
  created(){
    this.encyclopediaData();
  },
  methods:{
    encyclopediaData(){
      axios.get(`/api/encyclopedias/${this.$route.params.id}`).then((response)=>{
        this.list_data = response.data;
      })
    },
    getImgUrl(img){
      return '/encyclopedia/'+img;
    },
    goBack(){
      this.$router.go(-1);
    }
  }
}
