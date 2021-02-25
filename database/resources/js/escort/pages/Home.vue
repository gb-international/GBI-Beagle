<template>
    <div class="bg-blue height-100">
        <login />
    </div>
</template>
<script>
import login from '@/escort/pages/Login'
export default {
    components:{
        login
    },
    data(){
        return{
            
        }
    },
    created(){
        if(this.$cookies.get('escort_id') != undefined){
            this.$router.push('/escort/tour-list');
        }
    }
}
</script>