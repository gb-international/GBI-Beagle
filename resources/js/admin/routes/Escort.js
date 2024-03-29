//escort
const EscortList = () => import(/* webpackChunkName: "js/admin/escort" */ '@/admin/pages/escort/List-escort.vue');
const AddEscort = () => import(/* webpackChunkName: "js/admin/escortadd" */ '@/admin/pages/escort/New-escort.vue');
const EditEscort = () => import(/* webpackChunkName: "js/admin/escortedit" */ '@/admin/pages/escort/Edit-escort.vue');
const EscortView = () => import(/* webpackChunkName: "js/admin/escortview" */ '@/admin/pages/escort/View_escort.vue');


export default[
    //Escort
    { meta: {permId: 66}, path: '/escort-list', component: EscortList },
    { meta: {permId: 66}, path: '/add-escort', component: AddEscort },
    { meta: {permId: 66}, path: '/edit-escort/:id', component: EditEscort },
    { meta: {permId: 66}, path: '/escort-view/:id', component: EscortView },
]