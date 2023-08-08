//Feedback
const FeedbackForm = () => import(/* webpackChunkName: "js/front/FeedbackForm" */ '@/front/pages/Feedback/feedbackform.vue');
const FeedbackForm2 = () => import(/* webpackChunkName: "js/front/FeedbackForm2" */ '@/front/pages/Feedback/feedbackform.vue');

export default [
    { path: '/feedback-link/:tourID', name: 'FeedbackForm', component: FeedbackForm },
    { path: '/feedback-form/:tourID', name: 'FeedbackForm2', component: FeedbackForm2 },
]