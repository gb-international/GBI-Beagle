<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div class="star-rating">
    <span v-for="n in max" :key="n">&star;</span>
    <div class="star-rating__current" :style="{width: getRating + '%'}">
      <span v-for="n in max" :key="n">&starf;</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["max", "current"],
  data() {
    return {};
  },
  computed: {
    getRating: function() {
      return (this.current / this.max) * 100;
    }
  }
};
</script>