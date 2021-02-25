<template>
    <layout-table>
        <template #back>
            <img class="back-icon cursor-pointer" @click="$router.go(-1)" src="/assets/front/icons/back.png">
        </template>
        <template #title>
            Number of Pax
        </template>
        <template #table-head>
            <th class="border-0">Gender</th>
            <th class="border-0 text-center">Passenger</th>
        </template>
        <template #table-body v-if="pax">
            <tr>
                <td class="border-0">Male</td>
                <td class="text-center border-0">{{ pax.male }}</td>                
            </tr>
            <tr>
                <td class="border-0">Female</td>
                <td class="text-center border-0">{{ pax.female }}</td>                
            </tr>
            
            <tr>
                <td>Total Number of Pax</td>
                <td class="text-center">{{ total }}</td>                
            </tr>

        </template>

        
        <template #table-body v-else>
            <tr class="text-center">
                No Pax data available
            </tr>
        </template>


        <template #footer>
            <hr />
            <div class="p-2">
                <div class="row">
                    <div class="col">
                        <p><b>Present Male : {{ present_male}}</b>
                        <div class="form-group">
                            <label for="total_male">Absent Male</label>
                            <input type="number" class="form-control" :placeholder="`Example : 0`" v-model="form.absent_male">
                        </div>
                    </div>
                    
                    <div class="col">
                        <p><b>Present Female : {{ present_female }}</b>
                        <div class="form-group">
                            <label for="total_male">Absent Female</label>
                            <input type="number" class="form-control" :placeholder="`Example : 0`" v-model="form.absent_female">
                        </div>
                    </div>
                </div>
                <p><b>Present pax</b> = {{ present_female + present_male }}</p>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea class="form-control" rows="6" :placeholder="`Write your message...`" v-model="form.message"></textarea>
                </div>
                <div class="row justify-content-center">
                    <div class="col-sm-4" @click="submitForm()">
                        <submit-button class="btn-block">submit</submit-button>
                    </div>
                </div>
            </div>
        </template>
    </layout-table>
</template>
<script>
import LayoutTable from '@/escort/components/LayoutTable'
import SubmitButton from '@/escort/components/SubmitButton'
import { mapState } from 'vuex'
export default {
    components:{
        LayoutTable,
        SubmitButton
    },
    data(){
        return{
            form:{
                tour_code:'',
                total_male : 0,
                total_female : 0,
                absent_male : '',
                absent_female : '',
                message : '',
                escort_id: '',
            }
        }
    },
    watch:{
        pax:function(){
            this.form.tour_code = this.$store.getters.getTourCode;
            this.form.total_male = this.pax.male;
            this.form.total_female = this.pax.female;
        }
    },
    created(){
        this.$store.dispatch('getPax');
        this.getPax();
        this.form.escort_id = this.$cookies.get('escort_id');
    },
    methods:{
        getPax(){
            axios.get('/escort/pax/get/'+this.$store.getters.getTourCode).then(res => {
                this.form.absent_male = res.data.absent_male;
                this.form.absent_female = res.data.absent_female;
                this.form.message = res.data.message;
            })
        },

        submitForm(){
            axios.post('/escort/pax/store',this.form).then(res => {
                this.$toast.fire({
                    icon: "success",
                    title: "Successfull!!!"
                });
            })
        }
    },
    computed:{
        ...mapState(['pax']),
        total(){
            return this.pax.male + this.pax.female;
        },        
        present_male(){
            if(this.form.total_male >= this.form.absent_male){
                return this.form.total_male -  this.form.absent_male;
            }else{
                this.form.absent_male = 0;
                return this.form.total_male;
            }
        },
        
        present_female(){
            if(this.form.total_female >= this.form.absent_female){
                return this.form.total_female -  this.form.absent_female;
            }else{
                this.form.absent_female = 0;
                return this.form.total_female;
            }
        },


    }
}
</script>