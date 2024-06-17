const calculatorScreen = document.querySelector('#screen');
let currentInput = '';
let currentOperation = '';
let lastResult = ''; // to store the last result

function updateScreen() {
    calculatorScreen.innerHTML = currentInput || lastResult || ' ';
}

function handleOperand(operand) {
    if (lastResult !== '' && currentInput === '') {
        lastResult = '';
    }
    currentInput += operand;
    updateScreen();
}

function handleOperator(operator) {
    if (currentInput === '' && lastResult === '') {
        return;
    }

    if (currentInput !== '') {
        currentOperation += currentInput + ' ' + operator;
    } else {
        currentOperation = lastResult + ' ' + operator;
    }
    currentInput = '';
    lastResult = '';
    console.log(`Current Operation: ${currentOperation}`);
    updateScreen();
}

function handleEquals() {
    if (currentInput === '' && currentOperation === '') {
        return;
    }

    if (currentInput !== '') {
        currentOperation += currentInput;
    }

    const result = eval(currentOperation);
    calculatorScreen.textContent = result;
    lastResult = '' + result;
    currentOperation = '';
    currentInput = '';
    console.log(`Result: ${result}`);
}

function handleDelete() {
    currentInput = currentInput.slice(0, -1);
    updateScreen();
}

function handleClear() {
    currentInput = '';
    currentOperation = '';
    lastResult = '';
    updateScreen();
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.hasAttribute('data-operand')) {
            handleOperand(button.getAttribute('data-operand'));
        } else if (button.hasAttribute('data-operator')) {
            handleOperator(button.getAttribute('data-operator'));
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
