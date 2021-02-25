import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';
import Api from '@/admin/helpers/api';
import swal from 'sweetalert2';
Vue.prototype.$swal = swal;
const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
Vue.prototype.$toast = toast

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state:{
            singlepost:[],
            alldata:[], // All data from the api
            editdata:{},// Get Edit data 
            SearchAll:[],
            isBusy:false,
            post_get_items:[],
            items:[],
            response:'',
        },
        // Getters help to fetch the data from the templates 
        getters:{
            // Return All the data related to the api
            getAllData(state){
                return state.alldata
            },
            getAllSearchData(state){
                return state.SearchAll
            },
            getEditData(state){
                return state.editdata
            },
            getItems(state){
                return state.items
            },
            postgetItems(state){
                return state.post_get_items
            },
            isBusy(state){
                return state.isBusy
            },
            getResponse(state){
                return state.response
            }
        },
        //getAllTableData();
        actions:{
            // Get all the data from the api
            getAllData(context,api){
                axios.get(api)
                    .then((response)=>{
                        context.commit('alldata',response.data.data)
                    })
                },
            getEditData({ commit, state }, payload){
                state.isBusy = true;
                Api.get(payload)
                    .then(res => commit('EDITITEM', res))
                    .catch(error => console.error(error));
            },
            getPostById(context,payload){
                axios.get('/singlepost/'+payload)
                    .then((response)=>{
                        context.commit('siglePost',response.data.post)
                    })
            },
            SearchPost(context,payload){
                axios.get('api/search?s='+payload)
                    .then((response)=>{
                        context.commit('getSearchPost',response.data.data)
                    })

            },

            SearchAlldata(context,payload){
                axios.get('api/search-all?s='+payload.s+'&d='+payload.d)
                    .then((response)=>{
                        console.log(response.data.data);
                        context.commit('getSearchPostAll',response.data.data)

                    })
            },
            postgetItems({ commit, state }, payload) {
                state.isBusy = true;
                Api.get(payload.api,payload.data)
                    .then(res => commit('POSTGETITEMS', res))
                    .catch(error => console.error(error));
            },
            getItems({commit,state},payload){
                state.isBusy = true;
                Api.get(payload)
                    .then(res => commit('ITEMS', res))
                    .catch(error => console.error(error));
            },
            removePosts({commit},payload){
                commit('REMOVE_POSTS',payload)
            },
            deleteItem({commit,state},payload){
                swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon:'warning',
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                })
                .then((result) => {
                    if (result.value) {
                        Api.delete(payload.api).then((res) => {
                            if(payload.index != -1){
                                state.items.data.splice(payload.index,1)
                            }
                        });
                        swal.fire(
                            "Deleted!",
                            "Item deleted successfully",
                            "success"
                        );
                    }
                });
            }
        
        },
        mutations:{
            // Return alll the data related to the api call
            alldata(state,data){
                return state.alldata = data
            },
            editdata(state,payload){
                return state.editdata = payload
            },
            siglePost(state,payload){
                return state.singlepost = payload
            },
            getSearchPost(state,payload){
                state.alldata = payload
            },
            getSearchPostAll(state,payload){
                state.SearchAll = payload
            },
            ITEMS(state,payload){
                state.items = payload;
                state.isBusy = !state.isBusy
            },            
            POSTGETITEMS(state,payload){
                state.post_get_items = payload;
                state.isBusy = !state.isBusy
            },            
            EDITITEM(state,payload){
                state.editdata = payload;
                state.isBusy = !state.isBusy
            },            

            RESPONSE(state,payload){
                state.response = payload
            },
            REMOVE_POSTS(state,payload){
                state.posts.data.slice(payload,1)
            }
        
        }
    })
}