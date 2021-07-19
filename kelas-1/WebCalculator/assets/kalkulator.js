const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false,
};

function updateDisplay(){
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
    document.querySelector("#displayOperator").innerText = calculator.operator == null ? "simple calculator" : calculator.operator;
    console.log(calculator);
}

function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
    calculator.doneCalculation = false;
    console.log(calculator);
}

function inputDigit(digit){
    if (calculator.displayNumber === '0'){
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
    console.log(calculator);
}

function inverseNumber(){
    if (calculator.displayNumber === '0'){
        return;
    }

    calculator.displayNumber = calculator.displayNumber * -1;
    calculator.displayNumber = calculator.displayNumber.toString();
    console.log(calculator);
}

function handleOperator(operator){
    if(!calculator.waitingForSecondNumber){
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;

        calculator.displayNumber = '0';
    } else {
        alert("operator sudah di tetapkan");
    }
    console.log(calculator);
}

function performCalculation(){
    if(calculator.firstNumber == null || calculator.operator == null){
        alert("Anda belum menetapkan operator / angka pertama");
    }

    let result = 0;
    if(calculator.operator === "+"){
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else if(calculator.operator === "-") {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    } else if(calculator.operator === "x") {
        result = parseInt(calculator.firstNumber) * parseInt(calculator.displayNumber);
    } else if(calculator.operator === "/") {
        result = parseInt(calculator.firstNumber) / parseInt(calculator.displayNumber);
    }

    let history = {
        firstNumber: calculator.firstNumber,
        secondNumber: calculator.displayNumber,
        operator: calculator.operator,
        result: result,
    }
    putHistory(history);
    calculator.displayNumber = result;
    calculator.operator = null;
    renderHistory();
}

function performBackspace(){
    calculator.displayNumber = calculator.displayNumber.substring(0, calculator.displayNumber.length - 1);
    if(calculator.displayNumber === "") {
        inputDigit("0");
    }
    updateDisplay();
}

const buttons = document.querySelectorAll(".button");

for (let button of buttons){
    button.addEventListener('click', function(e){
        const target = e.target;

        if (target.classList.contains("clear")) {
            clearCalculator();
            updateDisplay();
            return;
        } else if (target.classList.contains("operator")) {
            handleOperator(target.innerText);
            updateDisplay();
            return; 
        } else if (target.classList.contains("equals")) {
            performCalculation();
            updateDisplay();
            return;
        } else if (target.classList.contains("negative")){
            inverseNumber();
            updateDisplay();
            return;
        } else if (target.classList.contains("backspace")){
            performBackspace();
            updateDisplay();
            return;
        }

        inputDigit(target.innerText);
        updateDisplay();
    })
}