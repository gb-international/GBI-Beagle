<template>
    <div class="form-group subscribe-form">
        <form method="POST" @submit.prevent="subscribe()">
            <div class="input-form mb-4">
                <input type="email" class="form-control" placeholder="Enter Email ID" v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }">
                <has-error :form="form" field="email"></has-error>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-subscribe">Subscribe</button>
            </div>
        </form>
    </div>
</template>
<script>
import { Form, HasError } from "vform";
export default {
    components:{
        Form,
        HasError
    },
    data(){
        return{
            form:new Form({
                email:''
            })
        }
    },
    methods:{
        subscribe(){
            this.form.post('/api/subscribe').then(res=>{
                this.$swal.fire({
                    icon: "success",
                    text: "Now you can receive our latest tour discounts !!"
                });
                this.form.reset();
            }).catch(error => {
                console.log(error);
            })
        }
    }
}
</script>