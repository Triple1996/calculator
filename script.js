const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('#three');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');
const zeroBtn = document.querySelector('#zerp');

const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const divideBtn = document.querySelector('#divide');
const multiplyBtn = document.querySelector('#mutiply');
const equalsBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');

const display = document.querySelector('#display');



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
