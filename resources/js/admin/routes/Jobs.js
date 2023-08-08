// Jobs 
const Job = () => import(/* webpackChunkName: "js/admin/Job" */ '@/admin/pages/jobs/List.vue');
const JobAdd = () => import(/* webpackChunkName: "js/admin/JobAdd" */ '@/admin/pages/jobs/New.vue');
const JobEdit = () => import(/* webpackChunkName: "js/admin/JobEdit" */ '@/admin/pages/jobs/Edit.vue');
const JobApps = () => import(/* webpackChunkName: "js/admin/JobApps" */ '@/admin/pages/jobs/Applications/List.vue');


export default[
    // Jobs    
    { meta: {permId: 96}, path: '/jobs', component: Job },
    { meta: {permId: 96}, path: '/jobs-add', component: JobAdd },
    { meta: {permId: 96}, path: '/jobs/:id', component: JobEdit },
    //Applications
    { meta: {permId: 97}, path: '/job-applications', component: JobApps },
]