import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'
Vue.use(Router);
Vue.use(VueMeta);


import Home from '@/front/routes/Home.js';
import Resources from '@/front/routes/Resources.js';
import GBIBlog from '@/front/routes/GBIBlog.js';
import AboutUs from '@/front/routes/AboutUs.js';
import Feedback from '@/front/routes/Feedback.js';
import ContactUs from '@/front/routes/ContactUs.js';
import ExploreDestination from '@/front/routes/ExploreDestination.js';
import ErrorPage from '@/front/routes/Error.js';
import Hotel from '@/front/routes/Hotel.js';
//import NameList from '@/front/routes/NameList.js';
import Notification from '@/front/routes/Notification.js';
import PaymentLink from '@/front/routes/PaymentLink.js';
import Static from '@/front/routes/Static.js';
import TourPage from '@/front/routes/TourPage.js';
import User from '@/front/routes/User.js';

export function createRouter() {
    return new Router({
        mode: 'history',
        scrollBehavior() { return { x: 0, y: 0 }; },
        linkActiveClass: "nav-link-active",
        routes : [
            ...Home,
            ...Resources,
            ...GBIBlog,
            ...AboutUs,
            ...ContactUs,
            ...ExploreDestination,
            ...ErrorPage,
            ...Hotel,
            ...Feedback,
            //...NameList,
            ...Notification,
            ...PaymentLink,
            ...Static,
            ...TourPage,
            ...User,
        ]
    })
}
