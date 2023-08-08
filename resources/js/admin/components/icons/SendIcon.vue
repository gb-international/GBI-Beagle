<template>
    <router-link
        :to="url"
        class="edit_link"
        >
        <span class="badge badge-primary incrIconSize" title="Send Item"
            ><i class="fas fa-paper-plane"></i
        ></span>
        </router-link>
</template>
<script>
    export default{
        name:"SendIconButtonGBI",
        props:['url'],
        data(){
            return{

            }
        }
    }
</script>