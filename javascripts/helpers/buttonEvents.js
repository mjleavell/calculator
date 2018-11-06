import {addNumber, setMathType, calculate} from '../components/calculator.js';

const oneButton = document.getElementById('oneButton');
const twoButton = document.getElementById('twoButton');
const threeButton = document.getElementById('threeButton');
const fourButton = document.getElementById('fourButton');
const fiveButton = document.getElementById('fiveButton');
const sixButton = document.getElementById('sixButton');
const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');
const nineButton = document.getElementById('nineButton');
const divideButton = document.getElementById('divideButton');
const multiplyButton = document.getElementById('multiplyButton');
const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');
const equalsButton = document.getElementById('equalsButton');

const addNumberCaller = (e) => {
    addNumber(e.target.innerHTML);
}

const equalsButtonEvent = () => {
    equalsButton.addEventListener('click', calculate);
}

const divideButtonEvent = () => {
    divideButton.addEventListener('click', () => {
        setMathType('divide');
    })
}

const multiplyButtonEvent = () => {
    multiplyButton.addEventListener('click', () => {
        setMathType('multiply');
    })
}

const addButtonEvent = () => {
    addButton.addEventListener('click', () => {
        setMathType('add');
    })
}

const subtractButtonEvent = () => {
    subtractButton.addEventListener('click', () => {
        setMathType('subtract');
    })
}

const oneButtonEvent = () => {
    oneButton.addEventListener('click', addNumberCaller);
}

const twoButtonEvent = () => {
    twoButton.addEventListener('click', addNumberCaller);
}

const threeButtonEvent = () => {
    threeButton.addEventListener('click', addNumberCaller);
}

const fourButtonEvent = () => {
    fourButton.addEventListener('click', addNumberCaller);
}

const fiveButtonEvent = () => {
    fiveButton.addEventListener('click', addNumberCaller);
}

const sixButtonEvent = () => {
    sixButton.addEventListener('click', addNumberCaller);
}

const sevenButtonEvent = () => {
    sevenButton.addEventListener('click', addNumberCaller);
}

const eightButtonEvent = () => {
    eightButton.addEventListener('click', addNumberCaller);
}

const nineButtonEvent = () => {
    nineButton.addEventListener('click', addNumberCaller);
}

const attachEvents = () => {
    oneButtonEvent();
    twoButtonEvent();
    threeButtonEvent();
    fourButtonEvent();
    fiveButtonEvent();
    sixButtonEvent();
    sevenButtonEvent();
    eightButtonEvent();
    nineButtonEvent();
    divideButtonEvent();
    addButtonEvent();
    multiplyButtonEvent();
    subtractButtonEvent();
    equalsButtonEvent();
}

export default attachEvents;