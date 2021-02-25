const Bankdetail = () => import(/* webpackChunkName: "js/admin/bankdetail" */ '@/admin/pages/website/bankdetail/Bankdetail.vue');
const BankdetailAdd = () => import(/* webpackChunkName: "js/admin/bankdetailadd" */ '@/admin/pages/website/bankdetail/New-Bankdetail.vue');
const BankdetailEdit = () => import(/* webpackChunkName: "js/admin/bandkdetailedit" */ '@/admin/pages/website/bankdetail/Edit-Bankdetail.vue');
const BankdetailView = () => import(/* webpackChunkName: "js/admin/BankdetailView" */ '@/admin/pages/website/bankdetail/View-Bankdetail.vue');

export default[
    // Bank detail
    { path: '/schoolbankdetails', component: Bankdetail },
    { path: '/schoolbankdetails/:id', component: BankdetailEdit },
    { path: '/schoolbankdetails-view/:id', component: BankdetailView },
    { path: '/schoolbankdetails-add', component: BankdetailAdd },

]