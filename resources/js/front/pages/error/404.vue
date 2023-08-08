<template>
  <section class="py-5">
    <div class="container mx-auto" style="max-width: 500px; object-position: center;">
        <!--<img :src="$gbiAssets+'/assets/front/images/404error.png'" />-->
        <img :src="$gbiAssets+'/assets/errorImages/404_error_500x500.png'"/> 
    </div>
    <button class="HomeBtn" @click="$router.push('/')">Home</button>
  </section>
</template>

<script>
export default {
  name: "404"
};
</script>

<style scoped>
.HomeBtn {
  height: 42px;
  width: 120px;
  padding: 0px 20px 0px 20px;
  border: 1px solid gray;
  font-size: 16px !important;
  font-weight: 400 !important;
  color: gray;
  display: block;
  margin: 0 auto;
}
</style>