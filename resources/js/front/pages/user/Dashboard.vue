<template>
  <div>
    <dashboard-student v-if="isStudent" />
    <dashboard-teacher v-if="isTeacher" />
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
    DashboardStudent: () => import(/* webpackChunkName: "js/front/DashboardStudent" */ '@/front/pages/user/student/Dashboard.vue'),
    DashboardTeacher: () => import(/* webpackChunkName: "js/front/DashboardTeacher" */ '@/front/pages/user/teacher/Dashboard.vue')
  },
  created(){
    var user = this.$cookies.get('user');
    if(user.user_profession == 'student'){
      this.isStudent = true;
    }
    
    if(user.user_profession == 'teacher'){
      this.isTeacher = true;
    }

  }

}
</script>
