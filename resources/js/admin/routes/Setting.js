
// // GBI member

const ListMember = () => import(/* webpackChunkName: "js/admin/MemberList" */ '@/admin/pages/setting/member/List-member.vue');
const AddMember = () => import(/* webpackChunkName: "js/admin/MemberAdd" */ '@/admin/pages/setting/member/New-member.vue');
const EditMember = () => import(/* webpackChunkName: "js/admin/EditMember" */ '@/admin/pages/setting/member/Edit-member.vue');

const User = () => import(/* webpackChunkName: "js/admin/User" */ '@/admin/pages/website/user/List.vue');
const UserView = () => import(/* webpackChunkName: "js/admin/UserView" */ '@/admin/pages/website/user/View.vue');

// Department

const ListDepartment = () => import(/* webpackChunkName: "js/admin/ListDepartment" */ '@/admin/pages/setting/department/List.vue');
const AddDepartment = () => import(/* webpackChunkName: "js/admin/DepartmentNew" */ '@/admin/pages/setting/department/New.vue');
const EditDepartment = () => import(/* webpackChunkName: "js/admin/DepartmentEdit" */ '@/admin/pages/setting/department/Edit.vue');

export default [
    { meta: {permId: 82}, path: '/list-member', component: ListMember },
    { meta: {permId: 82}, path: '/add-member', component: AddMember },
    { meta: {permId: 82}, path: '/edit-member/:id', component: EditMember },
    
    { meta: {permId: 73}, path: '/user', component: User },
    { meta: {permId: 73}, path: '/user/:id', component: UserView }, 
    
    { meta: {permId: 83}, path: '/list-departments', component: ListDepartment },
    { meta: {permId: 83}, path: '/edit-departments/:id', component: EditDepartment },
    { meta: {permId: 83},  path: '/add-departments', component: AddDepartment }, 

]