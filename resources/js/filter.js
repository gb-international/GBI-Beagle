import moment from 'moment'
import Vue from 'vue'

/*show date years */
Vue.filter('timeformat',(arg)=>{
    return moment(arg).format("MMM Do YYYY")
})

/*short length string*/
Vue.filter('sortlength',function (text,length,suffix) {
    return text.substring(0,length)+suffix;
})