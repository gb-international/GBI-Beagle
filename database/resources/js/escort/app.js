require('@/bootstrap');
import Vue from 'vue';
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import vuecookies from 'vue-cookies';
import { createRouter } from './router';
import { createStore } from "@/escort/store/index"
import swal from 'sweetalert2'
import { Form, HasError, AlertError } from 'vform'
import IdleVue from "idle-vue";


Vue.config.productionTip = false;
Vue.use(Vuex)
Vue.use(vuecookies)
window.$ = window.jQuery = require('jquery');
Vue.use(VueRouter)
const store = new createStore();
Vue.component('escort', require('@/escort/App.vue').default);
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.prototype.$Form = Form;
Vue.prototype.$swal = swal;

const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
Vue.prototype.$toast = toast

const eventsHub = new Vue();
//600000, // 10 Mint Auto logout,
Vue.use(IdleVue, {
    eventEmitter: eventsHub,
    store,
    idleTime: 600000, // 10 Mint Auto logout,
  startAtIdle: false
});


const router = new createRouter();
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/escort/login')
    } else { next() }
});


const app = new Vue({
    el: '#app',
    router,
    store
});

