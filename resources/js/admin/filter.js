import moment from 'moment'
import Vue from 'vue'

/*show date years */
Vue.filter('timeformat', (arg) => {
    return moment(arg).format("MMM Do YYYY")
})

/*short length string*/
// Vue.filter('readMore', function (text, length, suffix) {
//     return text.substring(0, length) + suffix;
// })
Vue.filter('readMore',function(value,size){
    if (!value) return '';
    value = value.toString();

    if (value.length <= size) {
        return value;
    }
    return value.substr(0, size) + '...';
})


/*show date years */
Vue.filter('firstUppercase', (value) => {
    if (!value) return ''
    return value.charAt(0).toUpperCase() + value.slice(1)
})