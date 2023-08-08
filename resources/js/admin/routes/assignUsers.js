// // Assign Users 
const AssignUsersPage = () => import(/* webpackChunkName: "js/admin/assignuserspage" */ '@/admin/pages/setting/member/assignUsers.vue');

export default[
    { meta: {permId: 95}, path: '/assign-users/:role/:id/:dep_id', component: AssignUsersPage },
]