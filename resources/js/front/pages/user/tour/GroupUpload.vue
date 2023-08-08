<template>
  <!--************************************************
      Author:@Ajay
  ****************************************************-->
  <div class="container bg-white">
    <div class="AddGroup p-t-15">
    <img class="img w-20 mr-2 link mb-2" :src="$gbiAssets+'/images/icons/back.png'" @click="$router.go(-1)"/>
      <div class="row text-center text-muted pt-2">
        <div class="col p-0 m-0">
          <span class="mb-0 pointer link" @click="navigateTab(0)">Student List</span>
          <hr :class="active ? 'active_tab' : ''" />
        </div>
        <div class="col p-0 m-0">
          <span class="mb-0 pointer link" @click="navigateTab(1)">Teacher List</span>
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
import StudentLayout from '@/front/components/tour/StudentExcelUpload';
import TeacherLayout from '@/front/components/tour/TeacherExcelUpload';
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