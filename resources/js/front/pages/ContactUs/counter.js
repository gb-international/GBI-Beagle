// Set the date we're counting down to
var countDownDate = new Date("Jan 15, 2023 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="countDown"
  document.getElementById("countDownD1").innerHTML = (' 0'+days).toString()[days.toString().length];
  document.getElementById("countDownD2").innerHTML = (' 0'+days).slice(-1);

  document.getElementById("countDownH1").innerHTML = (' 0'+hours).toString()[hours.toString().length];
  document.getElementById("countDownH2").innerHTML = (' 0'+hours).slice(-1);

  document.getElementById("countDownM1").innerHTML = (' 0'+minutes).toString()[minutes.toString().length];
  document.getElementById("countDownM2").innerHTML = (' 0'+minutes).slice(-1);

  document.getElementById("countDownS1").innerHTML = (' 0'+seconds).toString()[seconds.toString().length];
  document.getElementById("countDownS2").innerHTML = (' 0'+seconds).slice(-1);
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "Ready";
  }
}, 1000);
