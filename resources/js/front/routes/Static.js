//Static pages
const media = () => import(/* webpackChunkName: "js/front/media-page" */ '@/front/pages/Static/Media.vue');
const newsletter = () => import(/* webpackChunkName: "js/front/news-letter" */ '@/front/pages/Static/NewsLetter.vue');
const travelguide = () => import(/* webpackChunkName: "js/front/travel-guidelines" */ '@/front/pages/Static/travelguide.vue');
const platformguide = () => import(/* webpackChunkName: "js/front/platform-guide" */ '@/front/pages/Static/platformguide.vue');
const whatsnew = () => import(/* webpackChunkName: "js/front/whats-new" */ '@/front/pages/Static/whatsnew.vue');
const sharefeedback = () => import(/* webpackChunkName: "js/front/share-feedback" */ '@/front/pages/Static/sharefeedback.vue');

export default [
    { path: '/media', component: media },
    { path: '/news-letter', component: newsletter },
    { path: '/travel-guidelines', component: travelguide },
    { path: '/platform-guide', component: platformguide },
    { path: '/whats-new', component: whatsnew },
    { path: '/share-feedback', component: sharefeedback },
]