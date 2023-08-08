<template>
  <div>
    <!-- <button @click="generate">Generate and Bound to Lat Lngs</button> -->

    <GmapMap style="width: 600px; height: 400px;" :zoom="1" :center="{lat: 0, lng: 0}"
        ref="map">
      <GmapMarker v-for="(marker, index) in markers"
        :key="index"
        :position="markers[index].results[0].geometry.location"
        />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: "Maps",
  data () {
    return {
      //markers: [],
      place: null,
    }
  },
  props: [ 'markers' ],
  mounted() {
    console.log(this.markers[0].results[0].geometry.location);
  },
  watch: {
    markers(markers) {
      if (markers.length > 2) {
        const bounds = new google.maps.LatLngBounds()
        for (let m of markers) {
          bounds.extend(m.latLng)
        }
        this.$refs.map.fitBounds(bounds)
      }
    }
  },
  methods: {
    generate() {
      const spread = Math.random() + 0.001
      this.center = {
        lat: 1.38 + (Math.random() - 0.5) * spread,
        lng: 103.8 + (Math.random() - 0.5) * spread,
      }
      this.markers = _.range(30)
        .map(m => ({
          latLng: {
            lat: this.center.lat + (Math.random() - 0.5) * spread,
            lng: this.center.lng + (Math.random() - 0.5) * spread,
          }
        }))
        console.log(this.markers)
    }
  }
}
</script>