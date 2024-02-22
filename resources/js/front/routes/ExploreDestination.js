//Explore
const ExploreDestination = () => import(/* webpackChunkName: "js/front/ExploreDestination" */ '@/front/pages/Explore/ExploreDestination.vue');

const ExploreSchool = () => import(/* webpackChunkName: "js/front/ExploreSchool" */ '@/front/pages/Explore/ExploreSchool.vue');
const ExploreFamily = () => import(/* webpackChunkName: "js/front/ExploreFamily" */ '@/front/pages/Explore/ExploreFamily.vue');
const ExploreCorp = () => import(/* webpackChunkName: "js/front/ExploreCorp" */ '@/front/pages/Explore/ExploreCorp.vue');

const ExploreList = () => import(/* webpackChunkName: "js/front/ExploreList" */ '@/front/pages/Explore/ExploreList.vue');
const ExploreDetail = () => import(/* webpackChunkName: "js/front/ExploreDetail" */ '@/front/pages/Explore/ExploreDetail.vue');



export default [
    { path: '/explore-destination', component: ExploreDestination },

    { path: '/explore-destination-edu', component: ExploreSchool },
    { path: '/explore-destination-fam', component: ExploreFamily },
    { path: '/explore-destination-corp', component: ExploreCorp },

    { path: '/explore-list', component: ExploreList },
    { path: '/explore-detail/:slug', component: ExploreDetail },
]