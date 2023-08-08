<template>
  <div>
    <!-- <button @click="generate">Generate and Bound to Lat Lngs</button> -->

    <GmapMap v-if="cEnd" style="width: 100%; height: 500px;" :zoom="mapZoom" :center="{ lat: sights[this.next+1].latLng.lat, lng: sights[this.next+1].latLng.lng }"
        ref="map">
      <GmapMarker v-if="cStart" :position="cStart.latLng" @click="unShowSights()" label="H"/>
      <GmapMarker v-if="cEnd" :position="cEnd.latLng" @click="showSights()" label="D"/>
      <!-- <GmapMarker v-if="end2" :position="end2.latLng"/>
      <GmapMarker v-if="end3" :position="end3.latLng"/>
      <GmapMarker v-if="end4" :position="end4.latLng"/> -->
      <GmapPolyline v-if="curvedPath" :path="curvedPath" />
    </GmapMap>
  </div>
</template>

<script>
import {range} from 'lodash'

export default {
  name: "Maps",
  data () {
    return {
      //markers: [],
      place: null,
      cStart: null,
      cEnd: null,
      sights: null,
      mapZoom: 8,
      next: 0
    }
  },
  props: [ 'start', 'end', 'end2', 'end3', 'end4' ],
  mounted() {
    this.cStart = { ...this.start };
    this.cEnd = { ...this.end };
    this.sights = [ this.start, this.end, this.end2, this.end3, this.end4]
    //console.log(this.next);
  },
  methods: {
    showSights(){
      if(this.next+1 < this.sights.length-1){
        this.next++
        this.cStart = { ...this.sights[this.next] }
        this.cEnd = { ...this.sights[this.next+1] }
        this.mapZoom = 10
      }
    },
    unShowSights(){
      if(this.next > 0){
        this.next--
        this.cStart = { ...this.sights[this.next] }
        this.cEnd = { ...this.sights[this.next+1] }
        this.mapZoom = 10
      } else {
        this.mapZoom = 8
      }
    }

  },
  computed: {
    curvedPath () {
      /*
        FIXME: This formula will work for short distances away from
          the poles. It will not work once the curvature of the earth is
          too great
      */
      if (this.cStart && this.cEnd) {
        return range(100)
          .map(i => {
            const tick = i / 99
            /* Bezier curve -- set up the control points */
            const dlat = this.cEnd.latLng.lat - this.cStart.latLng.lat
            const dlng = this.cEnd.latLng.lng - this.cStart.latLng.lng
            /*const cp1 = {
              lat: this.start.latLng.lat + 0.33 * dlat + 0.33 * dlng,
              lng: this.start.latLng.lng - 0.33 * dlat + 0.33 * dlng,
            }
            const cp2 = {
              lat: this.end.latLng.lat - 0.33 * dlat + 0.33 * dlng,
              lng: this.end.latLng.lng - 0.33 * dlat - 0.33 * dlng,
            }*/

            const cp1 = {
              lat: this.cStart.latLng.lat,
              lng: this.cStart.latLng.lng,
            }
            const cp2 = {
              lat: this.cEnd.latLng.lat,
              lng: this.cEnd.latLng.lng,
            }
            /* Bezier curve formula */
            return {
              lat:
                (tick * tick * tick) * this.cStart.latLng.lat +
                3 * ((1 - tick) * tick * tick) * cp1.lat +
                3 * ((1 - tick) * (1 - tick) * tick) * cp2.lat +
                ((1 - tick) * (1 - tick) * (1 - tick)) * this.cEnd.latLng.lat,
              lng:
                (tick * tick * tick) * this.cStart.latLng.lng +
                3 * ((1 - tick) * tick * tick) * cp1.lng +
                3 * ((1 - tick) * (1 - tick) * tick) * cp2.lng +
                ((1 - tick) * (1 - tick) * (1 - tick)) * this.cEnd.latLng.lng,

              /*lat:
                this.start.latLng.lat +
                3 * ((1 - tick) * tick * tick) +
                3 * ((1 - tick) * (1 - tick) * tick) +
                ((1 - tick) * (1 - tick) * (1 - tick)) * this.end.latLng.lat,
              lng:
                this.start.latLng.lng +
                3 * ((1 - tick) * tick * tick) +
                3 * ((1 - tick) * (1 - tick) * tick)  +
                ((1 - tick) * (1 - tick) * (1 - tick)) * this.end.latLng.lng,*/
            }
          })
      }
    }
  },
}
</script>