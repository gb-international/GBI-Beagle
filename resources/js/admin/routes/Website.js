const ListSubscribe = () => import(/* webpackChunkName: "js/admin/MemberList" */ '@/admin/pages/website/subscribe/List.vue');

export default [
    { path: '/subscribers', component: ListSubscribe },
]