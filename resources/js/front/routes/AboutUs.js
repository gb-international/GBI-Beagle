
//About us
const OurStory = () => import(/* webpackChunkName: "js/front/OurStory" */ '@/front/pages/AboutUs/OurStory.vue');
const HowWework = () => import(/* webpackChunkName: "js/front/HowWework" */ '@/front/pages/AboutUs/HowWework.vue');
const JoinOurTeam = () => import(/* webpackChunkName: "js/front/JoinOurTeam" */ '@/front/pages/AboutUs/JoinOurTeam.vue');
const Domestic = () => import(/* webpackChunkName: "js/front/Domestic" */ '@/front/pages/gallery/Domestic.vue');
const International = () => import(/* webpackChunkName: "js/front/International" */ '@/front/pages/gallery/International.vue');
const ImageList = () => import(/* webpackChunkName: "js/front/ImageList" */ '@/front/pages/gallery/ImageList.vue');


export default [
    //Escort
    { path: '/about-us/our-story', component: OurStory },
    { path: '/about-us/how-we-work', component: HowWework },
    { path: '/about-us/join-our-team', component: JoinOurTeam },

    { path: '/image-gallery/domestic', component: Domestic, name: 'domestic' },
    { path: '/image-gallery/international', component: International, name: 'international' },
    { path: '/image-gallery/images/:slug', component: ImageList, name: 'images' },
]