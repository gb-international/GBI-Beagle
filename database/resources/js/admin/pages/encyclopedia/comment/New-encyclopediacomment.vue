<!-- 

This template helps us to create a new encyclopedia it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <section class="content">
    <div class="container-fluid">
    <!--************************************************

    Template Type: Add New encyclopedia
    Author:@Ajay

    ****************************************************-->
      <div class="row justify-content-around">
        <!-- left column -->
        <div class="col-md-12 itinerary_form">
          <form role="form" enctype="multipart/form-data" @submit.prevent="addItinerary()">
            
              <div class="row">
                <div class="col-sm-4">
                  <div class="form-group">
                    <label for="state_name">State</label>
                    <select class="form-control select-field" v-model="form.state_name" @change="slugCreate($event)">
                      <option v-for="state in state_list" :value="state.name" :key="state.id">{{ state.name }}</option>
                    </select>
                     <has-error :form="form" field="state_name"></has-error>
                  </div>

                  <div class="form-group">
                    <label for="slug">Slug</label>
                    <input type="text" class="form-control" v-model="form.slug" :class="{ 'is-invalid': form.errors.has('slug') }" placeholder="Enter Map Link" rows="6" readonly="">
                     <has-error :form="form" field="slug"></has-error>
                  </div>

                  
                </div>
                <div class="col-sm-8">
                  <div class="form-group">
                    <label for="map_link">Map Link</label>
                    <textarea class="form-control" v-model="form.map_link" :class="{ 'is-invalid': form.errors.has('map_link') }" placeholder="Enter Map Link" rows="6"></textarea>
                     <has-error :form="form" field="map_link"></has-error>
                  </div>
                </div>
                <div class="col-sm-4"></div>
              </div>

              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                      <label for="descriptionId">Description</label>

                      <ckeditor :editor="editor" class="form-control" id="description" v-model="form.description" :config="editorConfig"  :class="{ 'is-invalid': form.errors.has('description') }"></ckeditor>

                      <has-error :form="form" field="description"></has-error>
                  </div>
                </div>
              </div>
              <!-- Adding photo for the itinerary -->
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group itinerary_image">
                    <label class="label" for="thumbnail">Please upload thumbnail image !</label><br>
                      <input @change = "changeImage($event,'thumbnail')" type="file" :class="{ 'is-invalid': form.errors.has('thumbnail') }" accept="jpeg,jpg,png,gif" class="select_image">
                      
                      <img :src="form.thumbnail" alt="" width="80" height="80">
                      <has-error :form="form" field="thumbnail"></has-error>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <label class="label" for="input">Please upload a Banner image !</label><br>
                    <input @change = "changeImage($event,'banner')" name="banner_image" type="file" :class="{ 'is-invalid': form.errors.has('banner_image') }">

                    <img :src="form.banner_image" alt="" class="banner_image">
                    <has-error :form="form" field="banner_image"></has-error>
                  </div>
                </div>
              </div>



              <hr>  

              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label class="label" for="image_one">Image One</label>
                    <input @change = "changeImage($event,1)" type="file" :class="{ 'is-invalid': form.errors.has('image_one') }"  class="select_image">

                    <img :src="form.image_one" alt="" class="image_one" width="80" height="80">
                    <has-error :form="form" field="image_one"></has-error>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <label class="label" for="image_one">Image Two</label>
                    <input @change = "changeImage($event,2)" type="file" :class="{ 'is-invalid': form.errors.has('image_two') }"  class="select_image">

                    <img :src="form.image_two" alt="" class="image_two" width="80" height="80">
                    <has-error :form="form" field="image_two"></has-error>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <label class="label" for="image_one">Image Three</label>
                    <input @change = "changeImage($event,3)" type="file" :class="{ 'is-invalid': form.errors.has('image_three') }"  class="select_image">

                    <img :src="form.image_three" alt="" class="image_three" width="80" height="80">
                    <has-error :form="form" field="image_three"></has-error>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <label class="label" for="image_four">Image Four</label>
                    <input @change = "changeImage($event,4)" type="file" :class="{ 'is-invalid': form.errors.has('image_four') }"  class="select_image">

                    <img :src="form.image_four" alt="" class="image_four" width="80" height="80">
                    <has-error :form="form" field="image_four"></has-error>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <label class="label" for="image_five">Image Five</label>
                    <input @change = "changeImage($event,5)" type="file" :class="{ 'is-invalid': form.errors.has('image_five') }"  class="select_image">

                    <img :src="form.image_five" alt="" class="image_five" width="80" height="80">
                    <has-error :form="form" field="image_five"></has-error>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <label class="label" for="image_six">Image Six</label>
                    <input @change = "changeImage($event,6)" type="file" :class="{ 'is-invalid': form.errors.has('image_six') }"  class="select_image">

                    <img :src="form.image_six" alt="" class="image_six" width="80" height="80">
                    <has-error :form="form" field="image_six"></has-error>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <label class="label" for="image_seven">Image Seven</label>
                    <input @change = "changeImage($event,7)" type="file" :class="{ 'is-invalid': form.errors.has('image_seven') }"  class="select_image">

                    <img :src="form.image_seven" alt="" class="image_seven" width="80" height="80">
                    <has-error :form="form" field="image_seven"></has-error>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <label class="label" for="image_eight">Image Eight</label>
                    <input @change = "changeImage($event,8)" type="file" :class="{ 'is-invalid': form.errors.has('image_eight') }"  class="select_image">

                    <img :src="form.image_eight" alt="" class="image_eight" width="80" height="80">
                    <has-error :form="form" field="image_eight"></has-error>
                  </div>
                </div>

                
              </div>             

              <div class="row text-center">
                <div class="col-sm-4">
                  <router-link :to="`/encyclopedia-list`" class="btn btn-primary itrn_add_btn back_btn">Back</router-link>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary itrn_add_btn">SUBMIT</button>
                  </div>
                </div>
              </div>

              
          </form>
        </div>
      </div>
    </div><!-- /.container-fluid -->
  </section>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ModelSelect } from 'vue-search-select'
