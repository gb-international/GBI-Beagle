//escort
const ExploreDestination = () => import(/* webpackChunkName: "js/front/ExploreDestination" */ '@/front/pages/Explore/ExploreDestination.vue');
const ExploreList = () => import(/* webpackChunkName: "js/front/ExploreList" */ '@/front/pages/Explore/ExploreList.vue');
const ExploreDetail = () => import(/* webpackChunkName: "js/front/ExploreDetail" */ '@/front/pages/Explore/ExploreDetail.vue');



export default [
    //Escort
    { path: '/explore-destination', component: ExploreDestination },
    { path: '/explore-list', component: ExploreList },
    { path: '/explore-detail/:id', component: ExploreDetail },
]