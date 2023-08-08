<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
<div id="PNR">
    <p>Enter {{ label }} Number </p>
    Tras typ : {{ transport_type }}
    Tour code : {{ tour_code }}
    <li v-for="f in total_row" :key="f">
        Tras typ : {{ f.transport_type }}
        Tour code : {{ f.tour_code }}
        Trans ID : {{ f.transport_id }}
    </li>
        <form class="form simple-form">

            <div class="row">
                <div class="col-sm-6" v-for="(row,index) in total_row" :key="index">
                    <div class="row mb-2">
                        <div class="col pt-1">{{ ++index }}</div>
                        <div class="col-sm-10">
                            <input class="form-control" type="text" v-model="row.pnr_number">
                        </div>
                    </div>
                </div>
            </div>


            <div class="row mt-4">
                <div class="col-sm-5">
                    <button type="button" class="btn" @click="submitForm()">SAVE</button>
                </div>
                <div class="col-sm-3 pt-2 text-right">Add Row :</div>
                
                <div class="col-sm-4">
                    <div class="input-group">
                        <input type="number" class="form-control" v-model="row_input" placeholder="1">
                        <div class="input-group-append">
                        <button class="btn" type="button" @click="add_row()">
                            <i class="fa fa-search"></i>
                        </button>
                        </div>
                    </div>
                </div>

            </div>
        </form>

  </div>
</template>
<script>
export default {
    name:"PNRListSHOw",
  props: ["transport_type","transport_id","tour_code"],
  data() {
    return {
        label:'PNRs',
        count:2,
        row_input:1,
        total_row: [
        {
          transport_id: this.transport_id,
          transport_type: this.transport_type,
          tour_code: this.tour_code,
          pnr_number: ""
        },
        {
          transport_id: this.transport_id,
          transport_type: this.transport_type,
          tour_code: this.tour_code,
          pnr_number: ""
        },
        ]
    };
  },
  mounted(){
        this.labelChange();
  },
    watch:{
      transport_type:function(){
         this.labelChange(); 
      },
    },
    methods:{
        labelChange(){
            if(this.transport_type == 'bus'){
              this.label = 'Buses';
            }else{
                this.label = 'PNRs';
            }
        },
        add_row() {
            for (var i = 0; i < this.row_input; i++) {
                this.total_row.push({
                    transport_id: this.transport_id,
                    transport_type: this.transport_type,
                    tour_code: this.tour_code,
                    pnr_number: ""
                });
            }
            this.row_input = "";
        },
        submitForm(){
            for (var i = this.total_row.length - 1; i >= 0; i--) {
                if (this.total_row[i]["pnr_number"] == '') {
                this.total_row.splice(i, 1);
                }
            }
            var path = `/api/pnrs`;
            axios.post(path, this.total_row)
                .then(response => {
                    this.total_row = [{ transport_id: this.transport_id,transport_type: this.transport_type,tour_code: this.tour_code,pnr_number: ""},{ transport_id: this.transport_id,transport_type: this.transport_type,tour_code: this.tour_code,pnr_number: "" },];
                this.$toast.fire({
                    icon: "success",
                    title: "Successfully Added !!!"
                });
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors || {};
                }
            });
        }

    }
};
</script>