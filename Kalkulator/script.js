const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingSecondOperand: false,
  operator: null,
};

function updateDisplay() {
  const display = document.querySelector(".calculator-display");
  display.value = calculator.displayValue;
}

function inputDigit(digit) {
  const { displayValue, waitingSecondOperand } = calculator;

  if (waitingSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
  }
  updateDisplay();
}

function inputDecimal(dot) {
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if (nextOperator === "√" || nextOperator === "%") {
    const result = calculate(null, inputValue, nextOperator);
    calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
    calculator.firstOperand = result;
    calculator.waitingSecondOperand = true;
    updateDisplay();
    return;
  }

  if (operator && calculator.waitingSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }

  if (firstOperand === null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);
    calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
    calculator.firstOperand = result;
  }

  calculator.waitingSecondOperand = true;
  calculator.operator = nextOperator;

  updateDisplay();
}

function calculate(firstOperand, secondOperand, operator) {
  switch (operator) {
    case "+":
      return firstOperand + secondOperand;
    case "-":
      return firstOperand - secondOperand;
    case "*":
      return firstOperand * secondOperand;
    case "/":
      return firstOperand / secondOperand;
    case "√":
      return Math.sqrt(secondOperand);
    case "%":
      return secondOperand / 100;
    default:
      return secondOperand;
  }
}

function resetCalculator() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.waitingSecondOperand = false;
  calculator.operator = null;

  updateDisplay();
}

function handleEqual() {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if (operator && !calculator.waitingSecondOperand) {
    const result = calculate(firstOperand, inputValue, operator);
    calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
    calculator.firstOperand = null;
    calculator.operator = null;
    calculator.waitingSecondOperand = false;
    updateDisplay();
  }
}

document.querySelector(".calculator-keys").addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("button")) return;
  if (target.classList.contains("operator")) {
    handleOperator(target.value);
  } else if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
  } else if (target.classList.contains("all-clear")) {
    resetCalculator();
  } else if (target.classList.contains("equal-sign")) {
    handleEqual();
  } else {
    inputDigit(target.value);
  }
});
