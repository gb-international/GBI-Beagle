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
                    <button id="rzp-button" amount=1.40 class="btn btn-primary">Payment Now1</button>
                </div>
                <!-- <form action="" method="post">
                    @csrf
                    
                    <div class="form-group text-center">
                        <button id="rzp-button1" class="btn btn-primary">Payment Now</button>
                    </div>
                </form> -->
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
    "image": "https://gowithgbi.com/assets/front/images/favicon.png",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        $.ajax({
            url: "http://localhost:8000/api/payment/payment-gateway/payment-record",
            type: "POST",
            headers: { Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YTUzNzc1NC1mMjQ3LTQ5YjUtYjMwNC05Y2MyYWI2YzU3MzQiLCJqdGkiOiIyZDQ1Mzk0MjNmMGI0OTExYWQ3MzI5ODI1ODE1OTU4ODQ5OTNmMzE5ZGQ4NWY4OTI2OGE1OWVmOTM1M2VkYmU1NTViNzBmNmE1Yjk1MWE2ZCIsImlhdCI6MTcwMTkzMDMwNSwibmJmIjoxNzAxOTMwMzA1LCJleHAiOjE3MzM1NTI3MDUsInN1YiI6IjEyIiwic2NvcGVzIjpbInNjaG9vbCJdfQ.XxUj_iSc39tUoj4p-7yMTlilXZmNEqqczepgausouM1--H7GW8S9uZkZngQ5izRk5PBuYr3HtXutF2MT9o8n-IMo7aabqi2ugPah-TXCoXWq2EGiuEIZjYbNhDz1ozvag13PS45VI663W6bvxh-zGXv2AgTsllBOuNEOvYDp3HFRBRdx4KN0NzKA_vePHMRGy8uci7GfTXV4-OH5GmDPT_RuXqgKQ7AVBbeAqGwj4fIDaZrMxB748galdxaQCngMi_oIlOR0ff4EbFAlg92xMSqSK3nj25ket4ma1JMAfXc2Uw-Q_tzRju3tQohATXRVkUAS4kL1tcyvE3GYg9X3umEgNNXM6EXk4jNekxEP4m4NGRrlhN04MqyhhlIaqqJ3SlX5Omoo6e747JvnOgLohAFJdkw98eBM9hfVjheHx25OQ3ay3XVY7ApUiI4N2-zmFt1ZNJvK9b16wJl9InRDHFOzzUs0hCLnboGDJijBEUmlDa-w6ndUkL18PHuHTIGqCsJM5cFsZDU74cxntAqzjrWffxebXMHJAOMe_dMYP0LdfXEwRAC1i8L91bFWK5oGVAZViMcZEW1r8E3UtVkDhax9-Az7-HSTgsTgkwg9MjXlAFc4OTpOrI-X99cE9QkHyK4XlelvXFnF4ttDYkn-A21FnNiTyQ2nbLkcp-GJyuo" },
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
        "color": "#3399cc"
    }
};

document.getElementById('rzp-button').onclick = function(e){
    e.preventDefault();
    let amount = document.getElementById('rzp-button').getAttribute("amount");
    // console.log(amount);
    $.ajax({
        url: "http://localhost:8000/api/payment/payment-gateway/make-order",
        type: "POST",
        headers: { Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YTUzNzc1NC1mMjQ3LTQ5YjUtYjMwNC05Y2MyYWI2YzU3MzQiLCJqdGkiOiIyZDQ1Mzk0MjNmMGI0OTExYWQ3MzI5ODI1ODE1OTU4ODQ5OTNmMzE5ZGQ4NWY4OTI2OGE1OWVmOTM1M2VkYmU1NTViNzBmNmE1Yjk1MWE2ZCIsImlhdCI6MTcwMTkzMDMwNSwibmJmIjoxNzAxOTMwMzA1LCJleHAiOjE3MzM1NTI3MDUsInN1YiI6IjEyIiwic2NvcGVzIjpbInNjaG9vbCJdfQ.XxUj_iSc39tUoj4p-7yMTlilXZmNEqqczepgausouM1--H7GW8S9uZkZngQ5izRk5PBuYr3HtXutF2MT9o8n-IMo7aabqi2ugPah-TXCoXWq2EGiuEIZjYbNhDz1ozvag13PS45VI663W6bvxh-zGXv2AgTsllBOuNEOvYDp3HFRBRdx4KN0NzKA_vePHMRGy8uci7GfTXV4-OH5GmDPT_RuXqgKQ7AVBbeAqGwj4fIDaZrMxB748galdxaQCngMi_oIlOR0ff4EbFAlg92xMSqSK3nj25ket4ma1JMAfXc2Uw-Q_tzRju3tQohATXRVkUAS4kL1tcyvE3GYg9X3umEgNNXM6EXk4jNekxEP4m4NGRrlhN04MqyhhlIaqqJ3SlX5Omoo6e747JvnOgLohAFJdkw98eBM9hfVjheHx25OQ3ay3XVY7ApUiI4N2-zmFt1ZNJvK9b16wJl9InRDHFOzzUs0hCLnboGDJijBEUmlDa-w6ndUkL18PHuHTIGqCsJM5cFsZDU74cxntAqzjrWffxebXMHJAOMe_dMYP0LdfXEwRAC1i8L91bFWK5oGVAZViMcZEW1r8E3UtVkDhax9-Az7-HSTgsTgkwg9MjXlAFc4OTpOrI-X99cE9QkHyK4XlelvXFnF4ttDYkn-A21FnNiTyQ2nbLkcp-GJyuo" },
        data: JSON.stringify({amount: amount, "tour_price":5000,
    "amount":100, "tour_id":32, "school_id":962, "payment_by":"teacher"}),
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