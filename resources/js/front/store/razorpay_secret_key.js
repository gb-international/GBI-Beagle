import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';
Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state: {
            razorpay_order:[],
            payment_record:[],
            razorpay_key_id:"rzp_test_zqEQ6FLsiHc4WG",
            currency:"INR",
            raz_name:"GB International",
            raz_description:"Test Transaction from GB International",
            raz_image_url:"/assets/front/images/gbi_logo.png",
        },
        // Getters help to fetch the data from the templates 
        getters: {

        },
        //getAllTableData();
        actions: {
            // Get all the data from the api

        },
        mutations: {
            // Return all the data related to the api call
           
        }
    })
}