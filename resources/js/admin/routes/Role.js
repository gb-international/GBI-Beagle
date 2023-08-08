// // Role & permission
const ListRole = () => import(/* webpackChunkName: "js/admin/Role" */ '@/admin/pages/setting/role/List-role.vue');
const AddRole = () => import(/* webpackChunkName: "js/admin/RoleAdd" */ '@/admin/pages/setting/role/New-role.vue');
const EditRole = () => import(/* webpackChunkName: "js/admin/RoleEdit" */ '@/admin/pages/setting/role/Edit-role.vue');

const ListPermission = () => import(/* webpackChunkName: "js/admin/PermissionList" */ '@/admin/pages/setting/permission/List-permission.vue');
const AddPermission = () => import(/* webpackChunkName: "js/admin/PermissionAdd" */ '@/admin/pages/setting/permission/New-permission.vue');
const EditPermission = () => import(/* webpackChunkName: "js/admin/PermissionEdit" */ '@/admin/pages/setting/permission/Edit-permission.vue');
const AssignPermission = () => import(/* webpackChunkName: "js/admin/PermissionAssign" */ '@/admin/pages/setting/permission/assign-permission.vue');
const CheckPermissions = () => import(/* webpackChunkName: "js/admin/CheckPermissions" */ '@/admin/pages/setting/permission/check-permissions.vue');

export default [
	{ meta: {permId: 80}, path: '/list-role', component: ListRole },
    { meta: {permId: 80}, path: '/add-role', component: AddRole },
    { meta: {permId: 80}, path: '/edit-role/:id', component: EditRole },
 
    { meta: {permId: 81}, path: '/list-permission', component: ListPermission },
    { meta: {permId: 81}, path: '/add-permission', component: AddPermission },
    { meta: {permId: 81}, path: '/edit-permission/:id', component: EditPermission },
    
    { meta: {permId: 82}, path: '/assign-permission/:id/:role', component: AssignPermission },
    { meta: {permId: 82}, path: '/check-permissions/:id', component: CheckPermissions },
] 