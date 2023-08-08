<template>
    <div class="row justify-content-center">
        <div class="col-sm-9 text-center">
        <back-button />
        <next-button />
        </div>
    </div>
</template>
<script>
import BackButton from "@/admin/components/buttons/BackButton.vue";
import NextButton from "@/admin/components/buttons/NextButton.vue";
export default {
    name:"FormButton2GBI",
    components:{
        'back-button':BackButton,
        'next-button':NextButton
    }
}
</script>