<template>
    <button
        class="btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"
        ><slot>submit</slot>
    </button>
        
</template>
<script>
    export default{
        name:"SubmitButtonGBI",
        data(){
            return{

            }
        }
    }
</script>