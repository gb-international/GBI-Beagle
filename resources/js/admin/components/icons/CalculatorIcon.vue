<template>
    <router-link
        :to="url"
        class="edit_link"
        >
        <span class="badge badge-primary incrIconSize" title="Calculate"
            ><i class="fas fa-calculator"></i
        ></span>
        </router-link>
</template>


<script>
    export default{
        name:"CalculatorButtonGBI",
        props:['url'],
        data(){
            return{

            }
        }
    }
</script>