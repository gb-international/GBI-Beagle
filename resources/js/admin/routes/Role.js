// // Role & permission
const ListRole = () => import(/* webpackChunkName: "js/admin/Role" */ '@/admin/pages/setting/role/List-role.vue');
const AddRole = () => import(/* webpackChunkName: "js/admin/RoleAdd" */ '@/admin/pages/setting/role/New-role.vue');
const EditRole = () => import(/* webpackChunkName: "js/admin/RoleEdit" */ '@/admin/pages/setting/role/Edit-role.vue');

const ListPermission = () => import(/* webpackChunkName: "js/admin/PermissionList" */ '@/admin/pages/setting/permission/List-permission.vue');
const AddPermission = () => import(/* webpackChunkName: "js/admin/PermissionAdd" */ '@/admin/pages/setting/permission/New-permission.vue');
const EditPermission = () => import(/* webpackChunkName: "js/admin/PermissionEdit" */ '@/admin/pages/setting/permission/Edit-permission.vue');

export default [

    { path: '/list-role', component: ListRole },
    { path: '/add-role', component: AddRole },
    { path: '/edit-role/:id', component: EditRole },
    { path: '/list-permission', component: ListPermission },
    { path: '/add-permission', component: AddPermission },
    { path: '/edit-permission/:id', component: EditPermission },
]