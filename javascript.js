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