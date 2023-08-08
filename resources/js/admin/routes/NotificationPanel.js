
// Notification
const NotifPanel = () => import(/* webpackChunkName: "js/admin/NotifPanel" */ '@/admin/pages/notificationPanel/panel.vue');
const NotifView = () => import(/* webpackChunkName: "js/admin/NotifView" */ '@/admin/pages/notificationPanel/view.vue');

export default[
    // Notification
    { meta: {permId: 88}, path: '/notification-panel', component: NotifPanel },
    { meta: {permId: 88}, path: '/notification-view', component: NotifView },
]