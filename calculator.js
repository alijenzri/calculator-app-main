const calculatorScreen = document.querySelector('#screen');
let currentInput = '';
let currentOperation = '';


function updateScreen() {
    calculatorScreen.innerHTML = currentInput || '0';
}

function handleOperand(operand) {
    currentInput += operand;
    updateScreen();
}

function handleOperator(operator) {
    currentOperation = currentOperation+ ' ' + currentInput + ' ' + operator;
    currentInput = '';
    updateScreen();
}

function handleEquals() {   
    if (currentInput !== '') {
        currentOperation += currentInput;
        try {
            const result = eval(currentOperation);
            calculatorScreen.textContent = result;
        } catch (error) {
            console.log('Invalid Equation')
            calculatorScreen.textContent = 'Invalid Equation';
        }
    }
    
    currentInput = '';
    currentOperation = '';

}

function handleDelete() {
    currentInput = currentInput.slice(0, -1);
    updateScreen();
}

function handleClear() {
    currentInput = '';
    currentOperation = '';
    updateScreen();
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.hasAttribute('data-operand')) {
            handleOperand(button.getAttribute('data-operand'));
        } else if (button.hasAttribute('data-operator')) {
            handleOperator(button.getAttribute('data-operator'));
            console.log(`${currentOperation}`);
        } else if (button.hasAttribute('data-equals')) {
            handleEquals();
        } else if (button.hasAttribute('data-delete')) {
            handleDelete();
        } else if (button.hasAttribute('data-clear')) {
            handleClear();
        }
    });
});

updateScreen();
