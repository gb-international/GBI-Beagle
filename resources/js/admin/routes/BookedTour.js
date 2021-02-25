// Booked Tour
const BookedTours = () => import(/* webpackChunkName: "js/admin/BookedTours" */ '@/admin/pages/bookedtour/List-reservation.vue');
const BookedEscort = () => import(/* webpackChunkName: "js/admin/BookedEscort" */ '@/admin/pages/bookedtour/tourmanager/New-tourmanager.vue');
const BookedHotel = () => import(/* webpackChunkName: "js/admin/BookedHotel" */ '@/admin/pages/bookedtour/New-hotel.vue');
const BookedRestaurant = () => import(/* webpackChunkName: "js/admin/bookedRestaurant" */ '@/admin/pages/bookedtour/New-restaurant.vue');
const BookedSightseen = () => import(/* webpackChunkName: "js/admin/bookedsightseeing" */ '@/admin/pages/bookedtour/New-sightseen.vue');
const BookedFlight = () => import(/* webpackChunkName: "js/admin/bookedflight" */ '@/admin/pages/bookedtour/New-flight.vue');
const BookedTrain = () => import(/* webpackChunkName: "js/admin/bookedtrain" */ '@/admin/pages/bookedtour/New-train.vue');

const BookedBus = () => import(/* webpackChunkName: "js/admin/bookedbus" */ '@/admin/pages/bookedtour/New-bus.vue');
const BookedFood = () => import(/* webpackChunkName: "js/admin/bookedfood" */ '@/admin/pages/bookedtour/Food.vue');
const BookedPnr = () => import(/* webpackChunkName: "js/admin/bookpnr" */ '@/admin/pages/bookedtour/Pnr-List.vue');
const BookedStudent = () => import(/* webpackChunkName: "js/admin/BookedStudent" */ '@/admin/pages/bookedtour/Groupmember-list.vue');
const PnrUser = () => import(/* webpackChunkName: "js/admin/PnrUser" */ '@/admin/pages/bookedtour/PnrUser.vue');
const EscortUpdate = () => import(/* webpackChunkName: "js/admin/EscortList" */ '@/admin/pages/bookedtour/New-EscortUpdate.vue');
const PaymentList = () => import(/* webpackChunkName: "js/admin/paymentlist" */ '@/admin/pages/bookedtour/payment/List.vue');

const addPaymentMethod = () => import(/* webpackChunkName: "js/admin/AddPaymethod" */ '@/admin/pages/bookedtour/payment/Add-payment.vue');
const UpdatePaymentMethod = () => import(/* webpackChunkName: "js/admin/UpdatePaymethod" */ '@/admin/pages/bookedtour/payment/Update-payment.vue');


export default[
    { path: '/booked-tour/:id', component: BookedTours },
    { path: '/booked-tour-manager/:id', component: BookedEscort },
    { path: '/booked-tour-hotel/:id', component: BookedHotel },
    { path: '/booked-tour-restaurant/:id/:tour_code', component: BookedRestaurant },
    { path: '/booked-sightseen/:id/:tour_code/:itinerary_id', component: BookedSightseen },
    { path: '/booked-tour-flight/:id', component: BookedFlight },
    { path: '/booked-tour-train/:id', component: BookedTrain },
    { path: '/booked-tour-bus/:id', component: BookedBus },
    { path: '/booked-tour-pnr/:transport/:id/:tour_id', component: BookedPnr },
    { path: '/booked-tour-student/:school_id/:id', component: BookedStudent },
    { path: '/pnr-users/:transport/:id/:tour_id', component: PnrUser },
    { path: '/payments/:school_id/:tour_code', component: PaymentList },
    { path: '/add-paymentmethod/:school_id/:tour_code', component: addPaymentMethod },
    { path: '/update-paymentmethod/:id', component: UpdatePaymentMethod },
    { path: '/escort-update/:id/:tour_code', component: EscortUpdate },

    { path: '/foods/:tour_id/:tour_code', component: BookedFood },
   
]

