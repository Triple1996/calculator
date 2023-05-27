const ALL_CLEAR_TEXT = '0';
const ADD = '+';
const SUBTRACT = '-';
const MULTIPLY = 'x'
const DIVIDE = '÷';

const add = (a, b) => Number(a)+Number(b);
const subtract = (a, b) => Number(a)-Number(b);
const multiply = (a, b) => Number(a)*Number(b);
const divide = (a, b) => Number(a)/Number(b);

let displayValue = ALL_CLEAR_TEXT;

const equalsBtn = document.querySelector('#equals');
equalsBtn.addEventListener('click', equalFunction);

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clearDisplay);

const display = document.querySelector('#display');

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach( button =>{
    button.addEventListener('click', inputOperator)
})

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach( button => {
    button.addEventListener('click', () => {
        if (displayValue == ALL_CLEAR_TEXT) displayValue = "";
        displayValue += button.textContent;
        updateDisplay();
    })  
})

function equalFunction(){
    let operands;
    if (displayValue.includes(ADD)){
        operands = displayValue.split(ADD);
        displayValue = operate(operands[0], operands[1], ADD);
        updateDisplay();
    }
    // This will trigger for negative numbers. Use a regex like /[\d+-\d+]/
    else if (displayValue.includes(SUBTRACT)){
        operands = displayValue.split(SUBTRACT);
        displayValue = operate(operands[0], operands[1], SUBTRACT);
        updateDisplay();
    }
    else if (displayValue.includes(MULTIPLY)){
        operands = displayValue.split(MULTIPLY);
        displayValue = operate(operands[0], operands[1], MULTIPLY);
        updateDisplay();
    }
    else if (displayValue.includes(DIVIDE)){
        operands = displayValue.split(DIVIDE);
        displayValue = operate(operands[0], operands[1], DIVIDE);
        updateDisplay();
    }
}

function operate (firstNum, secondNum, operator){
    switch (operator){
        case ADD:
            return String(add(firstNum, secondNum));
        case SUBTRACT: 
            return String(subtract(firstNum, secondNum));
        case MULTIPLY:
            return String(multiply(firstNum, secondNum))
        case DIVIDE:
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