<template>
  <div>
    <img
      class="back-icon cursor-pointer pl-4"
      @click="back()"
      :src="$gbiAssets+'/assets/front/icons/back.png'"
      title="Go Back"
    />
  </div>
</template>
<script>
export default{
  name:"AdminNavTop",
  data() {
    return{
    }
  },
  methods:{
    back(){
      if(this.$router.currentRoute.path != '/'){
        this.$router.back();
      }
    }
  }
}
</script>

