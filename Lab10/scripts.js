function plusClick(){
  var one = Number(document.getElementById("Number1").value);
  var two = Number(document.getElementById("Number2").value);
  document.getElementById("Sum").innerHTML= one + two;
}

function minusClick(){
  var one = Number(document.getElementById("Number1").value);
  var two = Number(document.getElementById("Number2").value);
  document.getElementById("Sum").innerHTML= one - two;
}

function mulitplyClick(){
  var one = Number(document.getElementById("Number1").value);
  var two = Number(document.getElementById("Number2").value);
  document.getElementById("Sum").innerHTML= one * two;
}

function divideClick(){
  var one = Number(document.getElementById("Number1").value);
  var two = Number(document.getElementById("Number2").value);
  document.getElementById("Sum").innerHTML= one / two;
}
