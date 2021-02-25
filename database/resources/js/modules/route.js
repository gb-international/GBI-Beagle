

// const Home = () => import(/* webpackChunkName: "Home" */ '@/components/front/layouts/FrontHome.vue');

import Home from '@/components/front/layouts/FrontHome.vue'
import faq from '@/components/front/Resources/Faq.vue'
import ExploreDestination from '@/components/front/Explore/ExploreDestination.vue'
import SafetySecurity from '@/components/front/Resources/SafetySecurity.vue'
import TravelEducation from '@/components/front/Resources/TravelEducation.vue'
import States from '@/components/front/Encyclopedia/States.vue'
import StateView from '@/components/front/Encyclopedia/State-view.vue'
import ContactUs from '@/components/front/ContactUs/ContactUs.vue'
import OurStory from '@/components/front/AboutUs/OurStory.vue'
import HowWework from '@/components/front/AboutUs/HowWework.vue'
import JoinOurTeam from '@/components/front/AboutUs/JoinOurTeam.vue'
import ImageGallery from '@/components/front/AboutUs/ImageGallery.vue'
import ExploreList from '@/components/front/Explore/ExploreList.vue'
import ExploreDetail from '@/components/front/Explore/ExploreDetail.vue'
import UserInformation from '@/components/front/user/User-information.vue'
import Dashboard from '@/components/front/user/Dashboard.vue'
import ProfileEdit from '@/components/front/user/Profile_edit.vue'
import UpdatePassword from '@/components/front/user/UpdatePassword.vue'
import ViewGroup from '@/components/front/user/group/GroupView.vue'
import TourDetail from '@/components/front/user/tour/Tour-detail.vue'
import TourList from '@/components/front/user/tour/Tour-list.vue'
import TourPayment from '@/components/front/user/tour/Tour-payment.vue'
import PaymentMode from '@/components/front/user/tour/Payment-mode.vue'
import Error404 from '@/components/front/error/404.vue'
import PaymentCancel from '@/components/front/extra/PaymentCancel.vue'
import PaymentSuccess from '@/components/front/extra/PaymentSuccess.vue'
import Blogs from '@/components/front/Blog/list.vue'
import BlogDetail from '@/components/front/Blog/Detail.vue'
import Category from '@/components/front/Blog/Category.vue'

export default [
    
    { path: '/', component: Home, name: 'Home' },
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
    { path: '/payment-cancel', component: PaymentCancel },
    { path: '/payment-success', component: PaymentSuccess },
    
    { path: '/blog', component: Blogs },
    { path: '/blog/:slug', component: BlogDetail },
    { path: '/blog/category/:slug', component: Category },
    { path: '*', component: Error404 }
];




// { path: '/', component: () => import(/* webpackChunkName: "Home" */ '@/components/front/layouts/FrontHome.vue') },

// { path: '/resources/faq', component: () => import(/* webpackChunkName: "faq" */ '@/components/front/Resources/Faq.vue') },

// { path: '/explore-destination', component: () => import(/* webpackChunkName: "ExploreDestination" */ '@/components/front/Explore/ExploreDestination.vue') },

// { path: '/resources/safety-security', component: () => import(/* webpackChunkName: "SafetySecurity" */ '@/components/front/Resources/SafetySecurity.vue') },

// { path: '/resources/travel-education', component: () => import(/* webpackChunkName: "TravelEdu" */ '@/components/front/Resources/TravelEducation.vue') },


// { path: '/resources/travel-encyclopedia', component: () => import(/* webpackChunkName: "encyclopediaTravel" */ '@/components/front/Encyclopedia/States.vue') },

// { path: '/encyclopedia/:id', component: () => import(/* webpackChunkName: "EncyclopediaView" */ '@/components/front/Encyclopedia/State-view.vue') },

// { path: '/contact-us', component: () => import(/* webpackChunkName: "contactus" */ '@/components/front/ContactUs/ContactUs.vue') },

// { path: '/about-us/our-story', component: () => import(/* webpackChunkName: "OurStory" */ '@/components/front/AboutUs/OurStory.vue') },

// { path: '/about-us/how-we-work', component: () => import(/* webpackChunkName: "HowWeWork" */ '@/components/front/AboutUs/HowWework.vue') },

// { path: '/about-us/join-our-team', component: () => import(/* webpackChunkName: "JoinOurTeam" */ '@/components/front/AboutUs/JoinOurTeam.vue') },

// { path: '/about-us/image-gallery', component: () => import(/* webpackChunkName: "ImageGallery" */ '@/components/front/AboutUs/ImageGallery.vue') },

// { path: '/explore-list', component: () => import(/* webpackChunkName: "ExploreList" */ '@/components/front/Explore/ExploreList.vue') },

// { path: '/explore-detail/:id', component: () => import(/* webpackChunkName: "ExploreDetail" */ '@/components/front/Explore/ExploreDetail.vue') },

// { path: '/user-information', component: () => import(/* webpackChunkName: "Userinformation" */ '@/components/front/user/User-information.vue') },

// { path: '/dashboard', component: () => import(/* webpackChunkName: "dashabord" */ '@/components/front/user/Dashboard.vue') },


// { path: '/tour-list', component: () => import(/* webpackChunkName: "tourlist" */ '@/components/front/user/tour/Tour-list.vue') },

// { path: '/tour-detail/:id', component: () => import(/* webpackChunkName: "tourdetail" */ '@/components/front/user/tour/Tour-detail.vue') },

// { path: '/profile-edit', component: () => import(/* webpackChunkName: "profileedit" */ '@/components/front/user/Profile_edit.vue') },

// { path: '/update-password', component: () => import(/* webpackChunkName: "updatepass" */ '@/components/front/user/UpdatePassword.vue') },
// { path: '/group-member/:id', component: () => import(/* webpackChunkName: "groupmember" */ '@/components/front/user/group/GroupView.vue') },

// { path: '/tour-payment/:id', component: () => import(/* webpackChunkName: "tourPay" */ '@/components/front/user/tour/Tour-payment.vue') },

// { path: '/payment-mode/:id', component: () => import(/* webpackChunkName: "paymentMode" */ '@/components/front/user/tour/Payment-mode.vue') },

// { path: '/payment-cancel', component: () => import(/* webpackChunkName: "PaymentCancel" */ '@/components/front/extra/PaymentCancel.vue') },
// { path: '/payment-success', component: () => import(/* webpackChunkName: "paymentSuccess" */ '@/components/front/extra/PaymentSuccess.vue') },

// { path: '/blog', component: () => import(/* webpackChunkName: "blogs" */ '@/components/front/Blog/list.vue') },

// { path: '/blog/:slug', component: () => import(/* webpackChunkName: "blogdetail" */ '@/components/front/Blog/Detail.vue') },

// { path: '/blog/category/:slug', component: () => import(/* webpackChunkName: "cateogryblog" */ '@/components/front/Blog/Category.vue') },

// { path: '*', component: () => import(/* webpackChunkName: "errror" */ '@/components/front/error/404.vue') }