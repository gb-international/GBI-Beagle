<template>
    <router-link
        :to="url"
        class="edit_link"
        >
        <span class="badge badge-primary incrIconSize" title="Booking Detail"
            ><i class="fas fa-book-reader"></i
        ></span>
        </router-link>
</template>
<script>
    export default{
        name:"BookingDetailButtonGBI",
        props:['url'],
        data(){
            return{

            }
        }
    }
</script>