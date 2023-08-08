const PaymentLink = () => import(/* webpackChunkName: "js/admin/CreatePaymentLink" */ '@/admin/pages/paymentLink/create.vue');

export default [
    { meta: {permId: 87}, path: '/create-payment-link', component: PaymentLink },
]