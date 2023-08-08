

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
	// City
    { meta: {permId: 67}, path: '/list-city', component: ListCity },
    { meta: {permId: 67}, path: '/add-city', component: AddCity },
    { meta: {permId: 67}, path: '/city/:id', component: EditCity },

    // State
    { meta: {permId: 68}, path: '/list-state', component: ListState },
    { meta: {permId: 68}, path: '/add-state', component: AddState },

    // Country
    { meta: {permId: 69}, path: '/country-list', component: ListCountry },
    { meta: {permId: 69}, path: '/country-add', component: AddCountry },
]