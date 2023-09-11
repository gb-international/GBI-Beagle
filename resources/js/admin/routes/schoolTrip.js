const schoolTrip = () => import(/* webpackChunkName: "js/admin/schoolTrip" */ '@/admin/pages/schoolTrip/tripList.vue');
const schoolTripAdd = () => import(/* webpackChunkName: "js/admin/schoolTripAdd" */ '@/admin/pages/schoolTrip/add.vue');
const schoolTripEdit = () => import(/* webpackChunkName: "js/admin/schoolTripEdit" */ '@/admin/pages/schoolTrip/edit.vue');

export default [
    { meta: {permId: 104}, path: '/school-trip', component: schoolTrip },
    { meta: {permId: 104}, path: '/school-trip/add', component: schoolTripAdd },
    { meta: {permId: 104}, path: '/school-trip/edit/:id', component: schoolTripEdit },
]