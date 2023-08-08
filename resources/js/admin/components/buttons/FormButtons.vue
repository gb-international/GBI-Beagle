<template>
    <div class="row justify-content-center">
        <div class="col-sm-9 text-center">
        <back-button />
        <submit-button />
        </div>
    </div>
</template>
<script>
import BackButton from "@/admin/components/buttons/BackButton.vue";
import SubmitButton from "@/admin/components/buttons/SubmitButton.vue";
export default {
    name:"FormButtonGBI",
    components:{
        'back-button':BackButton,
        'submit-button':SubmitButton
    }
}
</script>