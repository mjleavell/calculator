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

const calculate = (num1, num2, mathType) => {
    let answer = 0;
    switch (mathType) {         // could use if/else but here is it using switch statement for practice
        case 'multiply':
            answer = multiply(num1, num2);
            break;              //break ensures you dont keep going through the switch statement
        case 'divide':
            answer = divide(num1, num2);
            break;
        case 'add':
            answer = add(num1, num2);
            break;
        case 'subtract':
            answer = subtract(num1, num2);
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

const initialDisplay = () => {
    printToDom(0, 'result');
}

// display 1st number & 2nd number in result div 
const addNumber = (num) => {
    if (calc.mathType === '') {
        calc.firstNumber += num;
        setDisplay(calc.firstNumber);
    } else {
        calc.secondNumber += num;
        setDisplay(calc.secondNumber);
    }
}

export {addNumber, initialDisplay};