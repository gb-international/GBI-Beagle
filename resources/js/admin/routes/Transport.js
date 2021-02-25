
// // Transport 
// // 
// //________ Bus 

const BusList = () => import(/* webpackChunkName: "js/admin/BusList" */ '@/admin/pages/bus/List-bus.vue');
const BusEdit = () => import(/* webpackChunkName: "js/admin/BusEdit" */ '@/admin/pages/bus/Edit-bus.vue');
const BusView = () => import(/* webpackChunkName: "js/admin/BusView" */ '@/admin/pages/bus/View-bus.vue');
const BusAdd = () => import(/* webpackChunkName: "js/admin/BusAdd" */ '@/admin/pages/bus/New-bus.vue');

// //________ Train 

const TrainList = () => import(/* webpackChunkName: "js/admin/TrainList" */ '@/admin/pages/train/List-train.vue');
const TrainEdit = () => import(/* webpackChunkName: "js/admin/TrainEdit" */ '@/admin/pages/train/Edit-train.vue');
const TrainView = () => import(/* webpackChunkName: "js/admin/TrainView" */ '@/admin/pages/train/View-train.vue');
const TrainAdd = () => import(/* webpackChunkName: "js/admin/TrainAdd" */ '@/admin/pages/train/New-train.vue');

// //________ Flight 

const FlightList = () => import(/* webpackChunkName: "js/admin/FlightList" */ '@/admin/pages/flight/List-flight.vue');
const FlightEdit = () => import(/* webpackChunkName: "js/admin/FlightEdit" */ '@/admin/pages/flight/Edit-flight.vue');
const FlightView = () => import(/* webpackChunkName: "js/admin/FightView" */ '@/admin/pages/flight/View-flight.vue');
const FlightAdd = () => import(/* webpackChunkName: "js/admin/FlightAdd" */ '@/admin/pages/flight/New-flight.vue');

export default [

    // Bus

    { path: '/bus-list', component: BusList },
    { path: '/bus/:id', component: BusEdit },
    { path: '/view-bus/:id', component: BusView },
    { path: '/add-bus', component: BusAdd },
    // Train

    { path: '/train-list', component: TrainList },
    { path: '/train/:id', component: TrainEdit },
    { path: '/train-view/:id', component: TrainView },
    { path: '/train-add', component: TrainAdd },
    // Flight

    { path: '/flight-list', component: FlightList },
    { path: '/flight/:id', component: FlightEdit },
    { path: '/flight-view/:id', component: FlightView },
    { path: '/flight-add', component: FlightAdd },

]