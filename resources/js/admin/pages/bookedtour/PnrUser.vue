<template>
    <div class="pnrstudent simple-form">
        <div id="printMe" v-if="transport_info">
            <div class="">
                <div class="row pt-2">
                    <div class="col-sm-6">
                        <h4>{{ transport_info.name }} - ( {{ transport_info.code }} )</h4>
                        <p><b>{{ transport_info.source }} - {{ transport_info.destination}}</b></p>
                    </div>
                    <div class="col-sm-6">
                        <p><b>Tour Code</b> : {{ $route.params.tour_id }}</p>
                        <p><b>Time : </b> {{ transport_info.departure }} - {{ transport_info.arrival}}</p>
                    </div>
                </div>
                
                <p class="text-center"><b>{{ heading }}</b></p>
            </div>
            <table class="table table-bordered mt-3 display-hidden">
                <thead>
                    <th>User Name</th>
                    <th>PNR Number</th>
                </thead>
                <tbody>
                    <tr v-for="(user,index) in resultQuery" :key="index">
                        <td>{{ user.name }}</td>
                        <td>{{ user.pnr_number }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row justify-content-end">
            <div class="col-sm-4">
                <div class="input-group">
                    <input
                    class="form-control py-2 border-right-0 border"
                    type="search"
                    value="search"
                    id="example-search-input"
                    v-model="searchQuery"
                    placeholder="Search .."
                    />
                    <span class="input-group-append">
                    <button class="btn btn-outline-secondary border-left-0 border" type="button">
                        <i class="fa fa-search"></i>
                    </button>
                    </span>
                </div>
            </div>
        </div>
        
        <hr class="pb-2">
        <div class="row mb-1" v-for="(user,index) in resultQuery" :key="user.id">
            <div class="col-sm-1 text-center pt-1">
                <span>{{ ++index }}</span>
            </div>
            <div class="col-sm-5 pt-1">
                <input type="text" :value="user.name" readonly class="pl-2">
            </div>
            <div class="col-sm-5">
                <select class="form-control" v-model="user.pnr_id">
                    <option v-for="pnr in pnrList" :key="pnr.pnr_number" :value="pnr.id">{{ pnr.pnr_number }}</option>
                </select>
            </div>
            <div class="col-sm-1">
                <img
                v-if="update_task == true"
                class="edit"
                :src="`/assets/front/icons/update.png`"
                @click="update_row(user.pnr_id,user.id)"
              />
            </div>
        </div>
        <div class="row justify-content-center mt-4 mb-2">
            <div class="col-sm-4" v-if="update_task == false">
                <button type="button" class="btn text-white p-1" 
                @click="addData()">Submit</button>
            </div>
            <div class="col-sm-3 mt-4" v-else>
                <button type="button" class="btn text-white p-1" @click="print">Print</button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            pnrList:{},
            userList:{},
            transport_info:{},
            total_row:[],
            update_task:false,
            heading:'Assign PNRs To Users',
            searchQuery:null
        }
    },
    mounted(){
        this.getPnr();
        this.getTrain();
        this.getPnrUser();
    },
    methods:{
        getTrain(){
            if(this.$route.params.transport == 'train'){
                var api = 'api/bookedtrains/'+this.$route.params.id+'/edit';
            }else if(this.$route.params.transport == 'flight'){
                var api = 'api/bookedflights/'+this.$route.params.id+'/edit';
            }else{
                var api = 'api/bookedbuses/'+this.$route.params.id+'/edit';
            }
            axios.get(api).then((response) =>{
                this.headerFormat(response.data);

            })
        },

        getPnr() {
            var api = "/api/pnrs/get";
            var data = {
                transport_id:this.$route.params.id,
                tour_code : this.$route.params.tour_id,
                transport_type: this.$route.params.transport
            };
            axios.post(api, data).then((response) => {
                    this.pnrList = response.data;
                })
                .catch((error) => {
                this.handleError(error);
            });
        },
        
        getPnrUser() {
            var api = "/api/pnruser/get";
            var data = {
                transport_id:this.$route.params.id,
                tour_code : this.$route.params.tour_id,
                transport_type: this.$route.params.transport
            };
            axios.post(api, data).then((response) => {
                    if(response.data.length>0){
                        this.update_task = true;
                        this.total_row = [];
                        
                        this.total_row = response.data; 
                    }else{
                        this.getUser();
                    }
                })
                .catch((error) => {
                this.handleError(error);
            });
        },

        getUser() {
            var api = "/api/touruser-list";
            var data = {tour_id : this.$route.params.tour_id };
            axios.post(api, data).then((response) => {
                    this.formate(response.data);
                })
                .catch((error) => {
                this.handleError(error);
            });
        },

        formate(data){
            data.forEach(user => {
                this.total_row.push({
                    'user_id': user.user.id,
                    'name' : user.user.name,
                    'email' : user.user.email,
                    'pnr_id' : 0,
                    'tour_id' : this.$route.params.tour_id,
                    'transport_id': this.$route.params.id,
                    'transport_type': this.$route.params.transport,
                });
            });
        },

        addData(){
            var err = 0;
            this.total_row.forEach(row => {
                if(row.pnr_id == 0){
                    this.$swal.fire({
                        icon: "error",
                        title: "Try again",
                        text: "Please Select PNR For Every Student !",
                    });
                    err = 1;
                    return false;
                }
            });
            if(err == 1){ return false; }

            var api = "/api/add-pnr-user";
            axios.post(api, this.total_row).then((response) => {
                    this.$swal.fire({
                        icon: "success",
                        title: "Submited",
                        text: "PNRs have been assigned to each student !",
                    });
                    this.update_task = true;
                })
                .catch((error) => {
                this.handleError(error);
            });
        },

        update_row(pnr,id){
            var data = {
                id:id,
                pnr_id:pnr
            };
            var api = "/api/update-pnruser";
            axios.post(api,data).then((response) => {
                    this.$swal.fire({
                        icon: "success",
                        title: "Updated",
                        text: "PNRs Updated !",
                    });
                })
                .catch((error) => {
                this.handleError(error);
            });
        },

        print () {
        // Pass the element id here
        this.$htmlToPaper('printMe');
        },

        headerFormat(data){
            console.log(data);
            if(this.$route.params.transport == 'train'){
                this.transport_info={
                    'name':data.train.name,
                    'code': data.train.code,
                    'source':data.source,
                    'destination':data.destination,
                    'departure':data.departure,
                    'arrival':data.arrival
                }
            }
            
            if(this.$route.params.transport == 'flight'){
                this.transport_info={
                    'name':data.flight.name,
                    'code': data.flight.code,
                    'source':data.source,
                    'destination':data.destination,
                    'departure':data.departure,
                    'arrival':data.arrival
                }
            }
            
            if(this.$route.params.transport == 'bus'){
                this.transport_info={
                    'name':data.bus.company_name,
                    'code': data.bus.seater+' seater',
                    'source':data.source,
                    'destination':data.destination,
                    'departure':data.departure,
                    'arrival':data.arrival
                }
                this.heading = 'Assign Bus To Users';
            }
        }
        
    },
    computed: {
        resultQuery() {
        if (this.searchQuery) {
            return this.total_row.filter((item) => {
            return this.searchQuery
                .toLowerCase()
                .split(" ")
                .every((v) => item.pnr_number.toLowerCase().includes(v));
            });
        } else {
            return this.total_row;
        }
    },
  },
}
</script>