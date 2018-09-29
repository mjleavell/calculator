import {addNumber, setMathType, calculate} from '../components/calculator.js';

const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');
const nineButton = document.getElementById('nineButton');
const divideButton = document.getElementById('divideButton');
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
    sevenButtonEvent();
    eightButtonEvent();
    nineButtonEvent();
    divideButtonEvent();
    equalsButtonEvent();
}

export default attachEvents;