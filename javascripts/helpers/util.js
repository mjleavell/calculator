const printToDom = (stringToPrint, elementId) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML = stringToPrint;
};

// object shorthand is when key=value
// export default printToDom
export {printToDom};