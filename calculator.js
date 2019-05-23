function add() {
    var num1 = document.getElementById("txt1").value;
    var num2 = document.getElementById("txt2").value;
    var num3 = Number(num1) + Number(num2);
    console.log(num3);
    document.getElementById("demo").innerText = num3;
  }

  function subtract() {
    var num1 = document.getElementById("txt1").value;
    var num2 = document.getElementById("txt2").value;
    var num3 = number(num1) - number(num2);
    document.getElementById("demo").innerHTML = num3;
  }

  function multiply() {
    var num1 = document.getElementById("txt1").value;
    var num2 = document.getElementById("txt2").value;
    var num3 = number(num1) * number(num2);;
    document.getElementById("demo").innerHTML = num3;
  }

  function divide() {
    var num1 = document.getElementById("txt1").value;
    var num2 = document.getElementById("txt2").value;
    var num3 = number(num1) / number(num2);;
    document.getElementById("demo").innerHTML = num3;
  }

  function mainCalc() {
 switch(myOperator)
 {

case "add" :
add();
break;

case "subtract" :
subtract();
break;

case "multiply" :
multiply();
break;

case "divide" :
divide();
break;

default :
break;
 }
} 

