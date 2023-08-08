//Popular Tours
const PopularTours = () => import(/* webpackChunkName: "js/front/PopularTours" */ '@/front/pages/user/PopularTours.vue');

export default [
    { path: '/popular-tours/:userID', name: 'PopularToursPage', meta: { requiresAuth: true }, component: PopularTours },
]