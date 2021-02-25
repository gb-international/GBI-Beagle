<template>
    <layout>
        <template #back>
            <img class="back-icon cursor-pointer" @click="$router.go(-1)" src="/assets/front/icons/back.png">
        </template>
        <template #title_heading>
            Restaurant
        </template>
        <template #body>
            <div class="whitesomke p-3">
                <div class="row">
                    <div class="col"><b>Restaurant Name</b></div>
                    <div class="col"><b>Place</b></div>
                </div>
                <hr />
                <div v-if="restaurants.length > 0">
                    <div class="row mb-3" v-for="restaurant in restaurants" :key="restaurant.id">
                        <div class="col">{{ restaurant.restaurant.name }}</div>
                        <div class="col">{{ restaurant.restaurant.address }}</div>
                    </div>
                </div>
                <div v-else>
                    <p class="text-center">No Restaurant available</p>
                </div>
            </div>
        </template>

        <template #footer>

        </template>
    </layout>
</template>
<script>
import Layout from '@/escort/components/Layout'
import { mapState } from 'vuex';
export default {
    components:{
        'layout':Layout
    },
    created(){
        this.$store.dispatch('getRestaurants');
    },
    computed:{
        ...mapState(['restaurants']),
    }
}
</script>