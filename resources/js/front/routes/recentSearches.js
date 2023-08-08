//Recent Searches
const RecentSearch = () => import(/* webpackChunkName: "js/front/RecentSearch" */ '@/front/pages/user/RecentSearch.vue');

export default [
    { path: '/recent-search/:userID', name: 'RecentSearchPage', meta: { requiresAuth: true }, component: RecentSearch },
]