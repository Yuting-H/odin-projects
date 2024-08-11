const display = document.querySelector("#display");

const pad = document.querySelector("#pad");

//store each number or operator in this array
let equation = [];

//pad listenes to any click events
pad.addEventListener("click", (e) => {
  //Check if button click
  if (e.target.tagName.toLowerCase() == "button") {
    let btnTxt = e.target.innerText;

    switch (btnTxt) {
      case "cls":
        equation = [];
        break;

      case "<-":
        equation.pop();
        break;

      case "%":
        percentify();
        break;

      default:
        equation.push(e.target.innerText);
        break;
    }
  }

  //after handling user input,
  updateDisplay();
});

//operational functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

//operates give two numbers and an operant
function operate(a, op, b) {
  switch (op) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      break;
  }
}

/**
 * Updates the HTML number display
 */
function updateDisplay() {
  display.innerText = equation;
}

/**
 * Divides the last number in equation[]
 * if not a numebr, aleart a err message
 */
function percentify() {}
