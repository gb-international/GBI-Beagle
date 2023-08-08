//Notifications
const Notifications = () => import(/* webpackChunkName: "js/front/userNotifications" */ '@/front/pages/user/Notifications/panel.vue');

export default [
    { path: '/notifications', name: 'NotificationsPage', meta: { requiresAuth: true }, component: Notifications },
]