//GBI Blog
const Blogs = () => import(/* webpackChunkName: "js/front/BlogsList" */ '@/front/pages/Blog/list.vue');
const BlogDetail = () => import(/* webpackChunkName: "js/front/BlogDetail" */ '@/front/pages/Blog/Detail.vue');
const Category = () => import(/* webpackChunkName: "js/front/Category" */ '@/front/pages/Blog/Category.vue');


export default [
    //GBI Blog
    { path: '/blog', component: Blogs },
    { path: '/blog/:slug', component: BlogDetail },
    { path: '/blog/category/:slug', component: Category },
]