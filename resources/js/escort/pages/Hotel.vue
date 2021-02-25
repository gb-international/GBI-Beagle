<template>
    <div class="container p-4">
        <div class="back mb-1">
            <img class="back-icon cursor-pointer" @click="$router.go(-1)" src="/assets/front/icons/back.png">
        </div>
        <h5 class="text-muted">
            Hotel
        </h5>

        <div class="hotel-body pt-4 font-weight-bolder pb-4 whitesomke" v-if="hotels.length > 0">
            <div class="hotel-data" v-for="hotel in hotels" :key="hotel.id">
                <div class="row m-0 pr-2 pl-2">
                    <div class="col-sm-6">
                        <label class="text-muted f-12">Hotel Name</label>
                        <p>{{ hotel.hotel.name }} </p>
                    </div>
                    <div class="col-sm-3">
                        <div class="row">
                            <div class="col">
                                <label class="text-muted f-12">Check In</label>
                                <p>{{ hotel.check_in}}</p>
                            </div>
                            
                            <div class="col">
                                <label class="text-muted f-12">Check Out</label>
                                <p>{{ hotel.check_out }}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-sm-3">
                        <div class="row">
             
                            <div class="col">
                                <label class="text-muted f-12">Contact Number</label>
                                <p>{{ hotel.hotel.phoneno }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="w-95" />
            </div>
        </div>

        <div class="text-center pt-4 font-weight-bolder pb-4 whitesomke" v-else>
            No Hotel available....
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    created(){
        this.$store.dispatch('getHotels');
    },
    computed:{
        ...mapState(['hotels']),
    }
}
</script>