import { Form, HasError } from 'vform'

export default {
  name: "New",
  components: {
    ModelSelect,Form,'has-error':HasError
  },
  data(){
    return {
      editor: ClassicEditor,
      editorConfig: {// The configuration of the editor.
      },

      state_list:[],
      form: new Form({
        state_name: '',
        map_link: '',
        slug:'',
        description: '',
        thumbnail:'',
        banner_image:'',
        image_one:'',
        image_two:'',
        image_three:'',
        image_four:'',
        image_five:'',
        image_six:'',
        image_seven:'',
        image_eight:'',
      })
    }
  },
  created(){
    this.cityList();
  },

  methods:{
    cityList(){
      axios.get('/api/state').then(response => {
        this.state_list = response.data;
      });
    },
    changeImage(event,model){
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event =>{
        switch(model){
          case 'thumbnail':
            this.form.thumbnail = event.target.result;
            break;
          case 'banner':
            this.form.banner_image = event.target.result;
            break;
          case 1:
            this.form.image_one = event.target.result; 
            break;
          case 2:
            this.form.image_two = event.target.result;
            break;
          case 3:
            this.form.image_three = event.target.result;
            break;
          case 4:
            this.form.image_four = event.target.result;
            break;
          case 5:
            this.form.image_five = event.target.result;
            break;
          case 6:
            this.form.image_six = event.target.result;
            break;
          case 7:
            this.form.image_seven = event.target.result;
            break;
          case 8:
            this.form.image_eight = event.target.result;
            break;          
        }
      }
      reader.readAsDataURL(file);
    },

    slugCreate(event){
      var slug = "";
      var value = event.target.value.toLowerCase();
      // Trim the last whitespace
      slug = value.replace(/\s*$/g, '');
      // Change whitespace to "-"
      this.form.slug = slug.replace(/\s+/g, '-');
    },
    addItinerary()
    {
      // Submit form 
      this.form.post('/api/encyclopedias')
        .then((response)=>{

             // this.$router.push(`/itinerary-list`)
              this.$toast.fire({
                  icon: 'success',
                  title: 'Itinerary Added successfully'
              })
           }).catch(()=>{})
    },

  }
}
</script>