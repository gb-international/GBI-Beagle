// Error
const Error404 = () => import(/* webpackChunkName: "js/front/error404" */ '@/front/pages/error/404.vue');


export default [
    { path: '*', component: Error404 }
]