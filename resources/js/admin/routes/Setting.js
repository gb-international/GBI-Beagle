
// // GBI member

const ListMember = () => import(/* webpackChunkName: "js/admin/MemberList" */ '@/admin/pages/setting/member/List-member.vue');
const AddMember = () => import(/* webpackChunkName: "js/admin/MemberAdd" */ '@/admin/pages/setting/member/New-member.vue');

const User = () => import(/* webpackChunkName: "js/admin/User" */ '@/admin/pages/website/user/List.vue');
const UserView = () => import(/* webpackChunkName: "js/admin/UserView" */ '@/admin/pages/website/user/View.vue');


export default [
    { path: '/list-member', component: ListMember },
    { path: '/add-member', component: AddMember },
    
    { path: '/user', component: User },
    { path: '/user/:id', component: UserView }, 
]