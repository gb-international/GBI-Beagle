

// // Add City 
const ListCity = () => import(/* webpackChunkName: "js/admin/CityList" */ '@/admin/pages/setting/List-city.vue');
const AddCity = () => import(/* webpackChunkName: "js/admin/CityAdd" */ '@/admin/pages/setting/New-city.vue');
const EditCity = () => import(/* webpackChunkName: "js/admin/CityEdit" */ '@/admin/pages/setting/Edit-city.vue');
// // Add State 
const ListState = () => import(/* webpackChunkName: "js/admin/State" */ '@/admin/pages/setting/state/List-state.vue');
const AddState = () => import(/* webpackChunkName: "js/admin/StateAdd" */ '@/admin/pages/setting/state/New-state.vue');

// // Add Country 
const ListCountry = () => import(/* webpackChunkName: "js/admin/CountryList" */ '@/admin/pages/setting/country/List-country.vue');
const AddCountry = () => import(/* webpackChunkName: "js/admin/CountryAdd" */ '@/admin/pages/setting/country/New-country.vue');

export default[
    { path: '/list-city', component: ListCity },
    { path: '/add-city', component: AddCity },
    { path: '/city/:id', component: EditCity },
    { path: '/list-state', component: ListState },
    { path: '/add-state', component: AddState },

    // country
    { path: '/country-list', component: ListCountry },
    { path: '/country-add', component: AddCountry },
]