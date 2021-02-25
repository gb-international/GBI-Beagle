<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  
  <article>
      <div class="card-titles">
        <h1>Our Journey Scrapbook</h1>
          <h4>Living the moments and cherishing the memories</h4>
      </div>
      <div class="column">
        <figure v-lazyload class="image__wrapper">
          <ImageSpinner class="image__spinner" />
          <img class="image__item img-responsive" :data-url="`https://gallery.mailchimp.com/45bfb3b660ff417ad44228191/images/855c0574-6fb4-4918-af5e-1517f452abe1.jpg`" alt="GBI image">
        </figure>
      </div> 
      <div class="column">
        <figure v-lazyload class="image__wrapper">
          <ImageSpinner class="image__spinner" />
          <img class="image__item img-responsive" :data-url="`https://gallery.mailchimp.com/45bfb3b660ff417ad44228191/images/75475cee-17ca-4cf4-a161-44c3f662eafb.jpg`" alt="GBI image">
        </figure>
      </div>
      <div class="column">
        <figure v-lazyload class="image__wrapper">
          <ImageSpinner class="image__spinner" />
          <img class="image__item img-responsive" :data-url="`https://gallery.mailchimp.com/45bfb3b660ff417ad44228191/images/35d3b6bd-e0ee-4963-a5f4-e8bd78fa6d72.jpg`" alt="GBI image">
        </figure>
      </div>
      <div class="column">
        <figure v-lazyload class="image__wrapper">
          <ImageSpinner class="image__spinner" />
          <img class="image__item img-responsive" :data-url="`https://gallery.mailchimp.com/45bfb3b660ff417ad44228191/images/109d97e1-7fd7-48f6-a8b9-3619edc0a913.jpg`" alt="GBI image">
        </figure>
      </div>
      <div class="column">
        <figure v-lazyload class="image__wrapper">
          <ImageSpinner class="image__spinner" />
          <img class="image__item img-responsive" :data-url="`https://gallery.mailchimp.com/45bfb3b660ff417ad44228191/images/c0098059-e4a9-4ffd-8563-dc2bc3b03e79.png`" alt="GBI image">
        </figure>
      </div>
      <div class="column">
        <figure v-lazyload class="image__wrapper">
          <ImageSpinner class="image__spinner" />
          <img class="image__item img-responsive" :data-url="`https://gallery.mailchimp.com/45bfb3b660ff417ad44228191/images/2b96884f-838d-4615-a636-ec8f48efe1eb.png`" alt="GBI image">
        </figure>
      </div>
      <div class="column">
        <figure v-lazyload class="image__wrapper">
          <ImageSpinner class="image__spinner" />
          <img class="image__item img-responsive" :data-url="`https://gallery.mailchimp.com/45bfb3b660ff417ad44228191/images/058b50af-0a97-487d-aa7a-041e4a240f68.png`" alt="GBI image">
        </figure>
      </div>
      <div class="column">
        <figure v-lazyload class="image__wrapper">
          <ImageSpinner class="image__spinner" />
          <img class="image__item img-responsive" :data-url="`https://gallery.mailchimp.com/45bfb3b660ff417ad44228191/images/5485fc18-6d7a-4ca4-943c-7db9d095fa24.png`" alt="GBI image">
        </figure>
      </div>
      <div class="column">
        <figure v-lazyload class="image__wrapper">
          <ImageSpinner class="image__spinner" />
          <img class="image__item img-responsive" :data-url="`https://gallery.mailchimp.com/45bfb3b660ff417ad44228191/images/0608b008-4973-4f00-a9c7-7980d5d191a1.png`" alt="GBI image">
        </figure>
      </div>
  </article>
</template>

<script>
  export default {
    name: "ImageGallery",
    data(){
      return {
        
      }
    }        
  }
</script>