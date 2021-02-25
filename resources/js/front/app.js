import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import { createRouter } from './routes/Index.js'
import axios from 'axios';
import Vuex from 'vuex';
import vueHeadful from "vue-headful";
import LazyLoadDirective from "@/front/components/LazyLoadDirective";
import { filter } from "./filter";
import { createStore } from './store'
import EventBus from '@/front/store/EventBus';
import VueSweetalert2 from 'vue-sweetalert2';
import VueMeta from 'vue-meta';
import vuecookies from 'vue-cookies';


import api from '@/front/helpers/api';
Object.defineProperty(Vue.prototype, '$api', { value: api })


Vue.use(VueMeta)
Vue.use(VueSweetalert2);
Vue.use(Vuex);
Vue.use(vuecookies)
Vue.prototype.$axios = axios
Vue.prototype.$bus = EventBus
Vue.directive("lazyload", LazyLoadDirective);


// client side js
if (process.window == 'undefined') {
    window.$ = window.jQuery = require('jquery')
    const token = localStorage.token;
    if(token){
        Vue.prototype.$axios.defaults.headers.common['Authorization'] = token
    }
}

Vue.config.productionTip = false;
Vue.component("vue-headful", vueHeadful);

Vue.component("ImageSpinner", require("@/front/components/ImageSpinner.vue").default);
Vue.component("gbi-footer", require("@/front/pages/layouts/Footer.vue").default);
Vue.component("front", require("@/front/pages/layouts/App.vue").default);


const router = createRouter()
const store = createStore()
sync(store, router);

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (vuecookies.get('access_token') == null) {
            next({
                path: '/',
                name: 'home' 
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
});

const app = new Vue({
    el:'#app',
    store,
    router
});


