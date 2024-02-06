<template>
    <PaymentButton :order-data="orderData"></PaymentButton>
</template>
<script>
import PaymentButton from '@/front/pages/RazorpayPay/PaymentButton.vue';
export default {
    components: {
        PaymentButton
    },
    data() {
        return {
            orderData:{},
        };
    },
    mounted(){
        this.orderData = {tour_price:2300,amount:2300, tour_id:51, school_id:960, payment_by:"teacher"}
        // this.orderData = {amount:2300, tour_id:51, school_id:960, payment_by:"teacher"}
    }
}
</script> 
