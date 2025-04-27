let currentInput = '';
let history = [];

function playSound() {
    const sound = document.getElementById('clickSound');
    sound.play();
}

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
    playSound();
}

function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    document.getElementById('display').value = currentInput;
    playSound();
}

function appendScientificFunction(func) {
    currentInput += func + '(';
    document.getElementById('display').value = currentInput;
    playSound();
}

function appendParenthesis(paranthesis) {
    currentInput += paranthesis;
    document.getElementById('display').value = currentInput;
    playSound();
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        // Replace scientific functions with Math functions (e.g., sin() -> Math.sin())
        let result = eval(currentInput.replace(/sin|cos|tan|log|ln/g, 'Math.$&'));
        if (typeof result === 'number') {
            history.push(currentInput + ' = ' + result);
            updateHistory();
            currentInput = result.toString();
            document.getElementById('display').value = currentInput;
        } else {
            throw new Error('Invalid calculation');
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}

function updateHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = ''; // Clear the history list
    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}

function toggleHistory() {
    const historySection = document.getElementById('historySection');
    historySection.style.display = historySection.style.display === 'none' ? 'block' : 'none';
}

function backspace() {
    currentInput = currentInput.slice(0, -1);  // Remove the last character
    document.getElementById('display').value = currentInput;
    playSound();
}
