import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';
import Api from '@/escort/helpers/api';

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state: {
            loogin: Vue.$cookies.get('escort_id'),
            itinerary_title: '',
            tour_code: Vue.$cookies.get('tour_code'),
            sightseeings: [],
            foods: [],
            hotels: [],
            flights: [],
            buses: [],
            trains: [],
            restaurants: [],
            pax: [],
        },
        getters: {
            isLoggedIn(state){
                return state.loogin
            },
            getTitle(state){
                return state.itinerary_title
            },
            getTourCode(state){
                return state.tour_code
            },
            getSightseeings(state){
                return state.sightseeings
            }
        },
        actions: {
            setTourCode(context,code){
                context.commit('TOUR_CODE',code);
            },
            loadItineraryTitle: (context) => {
                Api.get('/itinerary-title/' + Vue.$cookies.get('tour_code'))
                    .then(response => context.commit('ITINERARY_TITLE',response ))
                    .catch(error => console.error(error));
            },
            
            getSightseeing: (context) => {
                Api.get('/sightseeing/' + Vue.$cookies.get('tour_code'))
                    .then(response => context.commit('SIGHTSEEING',response ))
                    // eslint-disable-next-line
                    .catch(error => console.error(error));
            },
            
            getFoods: (context) => {
                Api.get('/packs/' + Vue.$cookies.get('tour_code'))
                    .then(response => context.commit('FOODS',response ))
                    // eslint-disable-next-line
                    .catch(error => console.error(error));
            },            
            getHotels: (context) => {
                Api.get('/hotels/' + Vue.$cookies.get('tour_code'))
                    .then(response => context.commit('HOTELS',response ))
                    // eslint-disable-next-line
                    .catch(error => console.error(error));
            },
            getFlights: (context) => {
                Api.get('/flights/' + Vue.$cookies.get('tour_code'))
                    .then(response => context.commit('FLIGHTS',response ))
                    // eslint-disable-next-line
                    .catch(error => console.error(error));
            },
            getBuses: (context) => {
                Api.get('/buses/' + Vue.$cookies.get('tour_code'))
                    .then(response => context.commit('BUSES',response ))
                    // eslint-disable-next-line
                    .catch(error => console.error(error));
            },
            getTrains: (context) => {
                Api.get('/trains/' + Vue.$cookies.get('tour_code'))
                    .then(response => context.commit('TRAINS',response ))
                    // eslint-disable-next-line
                    .catch(error => console.error(error));
            },
            getRestaurants: (context) => {
                Api.get('/restaurants/' + Vue.$cookies.get('tour_code'))
                    .then(response => context.commit('RESTAURANTS',response ))
                    // eslint-disable-next-line
                    .catch(error => console.error(error));
            },            
            getPax: (context) => {
                Api.get('/pax/' + Vue.$cookies.get('tour_code'))
                    .then(response => context.commit('PAX',response ))
                    // eslint-disable-next-line
                    .catch(error => console.error(error));
            },

        },
        
        mutations: {
            TOUR_CODE(state,payload){
                state.tour_code = payload;
                Vue.$cookies.set('tour_code',payload);
            },
            ITINERARY_TITLE(state, payload){
                state.itinerary_title = payload.itinerary.title;
            },
            SIGHTSEEING(state,payload){
                state.sightseeings = payload;
            },
            FOODS(state,payload){
                state.foods = payload;
            },            
            HOTELS(state,payload){
                state.hotels = payload;
            },
            FLIGHTS(state,payload){
                state.flights = payload;
            },
            BUSES(state,payload){
                state.buses = payload;
            },
            TRAINS(state,payload){
                state.trains = payload;
            },
            RESTAURANTS(state,payload){
                state.restaurants = payload;
            },
            PAX(state,payload){
                state.pax = payload;
            }
        }
    })
}