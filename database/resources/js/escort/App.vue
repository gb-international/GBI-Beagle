<template>
    <div id="app">
        <transition name="fade">
            <router-view></router-view>
        </transition>        
    </div>
</template>

<script>
    export default {
        watch:{
            isIdle(){
                if(this.$store.state.idleVue.isIdle == true && this.$cookies.get('escort_id') != undefined){
                    this.$router.push('/escort/login');
                    this.$cookies.remove('escort_id');
                }
            }
        },
        computed: {
            isIdle() {
                return this.$store.state.idleVue.isIdle;
            },
        },
    }
</script>