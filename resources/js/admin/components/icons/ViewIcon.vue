<template>
    <router-link
        :to="url"
        class="edit_link"
        >
        <span class="badge badge-primary incrIconSize" title="View Item"
            ><i class="fas fa-eye"></i
        ></span>
        </router-link>
</template>
<script>
    export default{
        name:"ViewsIconButtonGBI",
        props:['url'],
        data(){
            return{

            }
        }
    }
</script>