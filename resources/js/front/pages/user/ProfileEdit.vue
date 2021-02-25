<template>
  <div>
    <profileedit-student v-if="isStudent" />
    <profileedit-teacher v-if="isTeacher" />
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
    ProfileeditStudent: () => import(/* webpackChunkName: "js/front/StudentProfileEdit" */ '@/front/pages/user/student/ProfileEdit.vue'),
    ProfileeditTeacher: () => import(/* webpackChunkName: "js/front/TeacherProfileEdit" */ '@/front/pages/user/teacher/ProfileEdit.vue')
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
