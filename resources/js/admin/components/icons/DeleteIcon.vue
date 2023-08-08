<template>
    <span
        v-if="hasPerms"
        class="delete_link"
        title="Delete Item"
        ><span class="badge badge-danger incrIconSize pointer"
            ><i class="far fa-trash-alt"></i></span
        ></span>
</template>
<script>
    export default{
        name:"DeleteButtonGBI",
        data(){
            return{

            }
        },
        computed: {
            hasPerms(){
                if(window.userRole == 1){
                    return true;
                }
                const perms = window.deletePerms;
                const hasPerm = (perm) => perm.permission_id === this.$route.meta.permId;
                return perms.some(hasPerm);
            }
        },
    }
</script>