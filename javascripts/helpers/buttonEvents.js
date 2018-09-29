import {addNumber} from '../components/calculator.js';
import {setMathType} from '../components/calculator.js';

const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');
const nineButton = document.getElementById('nineButton');
const divideButton = document.getElementById('divideButton');


const addNumberCaller = (e) => {
    addNumber(e.target.innerHTML);
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
}

export default attachEvents;