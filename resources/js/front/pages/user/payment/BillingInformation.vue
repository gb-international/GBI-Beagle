<template>
  <div>
    <billing-student v-if="isStudent" />
    <billing-teacher v-if="isTeacher" />
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
    BillingStudent: () => import(/* webpackChunkName: "js/front/BillingStudent" */ '@/front/pages/user/student/BillingInformation.vue'),
    BillingTeacher: () => import(/* webpackChunkName: "js/front/BillingTeacher" */ '@/front/pages/user/teacher/BillingInformation.vue')
  },
  created(){
    var user = this.$cookies.get('user');
    if(user.is_incharge == '0'){
      this.isStudent = true;
    }    
    if(user.is_incharge == '1'){
      this.isTeacher = true;
    }
  }

}
</script>
