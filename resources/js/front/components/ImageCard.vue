<template>
  <div class="row">
    <div class="col-12 col-sm-8 col-md-6 col-lg-4 fullimagecard" v-for="data in gallery" :key="data.id">
      <router-link :title="data.images[0].alt" :to="{ name: 'images', params:{slug:data.slug}}">
        <div class="card">
          <img
          class="card-img card-image"
          :src="`/images/gallery/${data.images[0].path}`"
          :alt="data.images[0].alt"
          />
          <div
          class="card-img-overlay text-white d-flex align-content-end flex-wrap p-0">
              <div class="card-text-data p-3 bg-transparent-card w-100">
                  <h6 class="card-subtitle mb-2">{{ data.school.school_name}}</h6>
                  <p class="card-text">{{ data.title}}</p>
              </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
    props:['gallery'],
}
</script>