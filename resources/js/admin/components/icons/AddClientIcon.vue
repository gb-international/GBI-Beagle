<template>
    <router-link
        v-if="hasPerms"
        :to="url"
        class="edit_link"
        >
        <span class="badge badge-primary incrIconSize"
            ><i class="fas fa-user-plus"></i
        ></span>
        </router-link>
</template>
<script>
    export default{
        name:"MinusButtonGBI",
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
                const perms = window.viewPerms;
                const hasPerm = (perm) => perm.permission_id === 93;
                return perms.some(hasPerm);
            }
        },
    }
</script>