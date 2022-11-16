//establish all variables
let lastEntry = '';
let currentEntry = '';
let operator = '';
const display = document.querySelector("#display");
const buttons = document.querySelectorAll('.buttons');
const operators = document.querySelectorAll('.operators');
const equal = document.querySelector ('.equal');
const clear = document.querySelector ('.clear');


//return value of each number clicked
buttons.forEach (function (button) {
    button.addEventListener('click', function (e) {
        let value = e.target.textContent;
        displayNumber (value);
    })
})

//return all values of button pressed into display
function displayNumber (num) {
    if (currentEntry.length < 5) {
    currentEntry += num
    display.textContent = currentEntry
}
}


//clear button to clear all values
clear.addEventListener('click', function () {
    lastEntry = '';
    currentEntry = '';
    operator = '';
    display.textContent = '';
})


//save operator value and move currentEntry to lastEntry
operators.forEach (function (op) {
    op.addEventListener('click', function (e) {
        operator = e.target.textContent;
        display.textContent = operator
        lastEntry = currentEntry
        currentEntry = ''
    })
})
console.log (operator)
//on click equal button to result