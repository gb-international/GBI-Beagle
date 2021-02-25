import Vue from 'vue'
import axios from 'axios'
import { createRouter } from '@/router'
const router = createRouter()

let config = {
    baseURL: '',
    timeout: 30000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
}

const GET = (url, params) => REQUEST({ method: 'get', url, params })
const POST = (url, data) => REQUEST({ method: 'post', url, data })
const PUT = (url, data) => REQUEST({ method: 'put', url, data })
const PATCH = (url, data) => REQUEST({ method: 'patch', url, data })
const DELETE = url => REQUEST({ method: 'delete', url })



const REQUEST = conf => {
    conf = { ...conf, ...config }
    conf = setAccessTokenHeader(conf)

    return new Promise((resolve, reject) => {
        axios
            .request(conf)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                outputError(error);
                reject(error)
            })
        })
    }
    
    function setAccessTokenHeader(config) {
        const access_token = Vue.$cookies.get('access_token');
    if (access_token) {
        config.headers.Authorization = 'Bearer ' + access_token
    }

    return config
}


/* https://github.com/axios/axios#handling-errors */
function outputError(error) {
    if (error.response) {
        /**
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        if (error.response.status === 401) {
            var data = {refresh_token:Vue.$cookies.get('refresh_token')};
            axios.post('/api/refreshtoken',data).then((resp)=>{
                Vue.$cookies.set('access_token',resp.data.token);
                Vue.$cookies.set('refresh_token',resp.data.refresh_token);
                Vue.$cookies.set('login',2);
                return true;
            }).catch(error=>{
                console.log(error);
                resetAll();
                router.replace({ name: 'Home' })                
            })
            return
        }
        else {
            /* other response status such as 403, 404, 422, etc */
            resetAll();
        }
    }
    else if (error.request) {
        /**
         * The request was made but no response was received
         * `error.request` is an instance of XMLHttpRequest in the browser
         * and an instance of http.ClientRequest in node.js
         */
    }
    else {
        /* Something happened in setting up the request that triggered an Error */
    }
}

function resetAll(){
    Vue.$cookies.remove('access_token');
    Vue.$cookies.remove('refresh_token');
    Vue.$cookies.remove('user');
    Vue.$cookies.set('login',1);
}


export default {
    GET,
    POST,
    DELETE,
    PUT,
    PATCH,
    REQUEST,
}