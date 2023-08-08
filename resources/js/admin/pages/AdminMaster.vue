<template>
    <div id="adminmain">
        <transition 
            name="fade"
            mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>
<script>
export default {
    name:"AppMain",
    data() {
        return{
            
        }
    },
}
</script>
