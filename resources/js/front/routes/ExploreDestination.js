//Explore
const ExploreDestination = () => import(/* webpackChunkName: "js/front/ExploreDestination" */ '@/front/pages/Explore/ExploreDestination.vue');
const ProgressBar = () => import(/* webpackChunkName: "js/front/ProgressBar" */ '@/front/pages/Explore/ProgressBar.vue');
const ExploreList = () => import(/* webpackChunkName: "js/front/ExploreList" */ '@/front/pages/Explore/ExploreList.vue');
const ExploreDetail = () => import(/* webpackChunkName: "js/front/ExploreDetail" */ '@/front/pages/Explore/ExploreDetail.vue');


export default [
    { path: '/explore-destination', component: ExploreDestination },
    { path: '/progress-bar', component: ProgressBar },
    { path: '/explore-list', component: ExploreList },
    { path: '/explore-detail/:id', component: ExploreDetail },
]