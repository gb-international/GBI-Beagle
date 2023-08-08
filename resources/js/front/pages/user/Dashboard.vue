<template>
  <div>
    <dashboard-student v-if="isStudent" />
    <dashboard-teacher v-if="isTeacher" />
    <dashboard-corp v-if="isCorporate" />
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
    DashboardStudent: () => import(/* webpackChunkName: "js/front/DashboardStudent" */ '@/front/pages/user/student/Dashboard.vue'),
    DashboardTeacher: () => import(/* webpackChunkName: "js/front/DashboardTeacher" */ '@/front/pages/user/teacher/Dashboard.vue'),
    DashboardCorp: () => import(/* webpackChunkName: "js/front/DashboardCorp" */ '@/front/pages/user/corporate/Dashboard.vue'),
  },
  created(){
    var user = this.$cookies.get('user');
    if(user.user_profession == 'student'){
      this.isStudent = true;
    }
    
    if(user.user_profession == 'teacher'){
      this.isTeacher = true;
    }

    if(user.user_profession == 'corporate' || user.user_profession == 'director' || user.user_profession == 'employee'){
      this.isCorporate = true;
    }

    console.log(this.isCorporate)

  }

}
</script>
