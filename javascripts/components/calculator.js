// import SOMETHING from 'SOMEWHERE';
import {printToDom} from '../helpers/util.js';
import {multiply, divide, add, subtract} from '../helpers/maths.js';

// values need to be strings because innerHTML returns strings
const calc = {  
    firstNumber: '',
    secondNumber: '',
    mathType: '',
    display: ''
}

const calculate = () => {
    let answer = 0;
    switch (calc.mathType) {         // could use if/else but here is it using switch statement for practice
        case 'multiply':
            answer = multiply(calc.firstNumber, calc.secondNumber);
            break;              //break ensures you dont keep going through the switch statement
        case 'divide':
            answer = divide(calc.firstNumber, calc.secondNumber);
            break;
        case 'add':
            answer = add(calc.firstNumber, calc.secondNumber);
            break;
        case 'subtract':
            answer = subtract(calc.firstNumber, calc.secondNumber);
            break;
        default:
            answer = 'nope';
    }
    setDisplay(answer);
};

// updates results div on page
const setDisplay = (someNumber) => {
    calc.display = someNumber;
    printToDom(calc.display, 'result');
}

const setMathType = (newMathType) => {
    calc.mathType = newMathType;
}

const initialDisplay = () => {
    printToDom(0, 'result');
}

// display 1st number and set to variable; when math type is clicked then 2nd number is displayed and set to var
const addNumber = (num) => {
    if (calc.mathType === '') {
        calc.firstNumber += num;
        setDisplay(calc.firstNumber);
    } else {
        calc.secondNumber += num;
        setDisplay(calc.secondNumber);
    }
}

export {calculate, addNumber, initialDisplay, setMathType};