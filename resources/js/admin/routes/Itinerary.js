// Itinerary
const ItineraryList = () => import(/* webpackChunkName: "js/admin/ItineraryList" */ '@/admin/pages/itinerary/List-itinerary.vue');
const AddItinerary = () => import(/* webpackChunkName: "js/admin/ItineraryAdd" */ '@/admin/pages/itinerary/New-itinerary.vue');
const EditItinerary = () => import(/* webpackChunkName: "js/admin/ItineraryEdit" */ '@/admin/pages/itinerary/Edit-itinerary.vue');
const ItineraryView = () => import(/* webpackChunkName: "js/admin/Itineraryview" */ '@/admin/pages/itinerary/View-itinerary.vue');

const AccountItinerary = () => import(/* webpackChunkName: "js/admin/accountititnerary" */ '@/admin/pages/itinerary/Account-itinerary.vue');
const SendItinerary = () => import(/* webpackChunkName: "js/admin/sendititnerary" */ '@/admin/pages/itinerary/Send-itinerary.vue');
const AccountItineraryView = () => import(/* webpackChunkName: "js/admin/accountitineraryview" */ '@/admin/pages/itinerary/Account-itinerary-view.vue');


const FrontBooking = () => import(/* webpackChunkName: "js/admin/frontbooking" */ '@/admin/pages/itinerary/FrontBooking.vue');
const FrontBookingView = () => import(/* webpackChunkName: "js/admin/frontbookingview" */ '@/admin/pages/itinerary/ViewFrontbooking.vue');
const CalculatorItinerary = () => import(/* webpackChunkName: "js/admin/calculateitinerary" */ '@/admin/pages/itinerary/Calculator-itinerary.vue');


// //SALES department
const ItineraryFromAccount = () => import(/* webpackChunkName: "js/admin/itineraryAccount" */ '@/admin/pages/sales/ItineraryFromAccount.vue');
const SendDetails = () => import(/* webpackChunkName: "js/admin/senddetails" */ '@/admin/pages/sales/Submit-details.vue');



export default [

    { path: '/itinerary-list', component: ItineraryList },
    { path: '/add-itinerary', component: AddItinerary },
    { path: '/account-itinerary', component: AccountItinerary },
    { path: '/edit-itinerary/:itineraryid', component: EditItinerary },
    { path: '/view-itinerary/:id', component: ItineraryView },
    { path: '/send-itinerary/:id', component: SendItinerary },
    { path: '/account-itinerary-view/:id', component: AccountItineraryView },

    { path: '/front-booking', component: FrontBooking },
    { path: '/front-booking/:id', component: FrontBookingView },
    { path: '/calculator/:id', component: CalculatorItinerary },
    //Sales Department
    { path: '/itinerary-from-account', component: ItineraryFromAccount },
    { path: '/submit-details/:id', component: SendDetails },
]