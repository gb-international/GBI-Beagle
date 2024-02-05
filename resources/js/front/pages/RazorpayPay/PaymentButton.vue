<template>
    <div class="form-group text-center">
        <button @click="payment_gateway()" class="btn btn-primary">Payment Now</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            razorpay_script_url: `https://checkout.razorpay.com/v1/checkout.js`,
            razorpay_api:"",
            options: {
                "key": "rzp_test_zqEQ6FLsiHc4WG", // Enter the Key ID generated from the Dashboard
                "amount": 0, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "GB International", //your business name
                "description": "Test Transaction from GB International",
                "customer_id": "" ,
                "image": "/assets/front/images/gbi_logo.png",
                "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "handler": async function (response){
                     await axios.post('/api/school/payment/payment-gateway/payment-record', response, {
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8',
                            'Data-Type': 'json',
                            'Accept':'application/json',
                            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YjFkMDFkNy04ZTBkLTQ4MjUtOTRjNi05YTAzYjY4NDUzZTkiLCJqdGkiOiJiMTZjNGE0NjI4YTExYWRiNDhiMmJiNTY3ODIyNjA5MTdlNzQwZmZiOGEzMTMzOTlhZGI5N2U3YzIxZDgyNjRhOTZkMTk0YTBiYmRlMWUyNiIsImlhdCI6MTcwNjg3NTU4OSwibmJmIjoxNzA2ODc1NTg5LCJleHAiOjE3Mzg0OTc5ODksInN1YiI6IjQiLCJzY29wZXMiOlsic2Nob29sIl19.KyPPWCoeMRDig6p1w8LfdetOsMXRgEw9WmGykLOZmfRTu8LjSpnyI3tuAI50eIOlbqdg7dpmr3qrRmPDzmwL5GWE-CsIEj7E76qeSpab7hRzcLZ9RK_DlJrOZLR2gB4l5LpEw5QHSezmogQN_A-OAo6z9JcWYXrHIS7kaHr3-hU_dcBqCwqdTbpDtjrbjWxf_-_dQ7aAo0P9bip39wtnnLj9Po-KCk2GQqWRn35BBMw1mvcEmyrgDKwSsqg45E4N_cPv6tD6Ds41xXAqc7-YoGmLChzR17XsVGll1NjmFqC5tXQyk7-ZW52jgg5B3GjOutlk7gW0QzunnuzjwCvZwWBDgZnnsUGjOmfTVCSWxMQWxlXVr9DGx_Yo_ENz41sapSP7aqgT2yM5JWb7RC5B96IZKi-O_frBBqdIfDBz5iDZGTOFiDt0prwIuAQYVe_wg9Edg073S4x2vpp0HG2vcUODmh809ObnuvvZsjz4D0htKFa5hab3xUgVbD126WC5JyQ24zPTMI4IkO6uz4Ft8i5-ExcRiD3-kKborh0BO0rVapHOdS6sjVbXkV4tFM5mOS1GI_dR7fPrbh-Xcp7JDYPWITi8_VanzgYNEiqrc5vbGiYBWNZ13nBbHPRB0k5KDMpLtC1VqU-J_nW_OWppP_WeJiQ5Ilx3p-mwwIm9PBY'
                        }
                    }
                    ).then((res) => {          
                         if(res.data.status == 422){

                        }
                        console.log(res.data);
                    })
                    .catch((error) => {

                    });
                },

                "notes": {
                    "address": "GB International"
                },
                "theme": {
                    "color": "#2F2A52"

                }
            },
            order_data:{
                tour_price:2300,
                amount:2300,
                tour_id:51,
                school_id:960,
                payment_by:"teacher"
            }
        }
    },
    methods :{ 
        async loadRazorPay(){
            const plugin = await document.createElement("script");
            await plugin.setAttribute(
            "src",
            this.razorpay_script_url
            );
            plugin.async = true;
            await document.body.appendChild(plugin)      
        },
        async payment_gateway(){
            // event.preventDefault();
              await axios.post('/api/school/payment/payment-gateway/make-order', this.order_data, {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Data-Type': 'json',
                    'Accept':'application/json',
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YjFkMDFkNy04ZTBkLTQ4MjUtOTRjNi05YTAzYjY4NDUzZTkiLCJqdGkiOiJiMTZjNGE0NjI4YTExYWRiNDhiMmJiNTY3ODIyNjA5MTdlNzQwZmZiOGEzMTMzOTlhZGI5N2U3YzIxZDgyNjRhOTZkMTk0YTBiYmRlMWUyNiIsImlhdCI6MTcwNjg3NTU4OSwibmJmIjoxNzA2ODc1NTg5LCJleHAiOjE3Mzg0OTc5ODksInN1YiI6IjQiLCJzY29wZXMiOlsic2Nob29sIl19.KyPPWCoeMRDig6p1w8LfdetOsMXRgEw9WmGykLOZmfRTu8LjSpnyI3tuAI50eIOlbqdg7dpmr3qrRmPDzmwL5GWE-CsIEj7E76qeSpab7hRzcLZ9RK_DlJrOZLR2gB4l5LpEw5QHSezmogQN_A-OAo6z9JcWYXrHIS7kaHr3-hU_dcBqCwqdTbpDtjrbjWxf_-_dQ7aAo0P9bip39wtnnLj9Po-KCk2GQqWRn35BBMw1mvcEmyrgDKwSsqg45E4N_cPv6tD6Ds41xXAqc7-YoGmLChzR17XsVGll1NjmFqC5tXQyk7-ZW52jgg5B3GjOutlk7gW0QzunnuzjwCvZwWBDgZnnsUGjOmfTVCSWxMQWxlXVr9DGx_Yo_ENz41sapSP7aqgT2yM5JWb7RC5B96IZKi-O_frBBqdIfDBz5iDZGTOFiDt0prwIuAQYVe_wg9Edg073S4x2vpp0HG2vcUODmh809ObnuvvZsjz4D0htKFa5hab3xUgVbD126WC5JyQ24zPTMI4IkO6uz4Ft8i5-ExcRiD3-kKborh0BO0rVapHOdS6sjVbXkV4tFM5mOS1GI_dR7fPrbh-Xcp7JDYPWITi8_VanzgYNEiqrc5vbGiYBWNZ13nBbHPRB0k5KDMpLtC1VqU-J_nW_OWppP_WeJiQ5Ilx3p-mwwIm9PBY'
                }
            }
            ).then((res) => {          
                if(res.data.status == 409){
                    console.log(res.data.message)
                    return false;
                }
                else if(res.data.status == 422){
                    console.log(res.data.errors)
                    return false;
                }
                this.options.order_id = res.data.order_id;
                this.options.customer_id = res.data.customer_id;
                this.options.amount = res.data.total_amount/100;
                const razorpay_api = new Razorpay(this.options);
                razorpay_api.open();
            })
            .catch((error) => {
            });
        }
    },
    created() {
        this.loadRazorPay();
    }
}
</script> 