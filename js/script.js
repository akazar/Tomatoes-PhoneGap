var seconds,
    countdownTimer,
    work=false,
    rest=false;

function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;  
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
      if (work) {
        work=false;
        alert("Time for rest");
        startRest();
      } else {
        work=true;
        location.reload();
    };
        
    } else {
        seconds--;
    }
}

function startWork(){
  seconds = 5;
  if (work) {
    clearInterval(countdownTimer);
  };
  work=true;
  rest=false;
  countdownTimer = setInterval('secondPassed()', 1000);        
  document.getElementById('controlBtn').innerHTML = "Reset";
}

function startRest(){
  seconds = 3;
  if (!work) {
    clearInterval(countdownTimer);
  };
  work=false;
  rest=true;
  countdownTimer = setInterval('secondPassed()', 1000);
  document.getElementById('countdown').innerHTML = "25:00";
  document.getElementById('controlBtn').innerHTML = "Stop";
}
