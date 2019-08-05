<template>
    <div id="fronthome">
    	    <!-- start banner area -->
          <section class="banner-block">
             <img class="banner-img" v-bind:src="'assets/front/images/explorserach.png'">
         </section> 
         <div class="container">
            <div class="row ">
                <!-- left column -->
                <div class="col-lg-12">
                  <div class="col-md-12">
                    <div class="nav-sreach-explo"> 
                   <ul class="nav nav-tabs serch-explo-menu">
                    <li class="nav-item">
                      <a class="nav-link active border-none" data-toggle="tab" href="#home">Oneway</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link border-none" data-toggle="tab" href="#menu1">Multicity</a>
                    </li>
                   
                  </ul>

                  <!-- Tab panes -->
                  <div class="tab-content explor-content">
                    <div id="home" class="container tab-pane active"><br>
                      <div class="row p-0">
                        <div class="col-6 col-sm-4 col-sm-4 col-lg-4 input-p nopadding"> 
                          <input type="text" name="source" placeholder="Enter Your Source">
                        </div>
                        <div class="col-6 col-sm-4 col-sm-4 col-lg-4 input-p nopadding"> 
                           <input  type="text" name="destination" placeholder="Enter Your Destination">
                        </div>
                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                          <div class="select">
                          <select  class="selectpicker">
                            <option selected>Type of travel</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                            </div>
                        </div>
                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                           <div class="select">
                          <select  class="selectpicker">
                          <option selected>No of Days</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        </div>
                        </div>
                        
                      </div>
                    </div>
                    <div id="menu1" class="container tab-pane "><br>
                       <div class="row p-0">
                        <div class="col-6 col-sm-4 col-lg-4 input-p nopadding"> 
                          <input type="text" name="source1" placeholder="Enter Your Source">
                        </div>
                        <div class="col-6 col-sm-4 col-lg-4 input-p nopadding"> 
                          <input  type="text" name="destination1" placeholder="Enter Your Destination">
                        </div>
                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                          <div class="select">
                          <select  class="selectpicker">
                            <option selected>Type of travel</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        </div>
                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                          <div class="select">
                          <select  class="selectpicker">
                          <option selected>No of Days</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        </div>
                        </div>
                       </div>
                       <div class="clear"></div>
                      <div class="row p-0" v-for="(row, index) in rows" :row="row">
                        <div class="col-4 col-sm-4 col-lg-4 input-p nopadding"> 
                          <input type="text" v-model="row[0]" name="source" placeholder="Enter Your Source">
                        </div>
                        <div class="col-4 col-sm-4 col-lg-4 input-p nopadding"> 
                          <input  type="text" name="destination" placeholder="Enter Your Destination">
                        </div>
                        <div class="col-4 col-sm-4 col-lg-4 input-p nopadding"> 
                           <button class="button btn-xs btn-success" @click="addRow">+Add city</button>
                        </div>
                      </div>
                          
                       
                    </div>
                    </div>
                      
                  </div>
                  <div class="container">
                      <div class="row">
                       <div class="col text-center button-explo">
                        <button class="btn btn-primary btn-lg">Search</button>
                        </div>
                      </div>
                      </div>
                </div>
               </div>
            </div>
            <!-- /.row -->
        </div><!-- /.container-->
        <div class="container">
            <div class="row ">
                <div class="col-lg-12">
                    <ul class="nav nav-tabs upcom-pack">
                    <li class="nav-item">
                    <a class="nav-link bg-color-tour" data-toggle="tab" href="#Upcoming"><h1 class="upcom-head">Upcoming Tour</h1></a>
                    </li>
                    </ul>
                  <!-- Tab panes -->
                  <div class="tab-content">
                    <div id="Upcoming" class="container tab-pane active bg-color-tour border-color-tour"><br>
                     <div class="col-lg-12 nopadding">  
                      <!--start upcomig card layout-->
                       <div class="col-sm-6 col-md-4 nopadding">
                        <router-link to="/lists">
                        <div class="col-xs-4 col-sm-4 col-md-4">
                        <img class="img-responsive imgcircle" src="https://snap-photos.s3.amazonaws.com/img-thumbs/960w/1U2EGZ07GU.jpg" alt="" />
                      </div>
                      <div class="col-xs-8 col-sm-8 col-md-8 upcomin-days-tour padding-head">
                        <h1>tour gangtok darjeeling</h1>
                        <p>7 Days Tour</p>
                      </div>
                      </router-link>
                       </div>

                        <div class="col-sm-6 col-md-4 nopadding">
                          <router-link to="/explore-list">
                        <div class="col-xs-4 col-sm-4 col-md-4">
                        <img class="img-responsive imgcircle" src="https://snap-photos.s3.amazonaws.com/img-thumbs/960w/1U2EGZ07GU.jpg" alt="" />
                      </div>
                      <div class="col-xs-8 col-sm-8 col-md-8 upcomin-days-tour padding-head">
                        <h1>tour gangtok darjeeling</h1>
                        <p>7 Days Tour</p>
                      </div>
                    </router-link>
                       </div>
                        <div class="col-sm-6 col-md-4 nopadding">
                        <div class="col-xs-4 col-sm-4 col-md-4">
                        <img class="img-responsive imgcircle" src="https://snap-photos.s3.amazonaws.com/img-thumbs/960w/1U2EGZ07GU.jpg" alt="" />
                      </div>
                      <div class="col-xs-8 col-sm-8 col-md-8 upcomin-days-tour padding-head">
                        <h1>tour gangtok darjeeling</h1>
                        <p>7 Days Tour</p>
                      </div>
                       </div>
                       <!--start upcomig card layout-->
                      </div>
                      <div class="clear"></div>
                       <div class="col-lg-12 nopadding">  
                      <!--start upcomig card layout-->
                       <div class="col-sm-6 col-md-4 nopadding">
                        <div class="col-sm-6 col-md-4">
                        <img class="img-responsive imgcircle" src="https://snap-photos.s3.amazonaws.com/img-thumbs/960w/1U2EGZ07GU.jpg" alt="" />
                      </div>
                      <div class="col-sm-6 col-md-8 upcomin-days-tour padding-head">
                        <h1>tour gangtok darjeeling</h1>
                        <p>7 Days Tour</p>
                      </div>
                       </div>

                        <div class="col-sm-6 col-md-4 nopadding">
                        <div class="col-sm-6 col-md-4">
                        <img class="img-responsive imgcircle" src="https://snap-photos.s3.amazonaws.com/img-thumbs/960w/1U2EGZ07GU.jpg" alt="" />
                      </div>
                      <div class="col-sm-6 col-md-8 upcomin-days-tour padding-head">
                        <h1>tour gangtok darjeeling</h1>
                        <p>7 Days Tour</p>
                      </div>
                       </div>
                        <div class="col-sm-6 col-md-4 nopadding">
                        <div class="col-sm-6 col-md-4">
                        <img class="img-responsive imgcircle" src="https://snap-photos.s3.amazonaws.com/img-thumbs/960w/1U2EGZ07GU.jpg" alt="" />
                      </div>
                      <div class="col-sm-6 col-md-8 upcomin-days-tour padding-head">
                        <h1>tour gangtok darjeeling</h1>
                        <p>7 Days Tour</p>
                      </div>
                       </div>
                       <!--start upcomig card layout-->
                      </div>
                    </div>
                    </div>
                </div>
             
              
             </div>
            <!-- /.row -->
        </div><!-- /.container-->
            
    </div>
</template>

<script>
    export default {
        name: "FrontHome"


    }
</script>

<style scoped>

</style>