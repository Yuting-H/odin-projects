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
        percentify(); //handles percentage behavior
        break;

      case "=":
        break;
      default: //neither of the above
        //check if operator
        if (!parseFloat(btnTxt)) {
          insertOp(btnTxt);
        } else {
          equation.push(e.target.innerText);
        }
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
 * glues array of single characters into array of numbers and operants,
 * which is suitable to be calculated
 */
function consolidateEquation() {}

/**
 * Insert "%" into equation
 * if trying to percentify a non-number, alert an error
 */
function percentify() {
  let prev = equation.at(-1);

  //check if previous element is a number
  if (parseFloat(prev)) {
    equation.push("%");
  } else {
    alert("Invalid Format");
  }
}

/**
 * Check if inserting a op is valid
 */
function insertOp(op) {
  let prev = equation.at(-1);

  //check if previous element is a number or a "%"
  if (parseFloat(prev) || prev == "%") {
    equation.push(op);
  } else {
    alert("Invalid Format");
  }
}
