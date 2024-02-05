//GBI Razorpay payment
const TestRazorpay = () => import(/* webpackChunkName: "js/front/payment_test" */ '@/front/pages/RazorpayPay/TestRazorpay.vue');
export default [
    { path: '/payment-test', component: TestRazorpay },
]