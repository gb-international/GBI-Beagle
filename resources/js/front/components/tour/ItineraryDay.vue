<template>
  <div>
    <span class="underline">
      <b>Day {{ itinerary.day }}</b>
    </span>
    <span v-if="itinerary.day_source != itinerary.day_destination">
      <b
        >{{ itinerary.day_source.toUpperCase() }} -
        {{ itinerary.day_destination.toUpperCase() }}</b
      >
    </span>
    <a target="_blank" href="https://www.totoprayogo.com/#" v-else>{{
      itinerary.day_source.toUpperCase()
    }}</a>
    <span class="float-right"></span>
    <p v-html="itinerary.day_description"></p>
  </div>
</template>
<script>
export default {
    props:{
        itinerary:{
            required:true,
        }
    }
}
</script>