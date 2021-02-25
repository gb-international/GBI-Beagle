//escort
const TravelEducation = () => import(/* webpackChunkName: "js/front/TravelEducation" */ '@/front/pages/Resources/TravelEducation.vue');
const Faq = () => import(/* webpackChunkName: "js/front/faq" */ '@/front/pages/Resources/Faq.vue');
const SafetySecurity = () => import(/* webpackChunkName: "js/front/SafetySecurity" */ '@/front/pages/Resources/SafetySecurity.vue');
const EncyclopediaList = () => import(/* webpackChunkName: "js/front/EncyclopediaList" */ '@/front/pages/Encyclopedia/States.vue');
const EncyclopediaView = () => import(/* webpackChunkName: "js/front/EncyclopediaView" */ '@/front/pages/Encyclopedia/State-view.vue');


export default [
    //Escort
    { path: '/resources/travel-education', component: TravelEducation },
    { path: '/resources/faq', component: Faq },
    { path: '/resources/safety-security', component: SafetySecurity },
    { path: '/resources/travel-encyclopedia', component: EncyclopediaList },
    { path: '/encyclopedia/:id', component: EncyclopediaView },
]