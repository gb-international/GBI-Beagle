//escort
const UserInformation = () => import(/* webpackChunkName: "js/front/UserInformation" */ '@/front/pages/user/User-information.vue');
const Dashboard = () => import(/* webpackChunkName: "js/front/Dashboard" */ '@/front/pages/user/Dashboard');
const ProfileEdit = () => import(/* webpackChunkName: "js/front/ProfileEdit" */ '@/front/pages/user/ProfileEdit');
const UpdatePassword = () => import(/* webpackChunkName: "js/front/UpdatePassword" */ '@/front/pages/user/UpdatePassword');
const GroupView = () => import(/* webpackChunkName: "js/front/GroupView" */ '@/front/pages/user/group/GroupView');
const TourDetail = () => import(/* webpackChunkName: "js/front/TourDetail" */ '@/front/pages/user/tour/TourDetail');
const TourList = () => import(/* webpackChunkName: "js/front/TourList" */ '@/front/pages/user/tour/TourList');
const TourPayment = () => import(/* webpackChunkName: "js/front/TourPayment" */ '@/front/pages/user/tour/TourPayment');
const PaymentMode = () => import(/* webpackChunkName: "js/front/PaymentMode" */ '@/front/pages/user/tour/PaymentMode');
const BillingInformation = () => import(/* webpackChunkName: "js/front/BillingInformation" */ '@/front/pages/user/payment/BillingInformation');

const PaymentCancel = () => import(/* webpackChunkName: "js/front/PaymentCancel" */ '@/front/pages/extra/PaymentCancel');
const PaymentSuccess = () => import(/* webpackChunkName: "js/front/PaymentSuccess" */ '@/front/pages/extra/PaymentSuccess');




export default [
    //Escort
    {
        path: '/user-information',
        component: UserInformation,
        meta: { requiresAuth: true }
    },
    { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
    { path: '/tour-list', component: TourList, meta: { requiresAuth: true } },
    { path: '/tour-detail', component: TourDetail, meta: { requiresAuth: true } },
    { path: '/profile-edit',component: ProfileEdit, meta: { requiresAuth: true } },
    { path: '/update-password',component:UpdatePassword,meta: { requiresAuth: true }},
    { path: '/group-member/:id', component: GroupView, meta: { requiresAuth: true } },
    { path: '/tour-payment', component: TourPayment,meta:{ requiresAuth: true } },
    { path: '/payment-mode/:id', component: PaymentMode,meta:{ requiresAuth: true } },
    { path: '/payment-billing', component: BillingInformation,meta:{ requiresAuth: true } },
    { path: '/payment-cancel', component: PaymentCancel,meta:{ requiresAuth: true } },
    { path:'/payment-success',component: PaymentSuccess, meta:{ requiresAuth: true }},
]