//Popular
const PopularList = () => import(/* webpackChunkName: "js/admin/PopularList" */ '@/admin/pages/popular/List.vue');
const PopularNew = () => import(/* webpackChunkName: "js/admin/PopularNew" */ '@/admin/pages/popular/New.vue');
const PopularEdit = () => import(/* webpackChunkName: "js/admin/PopularEdit" */ '@/admin/pages/popular/Edit.vue');

export default[
    { meta: {permId: 101}, path: '/popular-list-itineraries', component: PopularList },
    { meta: {permId: 101}, path: '/add-popular-itinerary', component: PopularNew },
    { meta: {permId: 101}, path: '/edit-popular-itinerary/:id', component: PopularEdit },
]