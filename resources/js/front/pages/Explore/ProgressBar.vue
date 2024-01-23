<template>
    <!--************************************************
    Author:@Rahul Rawat
    ****************************************************-->
    <errorState :imgName="'explore_destination_500x500.png'" v-if="apiFailed"/>
    <div v-else>
      <main>
        <div class="container">
          <Transition name="bounce">
            <div class="card loader_fixed" v-if="fact">
                <div class="card-body text-center">
                  <img class="loading-img" :src="$gbiAssets+'/images/icons/loader.gif'" />
                    <h1 class="">{{ fact.name }}</h1>
                    <h4 class="card-text">{{ fact.description }}</h4>
                </div>
            </div>
          </Transition>
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
        intervalId:'',
      };
    },
    
    
    methods: {        
        async fact_api(){
            await this.$axios.get("/api/random-fact").then((response) => {
                if(!response.data){
                    this.apiFailed = true
                }
                 this.fact = response.data;
            });
        }
    },
    watch: {
    // whenever question changes, this function will run
    intervalId(newQuestion, oldQuestion) {
        if (newQuestion.includes('?')) {
          this.getAnswer()
        }
      }
    },
    mounted() { 
      let currentObj = this;
      this.intervalId = setInterval(() => {
        currentObj.fact_api();
      }, 2000);
    }, 

    // clearInterval(this.intervalId);

  
  };
  
  </script>
  
  <style scoped>
  .loader_fixed{
    margin:auto !important;
    left:0 !important;
    right:0 !important;
    top:30vh !important;
    position:fixed !important;
  }
</style>
  