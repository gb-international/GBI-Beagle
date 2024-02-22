
//About us
const OurStory = () => import(/* webpackChunkName: "js/front/OurStory" */ '@/front/pages/AboutUs/OurStory.vue');
const HowWework = () => import(/* webpackChunkName: "js/front/HowWework" */ '@/front/pages/AboutUs/HowWework.vue');
const JoinOurTeam = () => import(/* webpackChunkName: "js/front/JoinOurTeam" */ '@/front/pages/AboutUs/JoinOurTeam.vue');
const Domestic = () => import(/* webpackChunkName: "js/front/Domestic" */ '@/front/pages/gallery/Domestic.vue');
const International = () => import(/* webpackChunkName: "js/front/International" */ '@/front/pages/gallery/International.vue');
const ImageList = () => import(/* webpackChunkName: "js/front/ImageList" */ '@/front/pages/gallery/ImageList.vue');

//Join our team
const jobType = () => import(/* webpackChunkName: "js/front/JobTypeGBI" */ '@/front/pages/AboutUs/JobType.vue');
const JobPage = () => import(/* webpackChunkName: "js/front/JobPageGBI" */ '@/front/pages/AboutUs/JobPage.vue');

export default [

    { path: '/about-us', component: OurStory },
    { path: '/about-us/how-we-work', component: HowWework },
    { path: '/join-our-team', component: JoinOurTeam },

    { path: '/join-our-team/:jobType', component: jobType },
    { path: '/join-our-team/job/:id', component: JobPage },

    { path: '/image-gallery', component: Domestic, name: 'domestic' },
    { path: '/image-gallery/international', component: International, name: 'international' },
    { path: '/image-gallery/images/:slug', component: ImageList, name: 'images' },
]