<template>
    <router-link
        v-if="hasPerms"
        :to="url"
        class="edit_link"
        >
        <span class="badge badge-warning incrIconSize"
        title="Assign Users"
            ><i class="fas fa-user-plus"></i
        ></span>
        </router-link>
</template>
<script>
    export default{
        name:"AssignUsersButtonGBI",
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
                const perms = window.createPerms;
                const hasPerm = (perm) => perm.permission_id === 95;
                return perms.some(hasPerm);
            }
        },
    }
</script>