//Events
const EventList = () => import(/* webpackChunkName: "js/admin/EventList" */ '@/admin/pages/events/List.vue');
const EventNew = () => import(/* webpackChunkName: "js/admin/EventNew" */ '@/admin/pages/events/New.vue');
const EventEdit = () => import(/* webpackChunkName: "js/admin/EventEdit" */ '@/admin/pages/events/Edit.vue');

export default[
    { meta: {permId: 100}, path: '/event-list', component: EventList },
    { meta: {permId: 100}, path: '/add-event', component: EventNew },
    { meta: {permId: 100}, path: '/edit-event/:id', component: EventEdit },
]