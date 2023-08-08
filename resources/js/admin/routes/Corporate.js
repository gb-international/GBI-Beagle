// Corporate
const Companies = () => import(/* webpackChunkName: "js/admin/companies" */ '@/admin/pages/corporate/List-company.vue');
const CompanyAdd = () => import(/* webpackChunkName: "js/admin/companyadd" */ '@/admin/pages/corporate/New-company.vue');
const CompanyEdit = () => import(/* webpackChunkName: "js/admin/companyedit" */ '@/admin/pages/corporate/Edit-company.vue');
const CompanyView = () => import(/* webpackChunkName: "js/admin/companyview" */ '@/admin/pages/corporate/View-company.vue');

// Tour
const Tours = () => import(/* webpackChunkName: "js/admin/corptours" */ '@/admin/pages/corporate/tour/List-tour.vue');
const TourAdd = () => import(/* webpackChunkName: "js/admin/corptouradd" */ '@/admin/pages/corporate/tour/New-tour.vue');
const TourEdit = () => import(/* webpackChunkName: "js/admin/corptouredit" */ '@/admin/pages/corporate/tour/Edit-tour.vue');
const TourView = () => import(/* webpackChunkName: "js/admin/corptourview" */ '@/admin/pages/corporate/tour/View-tour.vue');

// Corp payments
const Userpayments = () => import(/* webpackChunkName: "js/admin/corppayments" */ '@/admin/pages/corporate/tour/userpayment/List-payment.vue');
const UserpaymentsAdd = () => import(/* webpackChunkName: "js/admin/corppayadd" */ '@/admin/pages/corporate/tour/userpayment/New-payment.vue');
const UserpaymentsEdit = () => import(/* webpackChunkName: "js/admin/corppayedit" */ '@/admin/pages/corporate/tour/userpayment/Edit-payment.vue');
const UserpaymentsView = () => import(/* webpackChunkName: "js/admin/corppayview" */ '@/admin/pages/corporate/tour/userpayment/View-payment.vue');

// Corp bookedusers
const ListPayment = () => import(/* webpackChunkName: "js/admin/ListcorpPayment" */ '@/admin/pages/bookedtour/corporate/payment/ListPayment.vue');
const EditPayment = () => import(/* webpackChunkName: "js/admin/EditcorpPayment" */ '@/admin/pages/bookedtour/corporate/payment/EditPayment.vue');
const ViewPayment = () => import(/* webpackChunkName: "js/admin/ViewcorpPayment" */ '@/admin/pages/bookedtour/corporate/payment/ViewPayment.vue');


export default[
    // Corporate
    {  meta: {permId: 90}, path: '/companies', component: Companies },
    {  meta: {permId: 90}, path: '/add-company', component: CompanyAdd },
    {  meta: {permId: 90}, path: '/company/:id', component: CompanyEdit },
    {  meta: {permId: 90}, path: '/view-company/:id', component: CompanyView },

    // Tour
    { meta: {permId: 91}, path: '/corporate/tours', component: Tours },
    { meta: {permId: 91}, path: '/corporate/tours/:id', component: TourEdit },
    { meta: {permId: 91}, path: '/corporate/tour-add', component: TourAdd },
    { meta: {permId: 91}, path: '/corporate/view-tour/:id', component: TourView },

    // Payments
    { meta: {permId: 92}, path: '/corporate/userpayments', component: Userpayments },
    { meta: {permId: 92}, path: '/corporate/userpayments/:id', component: UserpaymentsEdit },
    { meta: {permId: 92}, path: '/corporate/userpayments-add', component: UserpaymentsAdd },
    { meta: {permId: 92}, path: '/corporate/userpayments-view/:id', component: UserpaymentsView },

    // Booked users Payments
    { meta: {permId: 91}, path: '/corporate/bookedusers/:company_id/:tour_code',component: ListPayment},
    { meta: {permId: 91}, path: '/corporate/bookedusers/:id', component: EditPayment },
    { meta: {permId: 91}, path: '/corporate/bookedusers-view/:id', component: ViewPayment },

]