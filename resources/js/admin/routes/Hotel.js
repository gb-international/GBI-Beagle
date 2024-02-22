

// //Hotel
const Hotels = () => import(/* webpackChunkName: "js/admin/hotels" */ '@/admin/pages/hotel/hotels.vue');
const HotelList = () => import(/* webpackChunkName: "js/admin/hotel" */ '@/admin/pages/hotel/List-hotel-old.vue');
const HotelAdd = () => import(/* webpackChunkName: "js/admin/hoteladd" */'@/admin/pages/hotel/New-hotel.vue');
const HotelEdit = () => import(/* webpackChunkName: "js/admin/hoteledit" */ '@/admin/pages/hotel/Edit-hotel.vue');
const HotelView = () => import(/* webpackChunkName: "js/admin/hotelview" */ '@/admin/pages/hotel/View_hotel.vue');

const BanquetHotelAdd = () => import(/* webpackChunkName: "js/admin/hotelbanquetadd" */'@/admin/pages/hotel/New-HotelBanquet.vue');

// //Restaurant
const restaurantList = () => import(/* webpackChunkName: "js/admin/restaurant" */ '@/admin/pages/restaurant/List-restaurant.vue');
const restaurantAdd = () => import(/* webpackChunkName: "js/admin/restauradd" */ '@/admin/pages/restaurant/New-restaurant.vue');
const restaurantEdit = () => import(/* webpackChunkName: "js/admin/restauedit" */ '@/admin/pages/restaurant/Edit-restaurant.vue');
const restaurantView = () => import(/* webpackChunkName: "js/admin/restaurantView" */ '@/admin/pages/restaurant/View_restaurant.vue');

//Rooms
const NewRoom = () => import(/* webpackChunkName: "js/admin/newRoom" */ '@/admin/pages/hotel/rooms/New-room.vue');

//Banquets
const NewBanquet = () => import(/* webpackChunkName: "js/admin/newBanquet" */ '@/admin/pages/hotel/banquets/new_banquet.vue');
const BanquetlList = () => import(/* webpackChunkName: "js/admin/BanquetList" */ '@/admin/pages/hotel/banquets/list_Banquets.vue');
const EditBanquet = () => import(/* webpackChunkName: "js/admin/editBanquet" */ '@/admin/pages/hotel/banquets/edit_banquets.vue');

//Room Categories
const roomCategories = () => import(/* webpackChunkName: "js/admin/roomCategory" */ '@/admin/pages/hotel/room-category/List.vue');
const roomCategoryAdd = () => import(/* webpackChunkName: "js/admin/roomCategoryAdd" */ '@/admin/pages/hotel/room-category/New.vue');
const roomCategoryEdit = () => import(/* webpackChunkName: "js/admin/roomCategoryEdit" */ '@/admin/pages/hotel/room-category/Edit.vue');
const roomCategoryView = () => import(/* webpackChunkName: "js/admin/roomCategoryView" */ '@/admin/pages/hotel/room-category/View.vue');

//Banquet Categories
const banquetCategories = () => import(/* webpackChunkName: "js/admin/banquetCategories" */ '@/admin/pages/hotel/banquet-category/List.vue');
const banquetCategoryAdd = () => import(/* webpackChunkName: "js/admin/banquetCategoryAdd" */ '@/admin/pages/hotel/banquet-category/New.vue');
const banquetCategoryEdit = () => import(/* webpackChunkName: "js/admin/banquetCategoryEdit" */ '@/admin/pages/hotel/banquet-category/Edit.vue');
const banquetCategoryView = () => import(/* webpackChunkName: "js/admin/banquetCategoryView" */ '@/admin/pages/hotel/banquet-category/View.vue');


export default[
    //Hotel
    { meta: {permId: 60}, path: '/hotels', component: HotelList },
    //{ meta: {permId: 60}, path: '/hotel-list/:state', component: HotelList },
    { meta: {permId: 60}, path: '/add-hotel', component: HotelAdd },
    { meta: {permId: 60}, path: '/edit-hotel/:id', component: HotelEdit },
    { meta: {permId: 60}, path: '/hotel-view/:id', component: HotelView },

    { meta: {permId: 60}, path: '/add-hotel-banquet', component: BanquetHotelAdd },
    

    //Restaurant
    { meta: {permId: 61}, path: '/restaurant-list', component: restaurantList },
    { meta: {permId: 61}, path: '/add-restaurant', component: restaurantAdd },
    { meta: {permId: 61}, path: '/edit-restaurant/:id', component: restaurantEdit },
    { meta: {permId: 61}, path: '/restaurant-view/:id', component: restaurantView },

    //Banquets
    { meta: {permId: 102}, path: '/add-banquet', component: NewBanquet },
    { meta: {permId: 102}, path: '/banquet-list', component: BanquetlList },
    { meta: {permId: 102}, path: '/edit-banquet/:id', component: EditBanquet },

    //Rooms
    { meta: {permId: 60}, path: '/add-room', component: NewRoom },

    //Room Categories
    { meta: {permId: 98}, path: '/room-categories', component: roomCategories },
    { meta: {permId: 98}, path: '/room-categories-add', component: roomCategoryAdd },
    { meta: {permId: 98}, path: '/room-categories/:id', component: roomCategoryEdit },
    { meta: {permId: 98}, path: '/room-categories-view/:id', component: roomCategoryView },

    //Banquet Categories
    { meta: {permId: 99}, path: '/banquet-categories', component: banquetCategories },
    { meta: {permId: 99}, path: '/banquet-categories-add', component: banquetCategoryAdd },
    { meta: {permId: 99}, path: '/banquet-categories/:id', component: banquetCategoryEdit },
    { meta: {permId: 99}, path: '/banquet-categories-view/:id', component: banquetCategoryView },

]