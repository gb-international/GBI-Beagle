<template>
    <div>
        <button type="button" class="btn btn-outline-blue font-weight-bold" @click="sendDetail">
            <span v-if="text"><img src="/images/icons/send_icon.png"> {{text}}</span>
            <span v-else><img src="/images/icons/send_icon.png"> Send Login Details</span>
        </button><br />
        <small class="text-success" v-if="success">{{ success }}</small>
        <small class="text-danger" v-if="error">{{ error }}</small>
    </div>
</template>
<script>
export default {
    name:"SendLoginDetail",
    props:{
        text:{
            required:false,
        },
        url:{
            required:true
        }
    },
    data(){
        return{
            error:false,
            success:false,
        }
    },
    methods:{
        sendDetail(){
            axios.get(this.url).then((res)=>{
                this.$toast.fire({
                    icon: "success",
                    title: "Login Details Sent Successfully !!!"
                });
                this.success = "Login Details Sent Successfully";
                this.error = '';
            }).catch(error=>{
                this.error = "Try Again !!!";
                this.success = '';
            });
        }
    }
}
</script>