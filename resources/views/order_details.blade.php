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
                    <button id="rzp-button" amount=100.40 class="btn btn-primary">Payment Now1</button>
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
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    
    <!-- Option 2: Separate Popper and Bootstrap JS -->
    
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
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
        console.log(response);
        // $.ajax({
        //     url: "http://127.0.0.1:8000/api/razorpay-payment/payment-record",
        //     type: "POST",
        //     headers: { Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YTUzNzc1NC1mMjQ3LTQ5YjUtYjMwNC05Y2MyYWI2YzU3MzQiLCJqdGkiOiI1YTE3MGIwODRmYjk0YzllOWRhMGU4NzU2Y2YxZWEwMWU2MTExZGI5MWUyMjUyZDMzZTMxYzBjMzAwZjRlMDU3OTkzZjUxMDIzZjdkMDQwNiIsImlhdCI6MTcwMTIzNTg4MywibmJmIjoxNzAxMjM1ODgzLCJleHAiOjE3MzI4NTgyODMsInN1YiI6IjEyIiwic2NvcGVzIjpbInNjaG9vbCJdfQ.zFDCmwsIOR4q18zHzU5D91QE76veYQKrfbNj_KnHQGoya9nCOEGy0JB-Kn2sNEyLb7E1C_YZdrZeM1oi5x4uGuykaZaWQl-KvSXYVOu2G_K_zx44mSlUjdYMB4UDC54sJzxlqrpPyrgG7N60fshuBtoTsWLOuge8vjkmeKu7EscAS3HDUgvHO7oOYIESMbfUmTuI8LUJHX_R7g_zMQcnlrx7L4hEmW-KHgguEWaOdgQWsdYN5XZNwj17Hs1C_Ks5-YT8ZoFiFXh7x2jvfQz8q1rRZaVn3U6FcK7EWD2aFGjXvChm9UzavpYOzs4eMfTMS4zmAE2l9WGPFFYJHHfHGdf2_z0f5H90dLkxYPE0GpkltW7idgfzG6LhUVeHgk65HI2t3uZ5STH0XGq-YlksMO_O7xqGqir0c3DhQJYwt5dlC2mAsavFrHv8Ptd8XaOVIQ3c_O19ODTeAk3dvxucTrTqARQFTMWiRHRj2iY4ess9B-A8JHpkoNM6xC3LTFT8UJ4v8vMnzF9BdsXqZbKaGY_LBkZ5bs85D4jxf-PYsS-LjZMmhns1QUy6chIyy3UCHa4C4dUTJmvWADJpZrPVDFdyC8Dk7f-I6LpH7_HQivEtUU9kw0CJ64ee3uioQY5oCnNA0VmjrCRRUqzdRWinLYTwOVmrIZJ-xOo-Zkx78dA" },
        //     data: JSON.stringify(response),
        //     contentType: "application/json; charset=utf-8",
        //     dataType: "json",
        //     error: function(err) {
        //         switch (err.status) {
        //             case "400":
        //                 // bad request
        //                 break;
        //             case "401":
        //                 // unauthorized
        //                 break;
        //             case "403":
        //                 // forbidden
        //                 break;
        //                 default:
        //                     //Something bad happened
        //                     break;
        //         }
        //     },
        //     success: function(data) {
        //         console.log(data);
        //     }
        // });
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
        data: JSON.stringify({amount: amount, "tour_id" :32,
        "school_id" : 962, "total_tour_price":50000, "payment_by":"self"}),
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

  </body>
</html>