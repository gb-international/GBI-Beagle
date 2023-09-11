//Tour Page
const Tour = () => import(/* webpackChunkName: "js/front/TourPage" */ '@/front/pages/TourPage/tour.vue');

export default [
    //{ path: '/tour-page', component: Tour },
    { path: '/tour-page/:name/:id', name: 'tour-page', component: Tour }
]