<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div v-if="flights.data">
    <div v-for="(flight,index) in flights.data" :key="index">
      <div class="row align-items-center mb-20" v-if="flight.flight_date == flightDate">
        <div class="col-md-3 col">
          <p>
            <b class="underline">{{ flight.airline.name }}</b>
            <b class="text-upper">{{ list }}</b>
          </p>
          <P>
            Flying from 
            <b class="text-info">{{ flight.departure.airport }} ( {{ flight.departure.iata }} )</b>
          </P>
          <p>{{ timeFormat(flight.departure.scheduled) }}</p>
          <p>Terminal : {{ flight.departure.terminal }}, Gate : {{ flight.departure.gate }}</p>
        </div>

        <div class="col-md-6 col-sm-6 col-xm-12 order-xm-3">
          <div class="progressbar"  v-if="flight.flight_status == 'active'">
            {{ progressBar(flight.departure.scheduled,flight.arrival.scheduled)}}
            <i class="fas fa-plane-departure" :style="{ 'margin-left': progress + '%' }"></i>
            <div class="progress">
              <div class="progress-bar progress-bar-striped progress-bar-animated" :style="{ width: progress + '%' }"></div>
            </div>
            <p class="text-center">Journy time left: {{ timeCalculate(flight.arrival.estimated) }} </p>
          </div>
          <p class="text-center w-100">Flight Status : <b>{{ flight.flight_status }}</b></p>
        </div>
        

        <div class="col-md-3 col text-left">
          <p>
            <b class="underline">{{ flight.airline.name }}</b>
          </p>
          <P>
            Flying To 
            <b class="text-info">{{ flight.arrival.airport }} ( {{ flight.arrival.iata }} )</b>
          </P>
          <p>{{ timeFormat(flight.arrival.scheduled) }}</p>
          <p>Terminal : {{ flight.arrival.terminal }}, Gate : {{ flight.arrival.gate }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "FlightApp",
  props: ["list","flightDate"],
  data() {
    return {
      flights:[],
      time_left:false,
      progress: 25,
      progress_seconds:0,
    };
  },
  mounted() {
    this.apiData(this.list);
  },
  methods: {
    makeProgress() {
      if(this.progress < 100) {
        this.progress += 5;
      }
    },
    apiData(code) {
      var api ="/api/flight-detail/"+code;
      fetch(api)
        .then(response => response.text())
        .then(contents => (this.flights = JSON.parse(contents)))
        .catch(() =>
          console.log("Can’t access " + api + " response. Blocked by browser?")
        );
    },

    timeFormat(nDate) {
      var don = nDate;
      var d = new Date(don.split("T")[0]).toDateString();
      var date = don.split("T")[1];
      date = date.split("+")[0];
      date = date.split(":");
      var hours = date[0];
      var minutes = date[1];
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return d + " " + strTime;
    },

    
    progressBar(t1,t2){
      var dt1 = new Date(t1);
      var dt2 = new Date(t2);
      var total =(dt2.getTime() - dt1.getTime()) / 1000;
      var d2 = t2;
      d2 = d2.split("T");
      var hour = d2[1].split("+")[0];
      var newd = d2[0]+" "+ hour;
      d2 = new Date(newd);
      var d1 = new Date();
      var inputSeconds = (d2.getTime() - d1.getTime()) / 1000;
      var need_time = total - Math.trunc(inputSeconds);
      this.progress = Math.trunc((need_time/total)*100);
      console.log(this.progress);      
    },


    timeCalculate(d2){
      var d2 = d2.split("T");
      var hour = d2[1].split("+")[0];
      var newd = d2[0]+" "+ hour;
      d2 = new Date(newd);
      var d1 = new Date();
      var inputSeconds = (d2.getTime() - d1.getTime()) / 1000;
      this.progress_seconds = inputSeconds;
      const Days = Math.floor( inputSeconds / (60 * 60 * 24) );
        const Hour = Math.floor((inputSeconds % (60 * 60 * 24)) / (60 * 60));
        const Minutes = Math.floor(((inputSeconds % (60 * 60 * 24)) % (60 * 60)) / 60 );
        const Seconds = Math.floor(((inputSeconds % (60 * 60 * 24)) % (60 * 60)) % 60 );
        let ddhhmmss  = '';
        if (Days > 0){
            ddhhmmss += Days + ' Day ';
        }
        if (Hour > 0){
            ddhhmmss += Hour + ' Hour ';
        }

        if (Minutes > 0){
            ddhhmmss += Minutes + ' Minutes ';
        }

        if (Seconds > 0){
            ddhhmmss += Seconds + ' Seconds ';
        }
        return ddhhmmss;
    }

  }
};
</script>