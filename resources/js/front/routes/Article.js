//GBI Articles
const Articles = () => import(/* webpackChunkName: "js/front/ArticlesList" */ '@/front/pages/Article/list.vue');
const ArticleDetail = () => import(/* webpackChunkName: "js/front/ArticleDetail" */ '@/front/pages/Article/Detail.vue');
const Category = () => import(/* webpackChunkName: "js/front/ArticleCategory" */ '@/front/pages/Article/Category.vue');


export default [
    //GBI Articles
    { path: '/articles', component: Articles },
    { path: '/articles/:slug', component: ArticleDetail },
    { path: '/articles/category/:slug', component: Category },
]