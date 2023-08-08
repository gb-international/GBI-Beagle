<template>
    <div class="row justify-content-center">
        <button
            class="btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold text-center"
            ><slot>SEND</slot>
        </button>
    </div>
        
</template>
<script>
    export default{
        name:"SendLinkButtonGBI",
        data(){
            return{

            }
        }
    }
</script>