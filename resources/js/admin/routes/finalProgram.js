const finalProgram = () => import(/* webpackChunkName: "js/admin/finalProgramLink" */ '@/admin/pages/finalProgram/create.vue');

export default [
    { meta: {permId: 57}, path: '/final-program-link', component: finalProgram },
]