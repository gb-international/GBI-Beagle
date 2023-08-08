<template>
    <div class="main_div">
        <img class="coverImg" :src="$gbiAssets+'/wonderla/wonderla_1.png' " alt="wonderla_img" />
    </div>
</template>

<style scoped>
.main_div {
    height: auto !important;
}
.coverImg {
    height: auto;
}

@media only screen and (max-width: 720px) {

  .main_div {
    height: 30vh !important;
 }
 .coverImg {
    height: auto;
}
}
</style>