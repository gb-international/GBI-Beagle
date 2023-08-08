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

    { meta: {permId: 62}, path: '/bus-list', component: BusList },
    { meta: {permId: 62}, path: '/bus/:id', component: BusEdit },
    { meta: {permId: 62}, path: '/view-bus/:id', component: BusView },
    { meta: {permId: 62}, path: '/add-bus', component: BusAdd },
    // Train

    { meta: {permId: 63}, path: '/train-list', component: TrainList },
    { meta: {permId: 63}, path: '/train/:id', component: TrainEdit },
    { meta: {permId: 63}, path: '/train-view/:id', component: TrainView },
    { meta: {permId: 63}, path: '/train-add', component: TrainAdd },
    // Flight

    { meta: {permId: 64}, path: '/flight-list', component: FlightList },
    { meta: {permId: 64}, path: '/flight/:id', component: FlightEdit },
    { meta: {permId: 64}, path: '/flight-view/:id', component: FlightView },
    { meta: {permId: 64}, path: '/flight-add', component: FlightAdd },

]