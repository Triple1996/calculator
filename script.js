const ALL_CLEAR_TEXT = '0';
const ZERO_DIVISION_TEXT = "Nice try";
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
    button.addEventListener('click', () => {
        // Add handling for if user selects multiple operators
        if (/[+\-x÷]/.test(displayValue.slice(-1))) {
            displayValue = displayValue.slice(0,displayValue.length-1);
        }
        displayValue+=button.textContent;
        updateDisplay();
    })
})

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach( button => {
    button.addEventListener('click', () => {
        if (displayValue == ALL_CLEAR_TEXT 
            || displayValue == ZERO_DIVISION_TEXT
            || displayValue == "NaN") {displayValue = "";}
        displayValue += button.textContent;
        updateDisplay();
    })  
})

function equalFunction(){
    let operands;
    let split = locateOperand(displayValue)

    switch (displayValue.charAt(split)){
        case ADD:
            operands = splitAt(displayValue, split);
            displayValue = operate(operands[0], operands[1], ADD);
            updateDisplay();
            break;
        case SUBTRACT:
            operands = splitAt(displayValue, split);
            displayValue = operate(operands[0], operands[1], SUBTRACT);
            updateDisplay();
            break;
        case MULTIPLY:
            operands = splitAt(displayValue, split);
            displayValue = operate(operands[0], operands[1], MULTIPLY);
            updateDisplay();
            break;
        case DIVIDE:
            operands = splitAt(displayValue, split);
            if (operands[1] == 0) {
                displayValue = ZERO_DIVISION_TEXT;}
            else {
                displayValue = operate(operands[0], operands[1], DIVIDE);}
            updateDisplay();
            break;
        default:
            console.error("No operator found");
            break;
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

function locateOperand(str){
    for (let i = str.length-1; i >= 0; i--){
        if (/\D/.test(str.charAt(i))) {
            return i; }
        else {
            console.log(str.charAt(i) + ": nope");
        }
    }
}

function splitAt(str, index){
    return [str.slice(0,index), str.slice(index+1)];
}

function updateDisplay(){
    display.textContent=displayValue;
}

function clearDisplay(){
    displayValue = ALL_CLEAR_TEXT;
    updateDisplay();
}