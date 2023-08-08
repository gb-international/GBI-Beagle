//Payment Link
const PaymentLink = () => import(/* webpackChunkName: "js/front/PaymentLink" */ '@/front/pages/Payment/PaymentLink.vue');

export default [
    { path: '/payment-link/:tourID/:amount', name: 'PaymentLinkPage', meta: { requiresAuth: true }, component: PaymentLink },
]