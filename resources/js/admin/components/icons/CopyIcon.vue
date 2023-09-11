<template>
    <span
        class="delete_link"
        title="Copy Link"
        @click="copyURL(url)"
        ><span class="badge badge-info pointer incrIconSize"
            ><i class="fas fa-copy"></i></span
    ></span>
</template>
<script>
    export default{
        name:"CopyIconButtonGBI",
        props:['url'],
        data(){
            return{

            }
        },
         methods: {
            async copyURL(val) {
                try {
                await navigator.clipboard.writeText(window.location.host+val);
                this.$toast.fire({
                    icon: "success",
                    title: "Url Link Copied",
                });
                } catch($e) {
                this.$toast.fire({
                    icon: "error",
                    title: "Url not Copied",
                });
                }
            }
            
        }
    }
</script>