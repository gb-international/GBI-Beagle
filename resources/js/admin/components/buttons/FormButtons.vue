<template>
    <div class="row justify-content-center">
        <div class="col-sm-9 text-center">
        <back-button />
        <button
            class="btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"
            ><slot>{{loading ? 'submitting' : 'submit'}}</slot>
        </button>
        </div>
    </div>
</template>
<script>
import BackButton from "@/admin/components/buttons/BackButton.vue";
//import SubmitButton from "@/admin/components/buttons/SubmitButton.vue";
export default {
    name:"FormButtonGBI",
    props:['loading'],
    components:{
        'back-button':BackButton,
        //'submit-button':SubmitButton
    }
}
</script>