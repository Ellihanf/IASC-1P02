var todayFullDate = new Date();
var todayFullYear = todayFullDate.getFullYear();
console.log(todayFullYear);

var myPrompt = prompt("What is your age?");
console.log(myPrompt);

function showYear(){
  document.getElementById("birthYear").innerHTML = todayFullYear - myPrompt;
}

showYear();
