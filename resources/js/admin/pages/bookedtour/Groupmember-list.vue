<template>
  <!--************************************************
      Author:@Ajay
  ****************************************************-->
  <div class="container bg-white">
    <div class="AddGroup p-t-15">
      <div class="row text-center text-muted pt-2">
        <div class="col p-0 m-0">
          <span class="mb-0 pointer" @click="navigateTab(0)">Student</span>
          <hr :class="active ? 'active_tab' : ''" />
        </div>
        <div class="col p-0 m-0">
          <span class="mb-0 pointer" @click="navigateTab(1)">Teacher</span>
          <hr :class="active ? '' : 'active_tab'" />
        </div>
      </div>
      <div v-if="navigate == 0">
        <student-layout />
      </div>
      <div v-if="navigate == 1">
        <teacher-layout />
      </div>
    </div>
  </div>
</template>

<script>
import StudentLayout from '@/admin/components/tour/StudentExcelUpload';
import TeacherLayout from '@/admin/components/tour/TeacherExcelUpload';
export default {
  name: "AddGroup",
  components:{
    'student-layout':StudentLayout,
    'teacher-layout':TeacherLayout,
  },
  data() {
    return{
      navigate:0,
      active:true,
    }
  },
  methods:{
    navigateTab(no){
      this.navigate = no;
      if(this.navigate == 0){
        this.active = true;
      }else{
        this.active = false;
      }
    }
  }
};
</script>