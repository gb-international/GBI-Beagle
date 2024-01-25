require('./bootstrap');
import Vue from 'vue';
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import responsive from 'vue-responsive'
import Permissions from './mixins/Permissions';
import VueSession from 'vue-session'
import { routes } from './routes';
import { createStore } from "./store/index"
import VueHtmlToPaper from 'vue-html-to-paper';
import  './filter'
import swal from 'sweetalert2'
import { Form, HasError, AlertError } from 'vform'
import DisableAutocomplete from 'vue-disable-autocomplete';
import { BootstrapVue,TablePlugin } from 'bootstrap-vue';
import vuecookies from 'vue-cookies';
//import  'firebase'

Vue.use(VueSession);
Vue.mixin(Permissions);
Vue.use(vuecookies);
Vue.config.productionTip = false;

//Dsiabled Console messages
Vue.config.devtools = false;
Vue.config.debug = false;
Vue.config.silent = true;
// console.log = function() {};
// End

Vue.use(responsive)
Vue.use(Vuex)
window.$ = window.jQuery = require('jquery');
require('datatables.net');
require('datatables.net-bs');
Vue.use(DisableAutocomplete);
Vue.use(VueRouter);
// bootstrapvue
Vue.use(BootstrapVue);
Vue.use(TablePlugin);
// end bootstrapvue
const options = {
    name: '_blank',
    specs: [
        'fullscreen=yes',
        'titlebar=yes',
        'scrollbars=yes'
    ],
    styles: [
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        'https://unpkg.com/kidlat-css/css/kidlat.css'
    ]
}
Vue.use(VueHtmlToPaper, options);
const store = new createStore();
Vue.component('admin-main', require('@/admin/pages/AdminMaster.vue').default);
Vue.component('admin-nav-top', require('@/admin/pages/AdminNavTop.vue').default);
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.prototype.$Form = Form;
// Sweet alert 2
Vue.prototype.$swal = swal;
const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
Vue.prototype.$toast = toast;
Vue.prototype.$gbiAssets = 'https://gbi-assets.s3.ap-south-1.amazonaws.com';
Vue.prototype.$hostName = 'https://gowithgbi.com:3000'
//Vue.prototype.$hostName = 'localhost:3000'

const router = new VueRouter({
    // mode : 'history',
    base:'/admin',
    routes, // short for `routes: routes`
    mode: 'history',
    scrollBehavior() { return { x: 0, y: 0 }; },
});

// Check if user Has Route perms
router.beforeEach((to, from, next) => {
    const routePerms = window.viewPerms;
    const hasRoutePerm = (perm) => perm.permission_id === to.meta.permId;

    if(routePerms.some(hasRoutePerm) || window.userRole == 1 || !to.meta.permId)
     {
      next(); // allow to enter route
     } 
     else
     {
      next({ name: 'Dashboard' }); // go to dashboard;
     }
})
const app = new Vue({
    el: '#app',
    router,
    store
});

