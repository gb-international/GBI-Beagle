<template>
    <div>
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group m-1">
                    <label for="name">Shipping Name</label>
                    <input type="text" class="form-control" v-model="form.delivery_name">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group m-1">
                    <label for="address">Shipping Address</label>
                    <input type="text" class="form-control" v-model="form.delivery_address">
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-4">
                <div class="form-group m-1">
                    <label for="city">Shipping City</label>
                    <input type="text" class="form-control" v-model="form.delivery_city">
                </div>
            </div>
            
            <div class="col-sm-4">
                <div class="form-group m-1">
                    <label for="state">Shipping State</label>
                    <input type="text" class="form-control" v-model="form.delivery_state">
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group m-1">
                    <label for="zipcode">Shipping Zip Code</label>
                    <input type="number" class="form-control" v-model="form.delivery_zip">
                </div>
            </div>

        </div>
        <div class="row">
             <div class="col-sm-4">
                <div class="form-group m-1">
                    <label for="country">Shipping Country</label>
                    <input type="text" class="form-control" v-model="form.delivery_country">
                </div>
            </div>
        </div>
        
        <div class="row">
             <div class="col-sm-6">
                <div class="form-group m-1">
                    <label for="phone_no">Phone Number</label>
                    <input type="number" class="form-control" v-model="form.delivery_tel">
                </div>
            </div>

             <div class="col-sm-6">
                <div class="form-group m-1">
                    <label for="email">Shipping Email</label>
                    <input type="email" class="form-control" v-model="form.delivery_email">
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
                delivery_name:'',
                delivery_address:'',
                delivery_city:'',
                delivery_state:'',
                delivery_zip:'',
                delivery_country:'',
                delivery_tel:'',
                delivery_email:''
            }
        }
    },
    watch:{
        'form.delivery_name':function(){ this.ShippingFormChanged(); },
        'form.delivery_address':function(){ this.ShippingFormChanged(); },
        'form.delivery_city':function(){ this.ShippingFormChanged(); },
        'form.delivery_state':function(){ this.ShippingFormChanged(); },
        'form.delivery_zip':function(){ this.ShippingFormChanged(); },
        'form.delivery_country':function(){ this.ShippingFormChanged(); },
        'form.delivery_tel':function(){ this.ShippingFormChanged(); },
        'form.delivery_email':function(){ this.ShippingFormChanged(); }
    },
    methods:{
        ShippingFormChanged(){
            this.$emit("update",this.form);
        }
    }
}
</script>