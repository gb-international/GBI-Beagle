<template>
    <div>
        <!-- <div class="row">
            <div class="col-sm-6">
                <div class="form-group m-1">
                    <label for="name">Customer Name</label>
                    <input type="text" class="form-control" v-model="form.billing_customer_name">
                </div>
            </div>
        </div> -->
        
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group m-1">
                    <label for="name">Billing Name</label>
                    <input type="text" class="form-control" v-model="form.billing_name">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group m-1">
                    <label for="address">Billing Address</label>
                    <input type="text" class="form-control" v-model="form.billing_address">
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-4">
                <div class="form-group m-1">
                    <label for="city">Billing City</label>
                    <input type="text" class="form-control" v-model="form.billing_city">
                </div>
            </div>
            
            <div class="col-sm-4">
                <div class="form-group m-1">
                    <label for="state">Billing State</label>
                    <input type="text" class="form-control" v-model="form.billing_state">
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group m-1">
                    <label for="billing_zip">Billing Zip Code</label>
                    <input type="number" class="form-control" v-model="form.billing_zip">
                </div>
            </div>

        </div>
        <div class="row">
             <div class="col-sm-4">
                <div class="form-group m-1">
                    <label for="country">Billing Country</label>
                    <input type="text" class="form-control" v-model="form.billing_country">
                </div>
            </div>
        </div>
        
        <div class="row">
             <div class="col-sm-6">
                <div class="form-group m-1">
                    <label for="phone_no">Phone Number</label>
                    <input type="number" class="form-control" v-model="form.billing_tel">
                </div>
            </div>

             <div class="col-sm-6">
                <div class="form-group m-1">
                    <label for="email">Billing Email</label>
                    <input type="email" class="form-control" v-model="form.billing_email">
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            form:{
                // billing_customer_name:'',
                billing_name:'',
                billing_address:'',
                billing_city:'',
                billing_state:'',
                billing_zip:'',
                billing_country:'',
                billing_tel:'',
                billing_email:''
            }
        }
    },
    watch:{
        // 'form.billing_customer_name':function(){ this.BillingFormChanged(); },
        'form.billing_name':function(){ this.BillingFormChanged(); },
        'form.billing_address':function(){ this.BillingFormChanged(); },
        'form.billing_city':function(){ this.BillingFormChanged(); },
        'form.billing_state':function(){ this.BillingFormChanged(); },
        'form.billing_zip':function(){ this.BillingFormChanged(); },
        'form.billing_country':function(){ this.BillingFormChanged(); },
        'form.billing_tel':function(){ this.BillingFormChanged(); },
        'form.billing_email':function(){this.BillingFormChanged();}
    },
    methods:{
        BillingFormChanged(){ this.$emit("update",this.form); }
    }
}
</script>