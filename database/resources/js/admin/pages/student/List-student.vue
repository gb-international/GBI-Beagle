<!--
This Template is for listing for the Hotel profile using function to get the 
data from the api to display the data about the Hotel from the backend .
-->
<template>
    <section class="content">
      <!--************************************************
      Template Type: Hotel List
      Author:@Ajay

      ****************************************************-->
    <div class="row justify-content-around" >
      <div class="col-md-12">
        <div class="container container_admin_body">
          <table id="example" class="display table table-striped table-bordered nowrap" style="width:100%">
            <thead>
                <tr>
                    <th>NAME  <i class="fas fa-sort"></i></th>
                    <th>SCHOOL NAME <i class="fas fa-sort"></i></th>
                    <th>CONTACT NO.  <i class="fas fa-sort"></i></th>
                    <th>EMAIL  <i class="fas fa-sort"></i></th>
                    <th> <i class="fas fa-cog"></i></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="student in student_list" role="row" v-bind:class="{ odd: oddclass , 'even': evenclass}" class="row_list" :key="student.id">
                    <td>{{ student.first_name }} {{ student.last_name}}</td>

                    <td>{{ student.school.school_name }} </td>
                    <td>{{ student.mobile }}</td>
                    <td>{{ student.email }}</td>
                    <td class="edit_section">
                      <router-link :to="`/students/${student.id}`" class="edit_link">
                        <span class="badge badge-primary"><i class="fas fa-pencil-alt"></i></span>
                      </router-link>
                      <a href="" class="delete_link" @click.prevent = "deletestudent(student.id)" ><span class="badge badge-danger"><i class="far fa-trash-alt"></i></span></a>

                      <router-link :to="`/view-student/${student.id}`" class="edit_link">
                        <span class="badge badge-primary" title="View Itinerary"><i class="fas fa-eye"></i></span>
                      </router-link>
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
  name: "ListStudent",
  data(){
    return{
      oddclass:false,
      evenclass:true,
      student_list:[]
    }
  },
  created(){
    this.studentData();
  },
  methods:{
    studentData(){
      axios.get('/api/student').then((response)=>{
        setTimeout(() => $('#example').DataTable(), 1000);
        this.student_list = response.data.data;
      });
    },
   deletestudent(id){
      var uri = 'api/student/'+id;
      this.$swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value){
          axios.delete(uri).then((response)=>{
            this.studentData();
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


</script>