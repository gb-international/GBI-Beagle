// // Add SightSeeing 
const ListSightseeing = () => import(/* webpackChunkName: "js/admin/sightList" */ '@/admin/pages/sightseeing/List-sightseeing.vue');
const AddSightseeing = () => import(/* webpackChunkName: "js/admin/sightAdd" */ '@/admin/pages/sightseeing/New-sightseeing.vue');
const EditSightseeing = () => import(/* webpackChunkName: "js/admin/sightEdit" */ '@/admin/pages/sightseeing/Edit-sightseeing.vue');

export default[
    // Sightseeing
    { path: '/sightseeing', component: ListSightseeing },
    { path: '/sightseeing/:id', component: EditSightseeing },
    { path: '/sightseeing-add', component: AddSightseeing },
]