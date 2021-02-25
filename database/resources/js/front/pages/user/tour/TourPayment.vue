<template>
  <div>
    <tour-payment-student v-if="isStudent" />
    <tour-payment-teacher v-if="isTeacher" />
  </div>
</template>

<script>
export default {
  data(){
    return{
      isStudent:false,
      isTeacher:false,
    }
  },
  components: {
    TourPaymentStudent: () => import(/* webpackChunkName: "js/front/TourPaymentStudent1" */ '@/front/pages/user/student/tour/TourPayment.vue'),
    TourPaymentTeacher: () => import(/* webpackChunkName: "js/front/TourPaymentTeacher" */ '@/front/pages/user/teacher/tour/TourPayment.vue')
  },
  created(){
    var user = this.$cookies.get('user');
    if(user.is_incharge == '1'){
      this.isTeacher = true;
    }
    
    if(user.is_incharge == '0'){
      this.isStudent = true;
    }

  }

}
</script>
