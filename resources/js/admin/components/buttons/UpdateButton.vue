<template>
    <router-link :to="url" class="text-capitalize font-weight-bold" v-if="hasPerms">
        <slot>update</slot>
    </router-link>
</template>
<script>
export default {
    name:"UpdateButtonGBI",
    props:['url'],
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