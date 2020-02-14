
    var valor1 = 0;
    function cont1() {
        valor1 = valor1 + 100;
        document.getElementById("Contagem1").innerHTML = valor1 + " $";

    }



var valor2 = 0;
function cont2() {
valor2 = valor2 + 80;
document.getElementById("Contagem2").innerHTML = valor2 + " $"

}



var valor3 = 0;
function cont3() {
valor3 = valor3 + 70;
document.getElementById("Contagem3").innerHTML = valor3 + " $"

}



var valor4 = 0;
function cont4() {
valor4 = valor4 + 60;
document.getElementById("Contagem4").innerHTML = valor4 + " $"

}



var valor5 = 0;
function cont5() {
valor5 = valor1 + valor2 + valor3 + valor4;
document.getElementById("ContagemTotal").innerHTML = valor5 + " $"

}


function final(){
    alert("Thanks for buying with us! Enjoy the concert!");
}

//retirado do w3schools
var countDownDate = new Date("Feb 18, 2020 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);