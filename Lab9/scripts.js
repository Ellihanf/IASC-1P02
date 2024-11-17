var start = new Date();
var startTime = start.getTime();
console.log(startTime);

function stopTime(){
  var stop = new Date();
  var stopTime = stop.getTime();
  console.log(stopTime);
  var finalTime = (stopTime - startTime) / 600;
  var myAlert = alert("You have been on the page for: " + finalTime + " seconds");
}
