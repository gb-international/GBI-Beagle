<template>
    <router-link
        v-if="hasPerms"
        :to="url"
        class="edit_link"
        >
        <span class="badge badge-info incrIconSize"
        title="Assign Permissions"
            ><i class="fas fa-plus-square"></i
        ></span>
        </router-link>
</template>
<script>
    export default{
        name:"PlusButtonGBI",
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
                const hasPerm = (perm) => perm.permission_id === 94;
                return perms.some(hasPerm);
            }
        },
    }
</script>