<template>
    <!--************************************************
    Author:@Rahul Rawat
    ****************************************************-->
    <errorState :imgName="'explore_destination_500x500.png'" v-if="apiFailed"/>
    <div v-else>
  
      <main>
        <div class="container">
            <div class="justify-content-center">
                <div class="card" v-if="fact && timeData>0">
                    <div class="card-body">
                        <h5 class="card-title">{{ fact.name }}</h5>
                        <p class="card-text">{{ fact.description }}</p>
                    </div>
                </div>
                <button class="mt-5" @click="search">Search</button>
            </div>
        </div>

      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: "exploreDestination",

    components: {

    },
    data() {
      return {
        apiFailed: false,
        fact: '',
        timeData:'',
      };
    },
    
    
    methods: {        
        async search(){
            await this.$axios.get("/api/random-fact").then((response) => {
                if(!response.data){
                    this.apiFailed = true
                }
                 this.fact = response.data;

            });
            this.timeData = 12;
             setInterval(() => {
                this.timeData -= 1; 
            }, 1000);
        }
    },
  };
  
  </script>
  
  <style scoped>
    .card {
        border: 0.5px solid gray !important;
        color: #000;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 3px;
        /* width: 50%; */
    }
</style>
  