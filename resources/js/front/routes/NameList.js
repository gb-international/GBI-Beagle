//Name List
const NameList = () => import(/* webpackChunkName: "js/front/TourNameList" */ '@/front/pages/tourForms/NameList.vue');

export default [
    { name: 'TourForm', path: '/tour-form', component: NameList },
]