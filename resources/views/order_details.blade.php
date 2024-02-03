<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Payment</title>
  </head>
  <body>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                Payment
            </div>
            <div class="card-body">
                <div class="form-group text-center">
                    <button id="rzp-button" amount=2300 class="btn btn-primary">Payment Now1</button>
                </div>
            </div>
        </div>
    </div>
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
<script>
let options = {
    "key": "rzp_test_zqEQ6FLsiHc4WG", // Enter the Key ID generated from the Dashboard
    "amount": 0, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "GB International", //your business name
    "description": "Test Transaction from GB International",
    "customer_id": "" ,
    "image": "/assets/front/images/gbi_logo.png",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        $.ajax({
            url: "/api/school/payment/payment-gateway/payment-record",
            type: "POST",
            headers: { Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YjFkMDFkNy04ZTBkLTQ4MjUtOTRjNi05YTAzYjY4NDUzZTkiLCJqdGkiOiJiMTZjNGE0NjI4YTExYWRiNDhiMmJiNTY3ODIyNjA5MTdlNzQwZmZiOGEzMTMzOTlhZGI5N2U3YzIxZDgyNjRhOTZkMTk0YTBiYmRlMWUyNiIsImlhdCI6MTcwNjg3NTU4OSwibmJmIjoxNzA2ODc1NTg5LCJleHAiOjE3Mzg0OTc5ODksInN1YiI6IjQiLCJzY29wZXMiOlsic2Nob29sIl19.KyPPWCoeMRDig6p1w8LfdetOsMXRgEw9WmGykLOZmfRTu8LjSpnyI3tuAI50eIOlbqdg7dpmr3qrRmPDzmwL5GWE-CsIEj7E76qeSpab7hRzcLZ9RK_DlJrOZLR2gB4l5LpEw5QHSezmogQN_A-OAo6z9JcWYXrHIS7kaHr3-hU_dcBqCwqdTbpDtjrbjWxf_-_dQ7aAo0P9bip39wtnnLj9Po-KCk2GQqWRn35BBMw1mvcEmyrgDKwSsqg45E4N_cPv6tD6Ds41xXAqc7-YoGmLChzR17XsVGll1NjmFqC5tXQyk7-ZW52jgg5B3GjOutlk7gW0QzunnuzjwCvZwWBDgZnnsUGjOmfTVCSWxMQWxlXVr9DGx_Yo_ENz41sapSP7aqgT2yM5JWb7RC5B96IZKi-O_frBBqdIfDBz5iDZGTOFiDt0prwIuAQYVe_wg9Edg073S4x2vpp0HG2vcUODmh809ObnuvvZsjz4D0htKFa5hab3xUgVbD126WC5JyQ24zPTMI4IkO6uz4Ft8i5-ExcRiD3-kKborh0BO0rVapHOdS6sjVbXkV4tFM5mOS1GI_dR7fPrbh-Xcp7JDYPWITi8_VanzgYNEiqrc5vbGiYBWNZ13nBbHPRB0k5KDMpLtC1VqU-J_nW_OWppP_WeJiQ5Ilx3p-mwwIm9PBY" },
            data: JSON.stringify(response),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            error: function(err) {
                switch (err.status) {
                    case "400":
                        // bad request
                        break;
                    case "401":
                        // unauthorized
                        break;
                    case "403":
                        // forbidden
                        break;
                        default:
                            //Something bad happened
                            break;
                }
            },
            success: function(data) {
                console.log(data);
            }
        });
    },
    
    "notes": {
        "address": "GB International"
    },
    "theme": {
        "color": "#2F2A52"
    }
};

document.getElementById('rzp-button').onclick = function(e){
    e.preventDefault();
    let amount = document.getElementById('rzp-button').getAttribute("amount");
    $.ajax({
        url: "/api/school/payment/payment-gateway/make-order",
        type: "POST",
        headers: { Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YjFkMDFkNy04ZTBkLTQ4MjUtOTRjNi05YTAzYjY4NDUzZTkiLCJqdGkiOiJiMTZjNGE0NjI4YTExYWRiNDhiMmJiNTY3ODIyNjA5MTdlNzQwZmZiOGEzMTMzOTlhZGI5N2U3YzIxZDgyNjRhOTZkMTk0YTBiYmRlMWUyNiIsImlhdCI6MTcwNjg3NTU4OSwibmJmIjoxNzA2ODc1NTg5LCJleHAiOjE3Mzg0OTc5ODksInN1YiI6IjQiLCJzY29wZXMiOlsic2Nob29sIl19.KyPPWCoeMRDig6p1w8LfdetOsMXRgEw9WmGykLOZmfRTu8LjSpnyI3tuAI50eIOlbqdg7dpmr3qrRmPDzmwL5GWE-CsIEj7E76qeSpab7hRzcLZ9RK_DlJrOZLR2gB4l5LpEw5QHSezmogQN_A-OAo6z9JcWYXrHIS7kaHr3-hU_dcBqCwqdTbpDtjrbjWxf_-_dQ7aAo0P9bip39wtnnLj9Po-KCk2GQqWRn35BBMw1mvcEmyrgDKwSsqg45E4N_cPv6tD6Ds41xXAqc7-YoGmLChzR17XsVGll1NjmFqC5tXQyk7-ZW52jgg5B3GjOutlk7gW0QzunnuzjwCvZwWBDgZnnsUGjOmfTVCSWxMQWxlXVr9DGx_Yo_ENz41sapSP7aqgT2yM5JWb7RC5B96IZKi-O_frBBqdIfDBz5iDZGTOFiDt0prwIuAQYVe_wg9Edg073S4x2vpp0HG2vcUODmh809ObnuvvZsjz4D0htKFa5hab3xUgVbD126WC5JyQ24zPTMI4IkO6uz4Ft8i5-ExcRiD3-kKborh0BO0rVapHOdS6sjVbXkV4tFM5mOS1GI_dR7fPrbh-Xcp7JDYPWITi8_VanzgYNEiqrc5vbGiYBWNZ13nBbHPRB0k5KDMpLtC1VqU-J_nW_OWppP_WeJiQ5Ilx3p-mwwIm9PBY" },
        data: JSON.stringify({amount: amount, "tour_price":2300,
    "amount":2300, "tour_id":51, "school_id":960, "payment_by":"teacher"}),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function(err) {
            switch (err.status) {
            case "400":
                // bad request
                break;
            case "401":
                // unauthorized
                break;
            case "403":
                // forbidden
                break;
                default:
                    //Something bad happened
                    break;
                }
            },
            success: function(data) {
                options.order_id = data.order_id;
                options.customer_id = data.customer_id;
                options.amount = data.total_amount/100;
                var rzp1 = new Razorpay(options);
                rzp1.open();
            }
        });
    }
</script>
    <!-- Optional JavaScript; choose one of the two! -->
    
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    
    <!-- Option 2: Separate Popper and Bootstrap JS -->
    
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  </body>
</html>