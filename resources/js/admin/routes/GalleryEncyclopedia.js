const Gallery = () => import(/* webpackChunkName: "js/admin/Gallery" */ '@/admin/pages/gallery/List.vue');
const GalleryAdd = () => import(/* webpackChunkName: "js/admin/galleryAdd" */ '@/admin/pages/gallery/New.vue');
const GalleryEdit = () => import(/* webpackChunkName: "js/admin/galleryEdit" */ '@/admin/pages/gallery/Edit.vue');

// // ------------ Encyclopedia -----------------// 
const EncyclopediaList = () => import(/* webpackChunkName: "js/admin/EncyclopediaList" */ '@/admin/pages/encyclopedia/List-encyclopedia.vue');
const EncyclopediaEdit = () => import(/* webpackChunkName: "js/admin/EncyclopediaEdit" */ '@/admin/pages/encyclopedia/Edit-encyclopedia.vue');
const EncyclopediaView = () => import(/* webpackChunkName: "js/admin/EncyclopediaView" */ '@/admin/pages/encyclopedia/View-encyclopedia.vue');
const EncyclopediaAdd = () => import(/* webpackChunkName: "js/admin/EncyclopediaAdd" */ '@/admin/pages/encyclopedia/New-encyclopedia.vue');

const EncyclopediacommentList = () => import(/* webpackChunkName: "js/admin/EncycllopediaListComment" */ '@/admin/pages/encyclopedia/comment/List-encyclopediacomment.vue');

const EncyclopediacommentView = () => import(/* webpackChunkName: "js/admin/encyclopediaViewComment" */ '@/admin/pages/encyclopedia/comment/View-encyclopediacomment.vue');
const EncyclopediacommentAdd = () => import(/* webpackChunkName: "js/admin/EncycloPediaComment" */ '@/admin/pages/encyclopedia/comment/New-encyclopediacomment.vue');


export default[
    // Gallery
    { meta: {permId: 76}, path: '/gallery', component: Gallery },
    { meta: {permId: 76}, path: '/gallery-add', component: GalleryAdd },
    { meta: {permId: 76}, path: '/gallery/:id', component: GalleryEdit },

    { meta: {permId: 72}, path: '/encyclopedias', component: EncyclopediaList },
    { meta: {permId: 72}, path: '/encyclopedias-view/:id', component: EncyclopediaView },
    { meta: {permId: 72}, path: '/encyclopedias/:id', component: EncyclopediaEdit },
    { meta: {permId: 72}, path: '/encyclopedias-add', component: EncyclopediaAdd },

    { meta: {permId: 72}, path: '/encyclopediacomment-list', component: EncyclopediacommentList },
    { meta: {permId: 72}, path:'/encyclopediacomment-view/:id', component: EncyclopediacommentView},
    { meta: {permId: 72}, path:'/encyclopediacomment-add', component: EncyclopediacommentAdd},
]