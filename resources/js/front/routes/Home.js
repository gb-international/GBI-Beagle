const FrontHome = () => import(/* webpackChunkName: "js/front/Home" */ '@/front/pages/layouts/FrontHome.vue');


export default [
    { path: '/', component: FrontHome,name:'home' }
]