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
