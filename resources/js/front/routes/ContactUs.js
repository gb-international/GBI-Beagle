//contact form
const ContactUs = () => import(/* webpackChunkName: "js/front/ContactUs" */ '@/front/pages/ContactUs/ContactUs.vue');

export default [
    { path: '/contact-us', component: ContactUs },
    /*{ path: '/', component: ContactUs }, temporary*/
]