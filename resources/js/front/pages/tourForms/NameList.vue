<template>
  <!--************************************************
      Author:@Manas
  ****************************************************-->
  <div class="container bg-white">
    <div class="AddGroup p-t-15">
      <div>
        <form-layout />
      </div>
    </div>
  </div>
</template>

<script>
import FormLayout from '@/front/components/tour/TempExcelUpload';
export default {
  name: "NameList",
  components:{
    'form-layout':FormLayout,
  },
  data() {
    return{
     
    }
  },
  methods:{
   
  }
};
</script>