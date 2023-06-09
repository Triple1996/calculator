const ALL_CLEAR_TEXT = '0';
const ZERO_DIVISION_TEXT = "Nice try";
const ADD = '+';
const SUBTRACT = '-';
const MULTIPLY = 'x';
const DIVIDE = '÷';
const EQUATION_REGEX = /-?[0-9]+[+\-x÷]{1}[0-9]+/; //0 or 1 hyphens followed by 1 or more digits followed by a noperator followed by one or more digits
const OPERATOR_REGEX = /[-+x÷]/; //any of the chars in brackets
const MAX_DISPLAY_LENGTH = 8;

const add = (a, b) => Number(a)+Number(b);
const subtract = (a, b) => Number(a)-Number(b);
const multiply = (a, b) => Number(a)*Number(b);
const divide = (a, b) => Number(a)/Number(b);

let displayValue = ALL_CLEAR_TEXT;

const equalsBtn = document.querySelector('#equals');
equalsBtn.addEventListener('click', equalFunction);

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    displayValue = ALL_CLEAR_TEXT;
    updateDisplay();
})

const display = document.querySelector('#display');

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach( button =>{
    button.addEventListener('click', () => {
        if (EQUATION_REGEX.test(displayValue)) {
            equalFunction();}
        if (OPERATOR_REGEX.test(displayValue.slice(-1))) {
            displayValue = displayValue.slice(0,displayValue.length-1);}
        displayValue+=button.textContent;
        updateDisplay();
    })
})

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach( button => {
    button.addEventListener('click', () => {
        if (displayValue.length == MAX_DISPLAY_LENGTH) return;
        if (displayValue == ALL_CLEAR_TEXT 
            || displayValue == ZERO_DIVISION_TEXT
            || displayValue == "NaN") {displayValue = "";}
        displayValue += button.textContent;
        updateDisplay();
    })
})

function equalFunction(){
    if (!EQUATION_REGEX.test(displayValue)) {
        return;}

    let operatorIndex = locateOperand(displayValue)
    let operands = splitAt(displayValue, operatorIndex);

    switch (displayValue.charAt(operatorIndex)){
        case ADD:
            displayValue = operate(operands[0], operands[1], ADD);
            updateDisplay();
            break;
        case SUBTRACT:
            displayValue = operate(operands[0], operands[1], SUBTRACT);
            updateDisplay();
            break;
        case MULTIPLY:
            displayValue = operate(operands[0], operands[1], MULTIPLY);
            updateDisplay();
            break;
        case DIVIDE:
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
            return String(add(firstNum, secondNum)).slice(0,MAX_DISPLAY_LENGTH);
        case SUBTRACT: 
            return String(subtract(firstNum, secondNum)).slice(0,MAX_DISPLAY_LENGTH);
        case MULTIPLY:
            return String(multiply(firstNum, secondNum)).slice(0,MAX_DISPLAY_LENGTH);
        case DIVIDE:
            return String(divide(firstNum, secondNum)).slice(0,MAX_DISPLAY_LENGTH);
        default:
            console.error("operator not set correctly");
            break;
    }
}

function locateOperand(str){
    for (let i = str.length-1; i >= 0; i--){
        if (OPERATOR_REGEX.test(str.charAt(i)))
            return i;
    }
}

function splitAt(str, index){
    return [str.slice(0,index), str.slice(index+1)];
}

function updateDisplay(){
    display.textContent=displayValue;
}