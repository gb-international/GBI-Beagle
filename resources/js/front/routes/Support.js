//Support
const Support = () => import(/* webpackChunkName: "js/front/userSupport" */ '@/front/pages/user/Support.vue');

export default [
    { path: '/support', name: 'SupportPage', meta: { requiresAuth: true }, component: Support },
]