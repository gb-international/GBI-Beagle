// admin dashboard

export default [
    {
       name: 'Dashboard', path:'/dashboard',name:"Dashboard",component: () => import(/* webpackChunkName: "js/admin/AdminDashboard" */ '@/admin/pages/Dashboard.vue')
    }
]