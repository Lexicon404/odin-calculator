//establish all variables
let lastEntry = '';
let currentEntry = '';
let displayValue = '';
const display = document.querySelector("#display");
const buttons = document.querySelectorAll('.buttons');
const operators = document.querySelectorAll('.operators');
const equal = document.querySelector ('.equal');
const clear = document.querySelector ('.clear');

//return value of each number clicked
buttons.forEach (function () {
    addEventListener('click', function (e) {
        let value = e.target.textContent;
        displayNumber (value);
    })
})

//return all values of button pressed into display
function displayNumber (num) {
    displayValue += num
    console.log (displayValue)
    display.textContent = displayValue
}