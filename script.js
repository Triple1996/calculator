const ALL_CLEAR_TEXT = '0';
const ADDITION = '+';
const SUBTRACTION = '-';
const MULTIPLICATION = 'x'
const DIVISION = '÷';

const add = (a, b) => Number(a)+Number(b);
const subtract = (a, b) => Number(a)-Number(b);
const multiply = (a, b) => Number(a)*Number(b);
const divide = (a, b) => Number(a)/Number(b);

let displayValue = ALL_CLEAR_TEXT;

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach( button => {
    button.addEventListener('click', () => {
        if (displayValue == ALL_CLEAR_TEXT) displayValue = "";
        displayValue += button.textContent;
        updateDisplay();
    })  
})

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach( button =>{
    button.addEventListener('click', inputOperator)
})

const equalsBtn = document.querySelector('#equals');
equalsBtn.addEventListener('click', equalFunction);

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clearDisplay);

const display = document.querySelector('#display');

function equalFunction(){
    let operands;
    if (displayValue.includes(ADDITION)){
        operands = displayValue.split(ADDITION);
        displayValue = operate(operands[0], operands[1], ADDITION);
        updateDisplay();
    }
    else if (displayValue.includes(SUBTRACTION)){
        operands = displayValue.split(SUBTRACTION);
        displayValue = operate(operands[0], operands[1], SUBTRACTION);
        updateDisplay();
    }
    else if (displayValue.includes(MULTIPLICATION)){
        operands = displayValue.split(MULTIPLICATION);
        displayValue = operate(operands[0], operands[1], MULTIPLICATION);
        updateDisplay();
    }
    else if (displayValue.includes(DIVISION)){
        operands = displayValue.split(DIVISION);
        displayValue = operate(operands[0], operands[1], DIVISION);
        updateDisplay();
    }
}

function operate (firstNum, secondNum, operator){
    switch (operator){
        case ADDITION:
            return String(add(firstNum, secondNum));
        case SUBTRACTION: 
            return String(subtract(firstNum, secondNum));
        case MULTIPLICATION:
            return String(multiply(firstNum, secondNum))
        case DIVISION:
            return String(divide(firstNum, secondNum));
        default:
            console.error("No operator selected");
            break;
    }
}

function inputOperator(){
    // Add handling for if user selects multiple operators
    if (/\D/.test(displayValue.slice(-1))) {
        displayValue = displayValue.slice(0,displayValue.length-1);
    }
    displayValue+=this.textContent;
    updateDisplay();
}

function updateDisplay(){
    display.textContent=displayValue;
}

function clearDisplay(){
    displayValue = ALL_CLEAR_TEXT;
    updateDisplay();
}