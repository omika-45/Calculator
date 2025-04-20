let display = document.getElementById('num-area');
let historyDisplay = document.getElementById('history-area');
let currentExpression = '';

function clearDisplay() {
    display.value = '';
    currentExpression = '';
}

function appendToDisplay(value) {
    if (display.value.length < 20) { // Limit input length
        display.value += value;
        currentExpression += value;
    }
}

function calculateResult() {
    try {
        const result = eval(currentExpression);
        if (isFinite(result)) {
            historyDisplay.value = currentExpression + ' = ' + result;
            display.value = result;
            currentExpression = result.toString();
        } else {
            throw new Error('Invalid result');
        }
    } catch (e) {
        display.value = 'Error';
        currentExpression = '';
    }
}

// Scientific functions
function sin() {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        const result = Math.sin(value * Math.PI / 180);
        display.value = result.toFixed(4);
        currentExpression = result.toString();
    }
}

function cos() {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        const result = Math.cos(value * Math.PI / 180);
        display.value = result.toFixed(4);
        currentExpression = result.toString();
    }
}

function tan() {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        const result = Math.tan(value * Math.PI / 180);
        display.value = result.toFixed(4);
        currentExpression = result.toString();
    }
}

function sqrt() {
    const value = parseFloat(display.value);
    if (!isNaN(value) && value >= 0) {
        const result = Math.sqrt(value);
        display.value = result;
        currentExpression = result.toString();
    } else {
        display.value = 'Error';
        currentExpression = '';
    }
}

function log() {
    const value = parseFloat(display.value);
    if (!isNaN(value) && value > 0) {
        const result = Math.log10(value);
        display.value = result.toFixed(4);
        currentExpression = result.toString();
    } else {
        display.value = 'Error';
        currentExpression = '';
    }
}

function ln() {
    const value = parseFloat(display.value);
    if (!isNaN(value) && value > 0) {
        const result = Math.log(value);
        display.value = result.toFixed(4);
        currentExpression = result.toString();
    } else {
        display.value = 'Error';
        currentExpression = '';
    }
}

function power() {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        currentExpression += '**';
        display.value += '^';
    }
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/[0-9+\-*/.=]/.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
