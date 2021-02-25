// // School
const Schools = () => import(/* webpackChunkName: "js/admin/schools" */ '@/admin/pages/school/List-school.vue');
const SchoolAdd = () => import(/* webpackChunkName: "js/admin/schooladd" */ '@/admin/pages/school/New-school.vue');
const SchoolEdit = () => import(/* webpackChunkName: "js/admin/schooledit" */ '@/admin/pages/school/Edit-school.vue');
const SchoolView = () => import(/* webpackChunkName: "js/admin/schoolview" */ '@/admin/pages/school/View-school.vue');

// // Students
// const Students = () => import(/* webpackChunkName: "js/admin/students" */ '@/admin/pages/student/List-student.vue');
// const StudentAdd = () => import(/* webpackChunkName: "js/admin/studentadd" */ '@/admin/pages/student/New-student.vue');
// const StudentEdit = () => import(/* webpackChunkName: "js/admin/studentEdit" */ '@/admin/pages/student/Edit-student.vue');
// const StudentView = () => import(/* webpackChunkName: "js/admin/studentview" */ '@/admin/pages/student/View-student.vue');


export default[
    // School
    { path: '/schools', component: Schools },
    { path: '/schools/:id', component: SchoolEdit },
    { path: '/add-school', component: SchoolAdd },
    { path: '/view-school/:id', component: SchoolView },

    // { path: '/students', component: Students },
    // { path: '/students/:id', component: StudentEdit },
    // { path: '/add-student', component: StudentAdd },
    // { path: '/view-student/:id', component: StudentView },
]