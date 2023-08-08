<template>
    <router-link :to="url" class="text-capitalize font-weight-bold" v-if="hasPerms">
        <slot>add</slot>
    </router-link>
</template>
<script>
export default {
    name:"AddButtonGBI",
    props:['url'],
    computed: {
    	hasPerms(){
	        if(window.userRole == 1){
	            return true;
	        }
	        const perms = window.createPerms;
	        const hasPerm = (perm) => perm.permission_id === this.$route.meta.permId;
	        return perms.some(hasPerm);
    	}
  	},
}
</script>