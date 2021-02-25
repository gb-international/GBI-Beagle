<template>
    <div class="container p-4">
        <div class="back mb-1">
            <img class="back-icon cursor-pointer" @click="$router.go(-1)" src="/assets/front/icons/back.png">
        </div>
        <h5 class="text-muted">
            Flight
        </h5>

        <div class="pt-4 font-weight-bolder pb-4 whitesomke" v-if="flights.length>0">
            <div v-for="flight in flights" :key="flight.id">
                <div class="row m-0 pr-2 pl-2">
                    <div class="col-sm-6">
                        <label class="text-muted f-12">Flight Number & Name</label>
                        <p>{{ flight.flight.name }} {{ flight.flight_number}} </p>
                    </div>
                    <div class="col-sm-5">
                        <div class="row">
                            <div class="col">
                                <label class="text-muted f-12">Departure</label>
                                <p>{{ flight.departure }}</p>
                            </div>
                            
                            <div class="col">
                                <label class="text-muted f-12">Arrival</label>
                                <p>{{ flight.arrival }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <label class="text-muted f-12">Passengers</label>
                        <p>{{ flight.pnruser_count }}</p>
                    </div>
                </div>
                <hr class="w-95" />
            </div>
        </div>

        <div class="text-center pt-4 font-weight-bolder pb-4 whitesomke" v-else>
            No Flight available....
        </div>
        
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    created(){
        this.$store.dispatch('getFlights');
    },
    computed:{
        ...mapState(['flights']),
    }
}
</script>