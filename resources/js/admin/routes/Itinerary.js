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


//SALES department
const ItineraryFromAccount = () => import(/* webpackChunkName: "js/admin/itineraryAccount" */ '@/admin/pages/sales/ItineraryFromAccount.vue');
const SendDetails = () => import(/* webpackChunkName: "js/admin/senddetails" */ '@/admin/pages/sales/Submit-details.vue');

const ItineraryRequest = () => import(/* webpackChunkName: "js/admin/ItineraryRequest" */ '@/admin/pages/itinerary-request/List.vue');
const ItineraryRequestView = () => import(/* webpackChunkName: "js/admin/ItineraryRequestView" */ '@/admin/pages/itinerary-request/View.vue');


export default [

    { meta: {permId: 57}, path: '/itinerary-list', component: ItineraryList },
    { meta: {permId: 57}, path: '/add-itinerary', component: AddItinerary },
    { meta: {permId: 57}, path: '/account-itinerary', component: AccountItinerary },
    { meta: {permId: 57}, path: '/edit-itinerary/:itineraryid', component: EditItinerary },
    { meta: {permId: 57}, path: '/view-itinerary/:id', component: ItineraryView },
    { meta: {permId: 57}, path: '/send-itinerary/:id', component: SendItinerary },
    { meta: {permId: 57}, path: '/account-itinerary-view/:id', component: AccountItineraryView },
    { meta: {permId: 57}, path: '/calculator/:id', component: CalculatorItinerary },

    { meta: {permId: 59}, path: '/front-booking', component: FrontBooking },
    { meta: {permId: 59}, path: '/front-booking/:id', component: FrontBookingView },
    //Sales Department - Doubts
    { meta: {permId: 57}, path: '/itinerary-from-account', component: ItineraryFromAccount },
    { meta: {permId: 57}, path: '/submit-details/:id', component: SendDetails },

    { meta: {permId: 84}, path: '/itinerary-request', component: ItineraryRequest},
    { meta: {permId: 84}, path: '/itinerary-request/:id', component: ItineraryRequestView},
]