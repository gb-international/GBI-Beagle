<template>
    <div class="escort-dashboard">
        <layout>
            <template #back>
                <img class="back-icon cursor-pointer" @click="$router.push('/escort/tour-list')" src="/assets/front/icons/back.png">
            </template>
            <template #title>
                {{ $store.getters.getTitle }}
            </template>
            <template #body>
                <div class="dashboard-body pt-4 pb-4">
                    <div class="row text-center">
                        <div class="col-sm-4 mb-3">
                            <router-link :to='`/escort/sightseeing`'><img src="/assets/admin/default/icon/sightseeing.png" class="w-100"></router-link>
                        </div>
                        
                        <div class="col-sm-4 mb-3">
                            <router-link :to='`/escort/pack`'><img src="/assets/admin/default/icon/snacks.png" class="w-100"></router-link>
                        </div>
                        
                        <div class="col-sm-4 mb-3">
                            <router-link :to='`/escort/hotel`'><img src="/assets/admin/default/icon/hotel.png" class="w-100"></router-link>
                        </div>
                        
                        <div class="col-sm-4 mb-3">
                            <router-link :to='`/escort/flight`'><img src="/assets/admin/default/icon/airlines.png" class="w-100"></router-link>
                        </div>

                        <div class="col-sm-4 mb-3">
                            <router-link :to='`/escort/bus`'><img src="/assets/admin/default/icon/bus-icon.png" class="w-100"></router-link>
                        </div>
                        
                        <div class="col-sm-4 mb-3">
                            <router-link :to='`/escort/train`'><img src="/assets/admin/default/icon/train-icon.png" class="w-100"></router-link>
                        </div>
                        
                        <div class="col-sm-4 mb-3">
                            <router-link :to='`/escort/restaurant`'><img src="/assets/admin/default/icon/restaurant.png" class="w-100"></router-link>
                        </div>
                        
                        <div class="col-sm-4 mb-3">
                            <router-link :to='`/escort/pax`'><img src="/assets/admin/default/icon/pax.png" class="w-100"></router-link>
                        </div>
                    </div>
                </div>
            </template>
        </layout>
    </div>
</template>
<script>
import layout from '@/escort/components/Layout'
export default {
    components:{
        layout
    },
    created(){
        this.$store.dispatch('loadItineraryTitle');
    },
}
</script>