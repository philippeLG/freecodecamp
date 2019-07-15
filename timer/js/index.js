var app = angular.module('TimerApp', []);
app.controller('MainCtrl', function($scope, $interval) {
  $scope.timerLength = 25;
  $scope.timeLeft = $scope.timerLength;
  
  var running = false;
  var secs = 60 * $scope.timeLeft;
  console.log(secs);
  
  $scope.switchTimer = function() {
        console.log("switch");
    if (!running) {    
      updateTimer();
      running = $interval(updateTimer, 1000);
    } else {
      $interval.cancel(running);
      runTimer = false;
    }
  }
  
  function updateTimer() {
    console.log("update");
    secs -= 1;
    if (secs < 0) {
      secs = 60 * $scope.sessionLength;
    }
    else {
	    $scope.timeLeft = secondsToHms(secs);
    }
  }
  
  function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return (
      (h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s
    ); 
  }
   
  });