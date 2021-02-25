import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'
// import AllRoutes from './modules/route';
Vue.use(Router);
Vue.use(VueMeta);

// const Home = () => import(/* webpackChunkName: "Home" */ '@/front/pages/layouts/FrontHome.vue');
import Home from '@/front/pages/layouts/FrontHome.vue'
import faq from '@/front/pages/Resources/Faq.vue'
import ExploreDestination from '@/front/pages/Explore/ExploreDestination.vue'
import SafetySecurity from '@/front/pages/Resources/SafetySecurity.vue'
import TravelEducation from '@/front/pages/Resources/TravelEducation.vue'
import States from '@/front/pages/Encyclopedia/States.vue'
import StateView from '@/front/pages/Encyclopedia/State-view.vue'
import ContactUs from '@/front/pages/ContactUs/ContactUs.vue'
import OurStory from '@/front/pages/AboutUs/OurStory.vue'
import HowWework from '@/front/pages/AboutUs/HowWework.vue'
import JoinOurTeam from '@/front/pages/AboutUs/JoinOurTeam.vue'
import ImageGallery from '@/front/pages/AboutUs/ImageGallery.vue'
import ExploreList from '@/front/pages/Explore/ExploreList.vue'
import ExploreDetail from '@/front/pages/Explore/ExploreDetail.vue'

import Error404 from '@/front/pages/error/404.vue'
import PaymentCancel from '@/front/pages/extra/PaymentCancel.vue'
import PaymentSuccess from '@/front/pages/extra/PaymentSuccess.vue'
import Blogs from '@/front/pages/Blog/list.vue'
import BlogDetail from '@/front/pages/Blog/Detail.vue'
import Category from '@/front/pages/Blog/Category.vue'
import Domestic from '@/front/pages/gallery/Domestic.vue'
import International from '@/front/pages/gallery/International.vue'
import ImageList from '@/front/pages/gallery/ImageList.vue'


import UserInformation from '@/front/pages/user/User-information.vue'
import Dashboard from '@/front/pages/user/Dashboard.vue'
import ProfileEdit from '@/front/pages/user/Profile_edit.vue'
import UpdatePassword from '@/front/pages/user/UpdatePassword.vue'
import ViewGroup from '@/front/pages/user/group/GroupView.vue'
import TourDetail from '@/front/pages/user/tour/Tour-detail.vue'
import TourList from '@/front/pages/user/tour/Tour-list.vue'
import TourPayment from '@/front/pages/user/tour/Tour-payment.vue'
import PaymentMode from '@/front/pages/user/tour/Payment-mode.vue'
import Billing from '@/front/pages/user/payment/BillingInformation.vue'

export function createRouter() {
    return new Router({
        mode: 'history',
        scrollBehavior() { return { x: 0, y: 0 }; },
        linkActiveClass: "nav-link-active",
        routes:[
        { path: '/', component:  Home },
        { path: '/resources/faq', component: faq },
        { path: '/explore-destination', component: ExploreDestination },
        { path: '/resources/safety-security', component: SafetySecurity },
        { path: '/resources/travel-education', component: TravelEducation },
        { path: '/resources/travel-encyclopedia', component: States },
        { path: '/encyclopedia/:id', component: StateView },
        { path: '/contact-us', component: ContactUs },
        { path: '/about-us/our-story', component: OurStory },
        { path: '/about-us/how-we-work', component: HowWework },
        { path: '/about-us/join-our-team', component: JoinOurTeam },
        { path: '/about-us/image-gallery', component: ImageGallery },
        { path: '/image-gallery/domestic', component: Domestic,name: 'domestic' },
        { path: '/image-gallery/international', component: International, name: 'international' },
        { path: '/image-gallery/images/:slug', component: ImageList,name: 'images' },
        { path: '/explore-list', component: ExploreList },
        { path: '/explore-detail/:id', component: ExploreDetail },

        { path: '/user-information', component: UserInformation },
        { path: '/dashboard', component: Dashboard },
        { path: '/tour-list', component: TourList },
        { path: '/tour-detail/:id', component: TourDetail },
        { path: '/profile-edit', component: ProfileEdit },
        { path: '/update-password', component: UpdatePassword },
        { path: '/group-member/:id', component: ViewGroup },
        { path: '/tour-payment/:id', component: TourPayment },
        { path: '/payment-mode/:id', component: PaymentMode },
        { path: '/payment-billing', component: Billing },
        { path: '/payment-cancel', component: PaymentCancel },
        { path: '/payment-success', component: PaymentSuccess },

        { path: '/blog', component: Blogs },
        { path: '/blog/:slug', component: BlogDetail },
        { path: '/blog/category/:slug', component: Category },
        { path: '*', component: Error404 }
        ]
    })
}








// export function createRouter() {
//     return new Router({
//         mode: 'history',
//         scrollBehavior() {
//             return { x: 0, y: 0 };
//         },
//         routes: [
//             ...AllRoutes
//         ]
//     })
// }














// export function createRouter() {
//     return new Router({
//         mode: 'history',
//         scrollBehavior() {
//             return { x: 0, y: 0 };
//         },
//         routes: [
//             ...AllRoutes
//         ]
//     })
// }

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (store.getters.isLoggedIn) {
//             next()
//             return
//         }
//         next('/')
//     } else {
//         next()
//     }
// })

// export default router