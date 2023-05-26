const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');
const display = document.querySelector('#display');

clearBtn.addEventListener('click', clearDisplay);
equalsBtn.addEventListener('click', equalFunction);

numberButtons.forEach( button => {
    button.addEventListener('click', inputNumber)
})
operatorButtons.forEach( button =>{
    button.addEventListener('click', inputOperator)
})

function inputNumber(){
    display.textContent+=this.textContent;
}

function inputOperator(){
    console.log(this.textContent + " was clicked!");
    // do something
}

function clearDisplay(){
    display.textContent = "";
}

function equalFunction(){
    console.log(this.textContent + " was clicked!");
    // do something
}

const add = (a, b) => a+b;
const subtract = (a, b) => a-b;
const mult = (a, b) => a*b;
const divide = (a, b) => a/b;

let firstNum;
let operator;
let secondNum;

function operate (firstNum, secondNum, operator){

    switch (operator){
        case "+":
            return add(firstNum, secondNum);
        case "-": 
            return subtract(firstNum, secondNum);
        case "*":
            return mult(firstNum, secondNum);
        case "/":
            return divide(firstNum, secondNum);
        default:
            console.error("No operator selected");
            break;
    }
}
