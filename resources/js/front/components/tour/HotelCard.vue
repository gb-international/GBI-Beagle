<template>
  <div class="hotel-card">
    <img :src="hotel.hotel.image" />
    <div class="row">
      <div class="col hotel_info">
        <div class="rating-hotel">
          <p>
            <b>Hotel Name</b>
            <label>
              <div class="star-rating">
                <span v-for="n in max" :key="n.id">&star;</span>
                <div
                  class="star-rating__current"
                  :style="{
                    width: getRating(hotel.hotel.type) + '%',
                  }"
                >
                  <span v-for="n in integer(hotel.hotel.type)" :key="n.id"
                    >&starf;</span
                  >
                </div>
              </div>
            </label>
          </p>
        </div>

        <p>
          {{ hotel.hotel.name }}
          <label>
            <b>Check in date</b>
            : {{ dateFormat(hotel.check_in) }}
          </label>
        </p>
        <p>
          <b>Days stay</b>
          : {{ days(hotel.check_in, hotel.check_out) }}
          <label>
            <b>Check out date</b>
            : {{ dateFormat(hotel.check_out) }}
          </label>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:{
        hotel:{
            required:true,
        }
    },
    data(){
        return{
            max: 5,
        }
    },
    methods:{
        getRating: function (current) {
          return (current / this.max) * 100;
        },
        integer(num) {
            return parseInt(num);
        },
        dateFormat(date) {
            return new Date(date).toDateString();
        },
        days(date1, date2) {
            var date1 = new Date(date1);
            var date2 = new Date(date2);
            var diffTime = Math.abs(date2 - date1);
            var diff = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diff - 1;
        },
    }
}
</script>