<template>
    <div class="container p-4">
        <h5 class="text-muted">Tour
            <div class="dropdown float-right">
                <span class="cursor-pointer dropdown-toggle" data-toggle="dropdown">
                    {{ $cookies.get('escort_name')}}
                </span>
                <div class="dropdown-menu">
                    <span class="dropdown-item cursor-pointer" @click="logout()">Logout</span>
                </div>
            </div>
        </h5>            
    
        <div class="mt-4">
            <div v-for="tour in tours" :key="tour.id">
                <div v-if="tour.tour.status == 'Current'">
                    
                    <div @click="goToDashboard(tour.tour_code)" class="cursor-pointer">
                        <div :class="[tour.class_name]" class="pt-3 text-white border-radius-7 mb-3 font-weight-bolder pb-2">
                            <div class="row m-0 pr-2 pl-2">
                                <div class="col-sm-8">
                                    <label class="f-12">Tour</label>
                                    <p>{{ tour.tour.itinerary.title }}</p>
                                </div>
                                <div class="col-sm-4">
                                    <div class="row">
                                        <div class="col">
                                            <label class="f-12">Date</label>
                                            <p>{{ tour.tour.tour_start_date }}</p>
                                        </div>
                                        
                                        <div class="col text-sm-right">
                                            <label class="f-12">Status</label>
                                            <p>{{ tour.tour.status }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div :class="[tour.class_name]" class="pt-3 text-white border-radius-7 mb-3 font-weight-bolder pb-2">
                        <div class="row m-0 pr-2 pl-2">
                            <div class="col-sm-8">
                                <label class="f-12">Tour</label>
                                <p>{{ tour.tour.itinerary.title }}</p>
                            </div>
                            <div class="col-sm-4">
                                <div class="row">
                                    <div class="col">
                                        <label class="f-12">Date</label>
                                        <p>{{ tour.tour.tour_start_date }}</p>
                                    </div>
                                    
                                    <div class="col text-sm-right">
                                        <label class="f-12">Status</label>
                                        <p>{{ tour.tour.status }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    name:"TourList",
    data(){
        return{
            tours:'',
        }
    },
    created(){
        if(this.$cookies.get('escort_id') == undefined){
            this.$router.push('/escort/login');
        }
        this.tourList();
    },
    methods:{
        tourList(){
            var api = `/escort/tour-list/${this.$cookies.get('escort_id')}`;
            axios.get(api).then(response=>{
                this.tours = response.data;
                moment.suppressDeprecationWarnings = true;
                for(var i=0;i<this.tours.length;i++){
                    var today = new Date();

                    var today_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    
                    var start_date = moment(this.tours[i].tour.tour_start_date).format("YYYY-MM-DD");
                    var end_date = moment(this.tours[i].tour.tour_end_date).format("YYYY-MM-DD");
                    today_date = moment(today_date).format("YYYY-MM-DD");
                    
                    if(today_date <= end_date && today_date >= start_date){
                        this.tours[i].tour.status = 'Current';
                        this.tours[i].class_name = 'bg-green';
                    }
                    else if (today_date < start_date){
                        this.tours[i].tour.status = 'Upcomming';
                        this.tours[i].class_name = 'bg-yellow';
                    }else{
                        this.tours[i].tour.status = 'Ended';
                        this.tours[i].class_name = 'bg-red';
                    }
                }
            })
        },
        logout(){
            this.$cookies.remove('escort_id');
            this.$cookies.remove('escort_name');
            this.$cookies.remove('tour_code');          
            this.$router.push('/escort/login');
        },
        goToDashboard(tour_code){
            this.$store.dispatch('setTourCode',tour_code);
            this.$router.push('/escort/dashboard');
        }
    }
}
</script>