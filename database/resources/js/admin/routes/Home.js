// admin dashboard

export default [
    {
         path:'/dashboard',
        component: () => import(/* webpackChunkName: "js/admin/AdminDashboard" */ '@/admin/pages/Dashboard.vue')
    }
]