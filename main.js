const printToDom = (stringToPrint, elementId) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML = stringToPrint;
};

const multiply = (n1, n2) => {
    return n1 * n2;
};

const divide = (n1, n2) => {
    return n1 / n2;
}

const add = (n1, n2) => {
    return n1 + n2;
}

const subtract = (n1, n2) => {
    return n1 - n2;
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
    printToDom(answer, 'result');
};

calculate(16, 18, 'subtract'); //8