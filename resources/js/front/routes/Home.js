const FrontHome = () => import(/* webpackChunkName: "js/front/Home" */ '@/front/pages/layouts/FrontHome.vue');
const Wonderla = () => import(/* webpackChunkName: "js/front/Wonderla" */ '@/front/pages/Wonderla/Wonderla.vue');

export default [
    { path: '/', component: FrontHome,name:'home' },
    { path: '/wonderla', component: Wonderla,name:'wonderla' }
]