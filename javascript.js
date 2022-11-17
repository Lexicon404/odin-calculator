//establish all variables
let lastEntry = '';
let currentEntry = '';
let operator = '';
const display = document.querySelector("#display");
const buttons = document.querySelectorAll('.buttons');
const operators = document.querySelectorAll('.operators');
const equal = document.querySelector ('.equal');
const clear = document.querySelector ('.clear');
const back = document.querySelector ('.back');


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
    
        if (operator === '') {
            operator = e.target.textContent;
            display.textContent = currentEntry + operator
            lastEntry = currentEntry
            currentEntry = ''
        } else {
            if (currentEntry !== ''&&lastEntry !=='') {
                calculate()
                operator = e.target.textContent;
                display.textContent = currentEntry + operator
                lastEntry = currentEntry
                currentEntry = ''
            }

        }
        }
    )
})

//on click equal button to result
equal.addEventListener('click', calculate)


//calculate function
function calculate() {
    if (operator === '+'&&currentEntry !=='' &&lastEntry !== '') {
    currentEntry = ((Number(currentEntry)*1000 + Number(lastEntry)*1000)/1000)
    display.textContent = currentEntry
    operator = '';
    } else if (operator === '-'&&currentEntry !=='' &&lastEntry !== '') {
        currentEntry = ((Number(lastEntry)*1000 - Number(currentEntry)*1000)/1000)
        display.textContent = currentEntry 
        operator = '';
    } else if (operator === '/'&&currentEntry !=='' &&lastEntry !== '') {
        currentEntry = ((Number(lastEntry) / Number(currentEntry)))
        if (currentEntry === Infinity) {
            display.textContent = 'ERROR'
            } else {
                currentEntry = Math.round(currentEntry*1000)/1000;
                display.textContent = currentEntry ;
                operator = '';
                }
    } else if (operator === '*'&&currentEntry !=='' &&lastEntry !== ''){
        currentEntry = ((Number(lastEntry) * Number(currentEntry)))
        display.textContent = currentEntry 
        operator = '';
    }
}



//delete button
back.addEventListener('click', function (){
    currentEntry = String(currentEntry).slice(0, -1);
    display.textContent = currentEntry 
})

