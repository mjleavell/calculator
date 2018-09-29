import {calculate} from './components/calculator.js';
import buttonEvents from './helpers.buttonEvents.js';

const initializeApp = () => {
    buttonEvents();
    calculate(16, 18, 'divide'); 
}

initializeApp();