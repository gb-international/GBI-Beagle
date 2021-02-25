import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Home from '@/escort/pages/Home.vue'
import Dashboard from '@/escort/pages/Dashboard.vue'
import TourList from '@/escort/pages/TourList.vue'
import Sightseeing from '@/escort/pages/Sightseeing.vue'
import Pack from '@/escort/pages/Pack.vue'
import Restaurant from '@/escort/pages/Restaurant.vue'
import Hotel from '@/escort/pages/Hotel.vue'
import Bus from '@/escort/pages/Bus.vue'
import Train from '@/escort/pages/Train.vue'
import Flight from '@/escort/pages/Flight.vue'
import Pax from '@/escort/pages/Pax.vue'
import Error404 from '@/escort/pages/404.vue'

const routes = [
    { path: '/escort/login', component: Home,meta: { requiresAuth: false }},
    { path: '/escort/tour-list', component: TourList, meta: { requiresAuth: true} },
    { path: '/escort/dashboard', component: Dashboard, meta:{ requiresAuth: true }},
    { path: '/escort/sightseeing', component: Sightseeing, meta: { requiresAuth: true }},
    { path: '/escort/pack', component: Pack , meta:{ requiresAuth: true }},
    { path: '/escort/restaurant', component: Restaurant , meta:{ requiresAuth: true }},
    { path: '/escort/hotel', component: Hotel , meta:{ requiresAuth: true }},
    { path: '/escort/bus', component: Bus , meta:{ requiresAuth: true }},
    { path: '/escort/train', component: Train, meta: {requiresAuth: true }},
    { path: '/escort/flight', component: Flight,  meta:{ requiresAuth: true }},
    { path: '/escort/pax', component: Pax,  meta:{ requiresAuth: true }},
    { path: '/escort/*', component: Home, meta: { requiresAuth: true }},
];

export function createRouter() {
    return new Router({
        mode: 'history',
        scrollBehavior() { return { x: 0, y: 0 }; },
        routes
    })
};