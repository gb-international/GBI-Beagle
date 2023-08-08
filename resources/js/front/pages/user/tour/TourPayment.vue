<template>
  <div>
    <tour-payment-student v-if="isStudent" />
    <tour-payment-teacher v-if="isTeacher" />
    <tour-payment-corporate v-if="isCorporate" />
  </div>
</template>

<script>
export default {
  data(){
    return{
      isStudent:false,
      isTeacher:false,
      isCorporate:false,
    }
  },
  components: {
    TourPaymentStudent: () => import(/* webpackChunkName: "js/front/TourPaymentStudent1" */ '@/front/pages/user/student/tour/TourPayment.vue'),
    TourPaymentTeacher: () => import(/* webpackChunkName: "js/front/TourPaymentTeacher" */ '@/front/pages/user/teacher/tour/TourPayment.vue'),
    TourPaymentCorporate: () => import(/* webpackChunkName: "js/front/TourPaymentCorporate" */ '@/front/pages/user/corporate/tour/TourPayment.vue')
  },
  created(){
    var user = this.$cookies.get('user');
    if(user.client_type == 'teacher'){
      this.isTeacher = true;
    }

    else if(user.client_type == 'student'){
      this.isStudent = true;
    }
    
    else if(user.client_type == 'corporate'){
      this.isCorporate = true;
    }

  }

}
</script>
