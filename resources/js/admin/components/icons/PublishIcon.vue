<template>
    <span
        v-if="hasPerms"
        class="delete_link"
        title="Publish Item"
        ><span class="badge badge-info pointer incrIconSize"
            ><i class="fas fa-scroll"></i></span
    ></span>
</template>
<script>
    export default{
        name:"PublishIconButtonGBI",
        props:['url'],
        data(){
            return{

            }
        },
        computed: {
            hasPerms(){
                if(window.userRole == 1){
                    return true;
                }
                const perms = window.publishPerms;
                const hasPerm = (perm) => perm.permission_id === this.$route.meta.permId;
                return perms.some(hasPerm);
            }
        },
    }
</script>