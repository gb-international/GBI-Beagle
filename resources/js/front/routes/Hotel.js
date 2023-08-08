//GBI Hotels
const HotelSearch = () => import(/* webpackChunkName: "js/front/HotelSearch" */ '@/front/pages/Hotel/hotel-search.vue');
const HotelDetail = () => import(/* webpackChunkName: "js/front/HotelDetail" */ '@/front/pages/Hotel/hotelDetails.vue');

export default [
    { path: '/hotel-search', component: HotelSearch },
    { path: '/hotel-detail', component: HotelDetail },
]