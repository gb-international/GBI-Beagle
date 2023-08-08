<template>
  <!--************************************************
      Author:@Manas
  ****************************************************-->
  <div class="container bg-white">
    <div class="AddGroup p-t-15 pb-5">
      <div class="row text-center text-muted pt-2">
        <div class="col p-0 m-0">
          <span class="mb-0 pointer" @click="navigateTab(0)">School</span>
          <hr :class="active ? 'active_tab' : ''" />
        </div>
        <div class="col p-0 m-0">
          <span class="mb-0 pointer" @click="navigateTab(1)">Corporate</span>
          <hr :class="active ? '' : 'active_tab'" />
        </div>
      </div>
      <div v-if="navigate == 0">
        <school-layout />
      </div>
      <div v-if="navigate == 1">
        <corporate-layout />
      </div>
    </div>
  </div>
</template>

<script>
import School from '@/admin/components/tour/schoolTours';
import Corporate from '@/admin/components/tour/corporateTours';
export default {
  name: "ListTour",
  components:{
    'school-layout':School,
    'corporate-layout':Corporate,
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