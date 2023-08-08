<template>
    <router-link :to="url" class="edit_link" v-if="hasPerms">
        <span class="badge badge-primary incrIconSize" title="Edit Item"
            ><i class="fas fa-pencil-alt"></i
        ></span>
    </router-link>
</template>
<script>
    export default{
        name:"EditIconButtonGBI",
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
                const perms = window.editPerms;
                const hasPerm = (perm) => perm.permission_id === this.$route.meta.permId;
                return perms.some(hasPerm);
            }
        },
    }
</script>