<template>
    <div class="form-group subscribe-form">
        <form method="POST" @submit.prevent="subscribe()">
            <div class="input-form mb-2 pb-1">
                <input type="name" class="form-control" placeholder="Name" v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }">
                <has-error :form="form" field="name"></has-error>
            </div>
            <div class="input-form mb-4">
                <input type="email" class="form-control" placeholder="Email" v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }">
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
                name: '',
                email: ''
            })
        }
    },
    methods:{
        subscribe(){
            this.form.post('/api/subscribe').then(res=>{
                this.$swal.fire({
                    icon: "success",
                    text: "Dear "+this.form.name+", thank you for Subscribing with us."
                });
                this.form.reset();
            }).catch(error => {
                console.log(error);
            })
        }
    }
}
</script>