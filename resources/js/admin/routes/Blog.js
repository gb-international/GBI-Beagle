
// // Blog
const Categories = () => import(/* webpackChunkName: "js/admin/Category" */ '@/admin/pages/blog/Category/List.vue');
const CategoriesAdd = () => import(/* webpackChunkName: "js/admin/CategoryAdd" */ '@/admin/pages/blog/Category/New.vue');
const CategoriesEdit = () => import(/* webpackChunkName: "js/admin/CategoryEdit" */ '@/admin/pages/blog/Category/Edit.vue');
const CategoriesView = () => import(/* webpackChunkName: "js/admin/CategoryView" */ '@/admin/pages/blog/Category/View.vue');
// Post
const Post = () => import(/* webpackChunkName: "js/admin/Post" */ '@/admin/pages/blog/post/List.vue');
const PostAdd = () => import(/* webpackChunkName: "js/admin/PostAdd" */ '@/admin/pages/blog/post/New.vue');
const PostEdit = () => import(/* webpackChunkName: "js/admin/PostEdit" */ '@/admin/pages/blog/post/Edit.vue');
const PostView = () => import(/* webpackChunkName: "js/admin/PostView" */ '@/admin/pages/blog/post/View.vue');
// Tags 
const Tag = () => import(/* webpackChunkName: "js/admin/Tag" */ '@/admin/pages/blog/tag/List.vue');
const TagAdd = () => import(/* webpackChunkName: "js/admin/TagAdd" */ '@/admin/pages/blog/tag/New.vue');
const TagEdit = () => import(/* webpackChunkName: "js/admin/TagEdit" */ '@/admin/pages/blog/tag/Edit.vue');
// Article
const Article = () => import(/* webpackChunkName: "js/admin/Article" */ '@/admin/pages/blog/article/List.vue');
const ArticleAdd = () => import(/* webpackChunkName: "js/admin/ArticleAdd" */ '@/admin/pages/blog/article/New.vue');
const ArticleEdit = () => import(/* webpackChunkName: "js/admin/ArticleEdit" */ '@/admin/pages/blog/article/Edit.vue');
const ArticleView = () => import(/* webpackChunkName: "js/admin/ArticleView" */ '@/admin/pages/blog/article/View.vue');

export default[
    // categories
    { meta: {permId: 78}, path: '/categories', component: Categories },
    { meta: {permId: 78}, path: '/categories-add', component: CategoriesAdd },
    { meta: {permId: 78}, path: '/categories/:id', component: CategoriesEdit },
    { meta: {permId: 78}, path: '/categories-view/:id', component: CategoriesView },
    // Post
    { meta: {permId: 77}, path: '/posts', component: Post },
    { meta: {permId: 77}, path: '/posts-add', component: PostAdd },
    { meta: {permId: 77}, path: '/posts/:id', component: PostEdit },
    { meta: {permId: 77}, path: '/posts-view/:id', component: PostView },
    // Article
    { meta: {permId: 77}, path: '/articles', component: Article },
    { meta: {permId: 77}, path: '/articles-add', component: ArticleAdd },
    { meta: {permId: 77}, path: '/articles/:id', component: ArticleEdit },
    { meta: {permId: 77}, path: '/articles-view/:id', component: ArticleView },
    // Tags    
    { meta: {permId: 79}, path: '/tags', component: Tag },
    { meta: {permId: 79}, path: '/tags-add', component: TagAdd },
    { meta: {permId: 79}, path: '/tags/:id', component: TagEdit },
]