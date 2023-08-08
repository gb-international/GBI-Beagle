const ListSubscribe = () => import(/* webpackChunkName: "js/admin/MemberList" */ '@/admin/pages/website/subscribe/List.vue');

export default [
    { meta: {permId: 74}, path: '/subscribers', component: ListSubscribe },
]