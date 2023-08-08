//Popular
const SeasonList = () => import(/* webpackChunkName: "js/admin/SeasonList" */ '@/admin/pages/seasons/List.vue');
const SeasonNew = () => import(/* webpackChunkName: "js/admin/SeasonNew" */ '@/admin/pages/seasons/New.vue');
const SeasonEdit = () => import(/* webpackChunkName: "js/admin/SeasonEdit" */ '@/admin/pages/seasons/Edit.vue');
const SeasonSet = () => import(/* webpackChunkName: "js/admin/SeasonSet" */ '@/admin/pages/seasons/Set.vue');

export default[
    { meta: {permId: 101}, path: '/list-seasons', component: SeasonList },
    { meta: {permId: 101}, path: '/add-season', component: SeasonNew },
    { meta: {permId: 101}, path: '/edit-season/:id', component: SeasonEdit },
    { meta: {permId: 101}, path: '/set-season', component: SeasonSet },
]