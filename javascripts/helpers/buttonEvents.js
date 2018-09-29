import {addNumber} from '../components/calculator.js';

const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');

const addNumberCaller = (e) => {
    addNumber(e.target.innerHTML);
}

const sevenButtonEvent = () => {
    sevenButton.addEventListener('click', addNumberCaller);
}

const eightButtonEvent = () => {
    eightButton.addEventListener('click', addNumberCaller);
}

const attachEvents = () => {
    sevenButtonEvent();
    eightButtonEvent();
}

export default attachEvents;