<template>
    <div>
        <!-- Main content -->
        <section class="content">
          
        <h3 class="text-center">GBI Dashboard</h3> 
        <div class="row">
          <div class="col-sm-6">
 
          </div>
          <div class="col-sm-6 notification_list">
            <div class="card">
              <div class="card-body">
                <h6>Notifications <span class="badge badge-success pull-right">{{ unread }}</span></h6>
                <hr>
                <div class="text-center" v-if="notifications.length == 0">***** You have no notification *****</div>
                <div class="list" v-for="notify in notifications" :key="notify.id">
        
                  <div class="alert alert-secondary" v-if="notify.read_at">
                    <router-link :to="`/view-itinerary/${notify.data.itinerary_id}`" class="edit_link">
                      <p class="text-dark"><b>{{ notify.data.from }} </b> {{ notify.data.body }} </p>
                    </router-link>
                    <br>
                    <span>{{ notify.created_at }}</span>
                  </div>
                  <div v-else class="alert alert-info"  @click="markRead(notify.id)">
                    <router-link :to="`/view-itinerary/${notify.data.itinerary_id}`" class="edit_link">
                      <p><b>{{ notify.data.from }} </b> {{ notify.data.body }} </p>
                    </router-link>
                    <br>
                    <span>{{ notify.created_at }}</span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

		  <div class="row">
		  	<div class="col-sm-4">
		  		<!-- <div class="col-sm-3">
                  <router-link :to="`/booked-tour-manager`">
                    <img :src="`assets/admin/default/icon/tour-manager.png`">
                  </router-link>
                </div>
                <div class="col-sm-3">
                  <router-link :to="`/booked-tour-hotel`">
                    <img :src="`assets/admin/default/icon/hotel.png`">
                  </router-link>
                </div> 

                <div class="col-sm-3 m-30">
                  <router-link :to="`/booked-tour-flight`">
                    <img :src="`assets/admin/default/icon/transport-icon.png`">
                  </router-link>
                </div>

                <div class="col-sm-3 m-30">
                  <router-link :to="`/booked-tour-train`">
                    <img :src="`assets/admin/default/icon/transport-icon.png`">
                  </router-link>
                </div> -->

		  	</div>
		  </div>
        </section>
    </div>
</template>

<script>
export default {
  name: "List",
  data(){
    return{
      oddclass:false,
      evenclass:true,
      notifications:[],
      unread:0,
    }
  },
// Get all the data
 created(){
  this.notificationList();
 },
// End the process of the the fetching data
   methods:
   {
    notificationList(){
      axios.get(`/gbiuser/notifications`).then(response => {

        if(response.data){
          this.notifications = response.data;
          for(var i=0;i<this.notifications.length;i++){
            if(this.notifications[i].read_at){
              //read
            }else{
              this.unread++;
            }
          }
        }
      });
    },

    markRead(id){
      axios.get(`/gbiuser/notification-mark-read/`+id).then(response => {

      });
    },

     deletetour(id){
        var uri = 'api/tours/destroy/'+id;
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
            setTimeout(() => $('#example').DataTable(), 1000);
            axios.post(uri).then((response)=>{
              this.$store.dispatch('getAllData','/api/schools')
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