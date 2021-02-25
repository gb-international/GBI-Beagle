// // Tour
const Tours = () => import(/* webpackChunkName: "js/admin/tours" */ '@/admin/pages/tour/List-tour.vue');
const TourAdd = () => import(/* webpackChunkName: "js/admin/touradd" */ '@/admin/pages/tour/New-tour.vue');
const TourEdit = () => import(/* webpackChunkName: "js/admin/touredit" */ '@/admin/pages/tour/Edit-tour.vue');
const TourView = () => import(/* webpackChunkName: "js/admin/tourview" */ '@/admin/pages/tour/View-tour.vue');

const Tourtype = () => import(/* webpackChunkName: "js/admin/tourtype" */ '@/admin/pages/tour/tourtype/List-tourtype.vue');
const TourtypeAdd = () => import(/* webpackChunkName: "js/admin/tourtypeadd" */ '@/admin/pages/tour/tourtype/New-tourtype.vue');
const TourtypeEdit = () => import(/* webpackChunkName: "js/admin/tourtypeedit" */ '@/admin/pages/tour/tourtype/Edit-tourtype.vue');

const Userpayments = () => import(/* webpackChunkName: "js/admin/userpayments" */ '@/admin/pages/tour/userpayment/List-payment.vue');
const UserpaymentsAdd = () => import(/* webpackChunkName: "js/admin/userpayadd" */ '@/admin/pages/tour/userpayment/New-payment.vue');
const UserpaymentsEdit = () => import(/* webpackChunkName: "js/admin/userpayedit" */ '@/admin/pages/tour/userpayment/Edit-payment.vue');
const UserpaymentsView = () => import(/* webpackChunkName: "js/admin/userpayview" */ '@/admin/pages/tour/userpayment/View-payment.vue');


// tourprogram
const Tourprogram = () => import(/* webpackChunkName: "js/admin/Tourprogram" */ '@/admin/pages/website/home/List-tourprogram.vue');
const TourprogramAdd = () => import(/* webpackChunkName: "js/admin/TourprogramAdd" */ '@/admin/pages/website/home/New-tourprogram.vue');
const TourprogramEdit = () => import(/* webpackChunkName: "js/admin/TourprogramEdit" */ '@/admin/pages/website/home/Edit-tourprogram.vue');

// bookeduser
const ListStudentPayment = () => import(/* webpackChunkName: "js/admin/ListStudentPayment" */ '@/admin/pages/bookedtour/payment/ListStudentPayment.vue');
const EditStudentPayment = () => import(/* webpackChunkName: "js/admin/EditStudentPayment" */ '@/admin/pages/bookedtour/payment/EditStudentPayment');
const ViewStudentPayment = () => import(/* webpackChunkName: "js/admin/ViewStudentPayment" */ '@/admin/pages/bookedtour/payment/ViewStudentPayment');

export default [
    // Tour
    { path: '/tours', component: Tours },
    { path: '/tours/:id', component: TourEdit },
    { path: '/tour-add', component: TourAdd },
    { path: '/view-tour/:id', component: TourView },

    // Tour type
    { path: '/tourtype', component: Tourtype },
    { path: '/tourtype/:id', component: TourtypeEdit },
    { path: '/tourtype-add', component: TourtypeAdd },

    // user payment
    { path: '/userpayments', component: Userpayments },
    { path: '/userpayments/:id', component: UserpaymentsEdit },
    { path: '/userpayments-add', component: UserpaymentsAdd },
    { path: '/userpayments-view/:id', component: UserpaymentsView },
    
    // Tour tourprogram
    { path: '/tourprogram', component: Tourprogram },
    { path: '/tourprogram/:id', component: TourprogramEdit },
    { path: '/tourprogram-add', component: TourprogramAdd },

    { path: '/bookedusers/:school_id/:tour_code',component: ListStudentPayment},
    { path: '/bookedusers/:id', component: EditStudentPayment },
    { path: '/bookedusers-view/:id', component: ViewStudentPayment },
]