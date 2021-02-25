
// // Blog
const Categories = () => import(/* webpackChunkName: "js/admin/Category" */ '@/admin/pages/blog/Category/List.vue');
const CategoriesAdd = () => import(/* webpackChunkName: "js/admin/CategoryAdd" */ '@/admin/pages/blog/Category/New.vue');
const CategoriesEdit = () => import(/* webpackChunkName: "js/admin/CategoryEdit" */ '@/admin/pages/blog/Category/Edit.vue');
const CategoriesView = () => import(/* webpackChunkName: "js/admin/CategoryView" */ '@/admin/pages/blog/Category/View.vue');

const Post = () => import(/* webpackChunkName: "js/admin/Post" */ '@/admin/pages/blog/post/List.vue');
const PostAdd = () => import(/* webpackChunkName: "js/admin/PostAdd" */ '@/admin/pages/blog/post/New.vue');
const PostEdit = () => import(/* webpackChunkName: "js/admin/PostEdit" */ '@/admin/pages/blog/post/Edit.vue');
const PostView = () => import(/* webpackChunkName: "js/admin/PostView" */ '@/admin/pages/blog/post/View.vue');

const Tag = () => import(/* webpackChunkName: "js/admin/Tag" */ '@/admin/pages/blog/tag/List.vue');
const TagAdd = () => import(/* webpackChunkName: "js/admin/TagAdd" */ '@/admin/pages/blog/tag/New.vue');
const TagEdit = () => import(/* webpackChunkName: "js/admin/TagEdit" */ '@/admin/pages/blog/tag/Edit.vue');



export default[
    // categories
    { path: '/categories', component: Categories },
    { path: '/categories-add', component: CategoriesAdd },
    { path: '/categories/:id', component: CategoriesEdit },
    { path: '/categories-view/:id', component: CategoriesView },
    // Post
    { path: '/posts', component: Post },
    { path: '/posts-add', component: PostAdd },
    { path: '/posts/:id', component: PostEdit },
    { path: '/posts-view/:id', component: PostView },
    // Tags    
    { path: '/tags', component: Tag },
    { path: '/tags-add', component: TagAdd },
    { path: '/tags/:id', component: TagEdit },
]