<!-- 

This template helps us to create a View Category it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
  <section class="content">
    <div class="row pt-3 pb-4">
        <div class="col-sm-12 card_view">
            <slot name="viewdata"></slot>
            <div class="text-center">
                <back-button :url="backurl"></back-button>
            </div>            
        </div>
    </div>
  </section>
</template>
<script>
import BackButton from '@/admin/components/buttons/BackButton.vue';
export default {
    name:"ViewLayoutGBI",
    components:{
        'back-button':BackButton
    },
    props:['backurl'],
}
</script>
