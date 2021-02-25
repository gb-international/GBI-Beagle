<!--
This Template is for listing for the encyclopedia profile using function to get the 
data from the api to display the data about the encyclopedia from the backend .
-->
<template>
    <section class="content">
<!--************************************************
      Template Type: encyclopedias List
      Author:@Ajay
 ****************************************************-->
        <div class="row justify-content-around" >
            <div class="col-md-12">
              <div class="container container_admin_body">
                <div class="top_btn">
                  <!-- <router-link :to="`/encyclopedia-add`">Comment</router-link> -->
                </div>
                  <!-- Start Card -->
                  <table id="example" class="display table table-striped table-bordered nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th>NAME<i class="fas fa-sort"></i></th>
                            <th>BODY <i class="fas fa-sort"></i></th>
                            <th>DATE <i class="fas fa-sort"></i></th>
                            <th> <i class="fas fa-cog"></i></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="encyclopedia in encyclopedia_list" role="row" v-bind:class="{ odd: oddclass , 'even': evenclass}" class="row_list" :key="encyclopedia.id">
                            <td>{{encyclopedia.encyclopedia_id}}</td>
                            <td>{{ encyclopedia.body }}</td>
                            <td>{{ encyclopedia.created_at }}</td>
                            <td class="edit_section">
                              <a href="" class="delete_link" @click.prevent = "deleteencyclopedia(encyclopedia.id)" ><span class="badge badge-danger"><i class="far fa-trash-alt"></i></span></a>

                            </td>
                        </tr>                 

                      </tbody>
                </table>
                </div>
                <!-- end -->
            </div>
        </div>
    </section>
    <!-- /.content -->
</template>

<script>
export default {
  name: "List",
  data(){
    return{
      oddclass:false,
      evenclass:true,
      encyclopedia_list:[]
    }
  },
  created(){
    this.encyclopediaData();
    
  },

   methods:{
    encyclopediaData(){
      axios.get('/api/encyclopediacomments').then((response)=>{
        setTimeout(() => $('#example').DataTable(), 1000);
        this.encyclopedia_list = response.data;

      })
    },

    deleteencyclopedia(id){
      var uri = '/api/encyclopediacomments/'+id;
      this.$swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          axios.delete(uri).then((response)=>{
            this.encyclopediaData();
                
          })
          this.$swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
           
        }
      });
    }

   } 
}