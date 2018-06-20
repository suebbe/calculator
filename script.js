
/*let firstNumber = parseInt(prompt("Please enter a number"),10);
let operator = prompt("Choose between +, -, / or *");
let secondNumber = parseInt(prompt("Please enter another number"),10);
*/

let input = [];


let firstValue = input[0];
let operator = input[1];
let secondValue = input[2];


const allNumbers = document.querySelector("button");
const operators = document.querySelector(".operator");
const output = document.querySelector("#output");
const equals = document.getElementById('#equals');


$("button").click(function() {
 input.push(event.target.value);
 output.innerText=(input.join(''));


if (event.target.value == "="){
  console.log(input.join(''));
  console.log(parseInt(input[0]) + parseInt(input[2]))
  output.innerText=(parseInt(input[0]) + parseInt(input[2]))

}

if (event.target.value == "C"){
  input=[]
  output.innerText=('0');
}


 // for (let i = 0; i < input.length; i++){
 //
 //   console.log(input[]);
 // }
});









/*
if (operator == "+") {
  total = add(firstNumber, secondNumber);
} else if (operator == "-") {
  total = subtract(firstNumber, secondNumber);
} else if (operator == "/") {
  total = divide(firstNumber, secondNumber);
} else if (operator == "*"){
  total = multiply(firstNumber, secondNumber);
} else {
  alert("Please enter a valid operator")
}

*/
/*
let resultAdd = add(firstNumber,secondNumber);
let resultSubtract = subtract(firstNumber,secondNumber);
let resultMultiply = multiply(firstNumber,secondNumber);
let resultDivide = divide(firstNumber,secondNumber);

let total = 0;



function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;

}


function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}


function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}


function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

console.log(total);
*/
