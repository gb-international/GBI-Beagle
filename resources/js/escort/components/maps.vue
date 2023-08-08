<template>
  <div>
    <div class="mb-4 d-flex justify-content-center">
      <h3 class="text-center mr-4">TOUR MAP</h3>
        <button class="btn btn-reset" @click="resetMap">Reset</button>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <!-- <button @click="generate">Generate and Bound to Lat Lngs</button> -->
        <GmapMap v-if="center" style="width: 100%; height: 500px;" :zoom="mapZoom" :center="this.center" @click="changeZoom"
            ref="map">
          <GmapMarker v-if="cStart && !completed" :position="cStart.latLng" label="◉" @click="zoomSight(index, cStart)"/>
          <GmapMarker v-if="cEnd && !completed && !cEnd.mark_arrive" :position="cEnd.latLng" :label="cEnd.mark_arrive ? '✔' : '🏳️' " @click="zoomSight(index, cEnd)"/>
          <GmapMarker v-if="item.mark_arrive" v-for="(item, index) in sights" :key="item.latLng.lat" :position="item.latLng" @click="zoomSight(index, item)" :label="item.mark_arrive ? '✔' : '🏳️' "/>
          <GmapPolyline v-if="curvedPath && !completed" :path="curvedPath" />
        </GmapMap>
      </div>
    </div>
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
      next: 1,
      center: null,
      showSights: false,
      completed: false,
    }
  },
  props: [ 'start', 'end', 'aSights'],
  mounted() {
     if(this.aSights[0].stR){
      this.cStart = { ...this.aSights[0].stR };
    } else {
      this.cStart = { ...this.start };
    }
    
    if(this.aSights[0].onG){
      this.cEnd = { ...this.aSights[0].onG };
    } else {
      this.cEnd = { ...this.end };
    }

    this.center = { ...this.cEnd.latLng };
    this.sights = [ ...this.aSights ];

    if(this.aSights[0].completed){
      this.completed = true;
      this.mapZoom = 8;
      this.center = { ...this.aSights[0].stR.latLng };
    }
  },
  methods: {
    resetMap(){
      this.mapZoom = 8;
    },
    changeZoom(){
      if(this.showSights){
        this.mapZoom = 12
      } else {
        this.mapZoom = 8
      } 
    },
    zoomSight(index, item){
      this.next = index;  
      this.mapZoom = 14; 
      this.center = { lat: item.latLng.lat, lng: item.latLng.lng };
    },
    allSights(){
        this.showSights = true
        this.center = { lat: this.aSights[0].onG.lat, lng: this.aSights[0].onG.lng };
        this.sights = [ ...this.aSights ];
        this.mapZoom = 12;
        this.next = 0
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

<style scoped>
.btn-reset{
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
    border-radius: 25px;
    border: solid 2px;
    padding: 3px 22px;
    margin-top: -6px;
}
.btn-reset:hover{
	color: #fff;
    background-color: #c12a38;
    border-color: #c12a38;
}
</style>