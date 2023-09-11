<template>
    <span
        v-if="hasPerms"
        class="delete_link"
        title="Draft Item"
        ><span class="badge badge-secondary incrIconSize pointer"
            ><i class="fas fa-print"></i></span
    ></span>
</template>
<script>
    export default{
        name:"DraftIconButtonGBI",
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