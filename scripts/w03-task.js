/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}
function addNumbers() {

    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function (number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;
function multiplyNumbers() {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);



/* Decision Structure */
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.querySelector('#year').value = currentYear;


/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.querySelector('#array').textContent = numbersArray;

let odds = numbersArray.filter(function (number) {
    return number % 2 !== 0;
});
document.querySelector('#odds').textContent = odds;

let evens = numbersArray.filter(function (number) {
    return number % 2 === 0;
});
document.querySelector('#evens').textContent = evens;

let sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0); 
document.querySelector('#sumOfArray').textContent = sumOfArray;

let multiplied = numbersArray.map((number) => number * 2);
document.querySelector('#multiplied').textContent = multiplied;

let sumOfMultiplied = multiplied.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;
