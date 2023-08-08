/* ************************************************
      Author:@Ajay 
      Edited by: @Manas
      **************************************************** */
/* Edits: Added conponent InternationalList to route to /resources/travel-encyclopedia-international. */

//escort
const TravelEducation = () => import(/* webpackChunkName: "js/front/TravelEducation" */ '@/front/pages/Resources/TravelEducation.vue');
const Faq = () => import(/* webpackChunkName: "js/front/faq" */ '@/front/pages/Resources/Faq.vue');
const SafetySecurity = () => import(/* webpackChunkName: "js/front/SafetySecurity" */ '@/front/pages/Resources/SafetySecurity.vue');
const EncyclopediaList = () => import(/* webpackChunkName: "js/front/EncyclopediaList" */ '@/front/pages/Encyclopedia/States.vue');
const InternationalList = () => import(/* webpackChunkName: "js/front/InternationalList" */ '@/front/pages/Encyclopedia/InternationalStates.vue');
const EncyclopediaView = () => import(/* webpackChunkName: "js/front/EncyclopediaView" */ '@/front/pages/Encyclopedia/State-view.vue');
const PdfView = () => import(/* webpackChunkName: "js/front/PdfView" */ '@/front/pages/Encyclopedia/PdfView.vue');


export default [
    //Escort
    { path: '/resources/travel-education', component: TravelEducation },
    { path: '/resources/faq', component: Faq },
    { path: '/resources/safety-security', component: SafetySecurity },
    { path: '/resources/travel-encyclopedia', component: EncyclopediaList },
    { path: '/resources/travel-encyclopedia-international', component: InternationalList },
    { path: '/encyclopedia/:id', component: EncyclopediaView },
    { path: '/itinerary-pdf/:slug', component: PdfView },
]