const display = document.querySelector("#display");

const pad = document.querySelector("#pad");

//store each number or operator in this array
let equation = [0];

//init display with "0"
updateDisplay();

console.log(equation.at[-1]);

//pad listenes to any click events
pad.addEventListener("click", (e) => {
  //Check if button click
  if (e.target.tagName.toLowerCase() == "button") {
    let btnTxt = e.target.innerText;

    switch (btnTxt) {
      case "cls":
        equation = [0];
        break;

      case "<-":
        if (equation.length > 1) {
          equation.pop();
        } else {
          equation = [0];
        }
        break;

      case "=":
        //handle operate
        break;
      default: //neither of the above
        //check if operator
        insertOp(btnTxt);
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
 * Check if inserting a op is valid
 */
function insertOp(op) {
  let prev = equation.at(-1);

  //get flags about this op and the previous char in the equation
  let opType = {
    isNumber: parseFloat(op) || op == "0",
    isZero: op == "0",
    isDecimal: op == ".",
    isPercent: op == "%",
    isBasic: op == "+" || op == "-" || op == "*" || op == "/",
  };

  let prevType = {
    isFirst: equation.length <= 1,
    isNumber: parseFloat(prev) || prev == "0",
    isZero: prev == "0",
    isDecimal: prev == ".",
    isPercent: prev == "%",
    isBasic: prev == "+" || prev == "-" || prev == "*" || prev == "/",
  };

  //determines what can be pushed

  //if trying to push the number 0
  if (opType.isZero) {
    //output error if
    //equation[] = [0], should not be [0,0], or
    //prev is "%" or
    (prevType.isZero && prevType.isFirst) || prevType.isPercent
      ? console.log("Invalid format")
      : equation.push(op);
    return;
  }

  //if trying to push any number
  if (opType.isNumber) {
    if (prevType.isPercent) {
      console.log("err");
    } else if (prevType.isFirst && prevType.isZero) {
      equation = [op];
    } else {
      equation.push(op);
    }
    return;
  }

  if (opType.isDecimal) {
    prevType.isDecimal ||
    prevType.isPercent ||
    prevType.isBasic ||
    inValidDecimal()
      ? console.log("Invalid format")
      : equation.push(op);
    return;
  }

  if (opType.isPercent) {
    prevType.isBasic || prevType.isDecimal || prevType.isPercent
      ? console.log("Invalid format")
      : equation.push(op);
    return;
  }

  if (opType.isBasic) {
    prevType.isBasic || prevType.isDecimal
      ? console.log("Invalid format")
      : equation.push(op);
    return;
  }
}

//check if a valid decimal can be inserted at the end of equation[]
//decimal is only valid if
//no decimal exist in equation[] or,
//last decimal in equation[] is seperated by a basic op.
//Invalid examples: 1.2.3, 10%.5,
function inValidDecimal() {
  let lastDecimal = equation.lastIndexOf(".");

  //no decimal found, validate
  if (lastDecimal == -1) {
    return false;
  }

  //decimal found, find last index of any basic operant
  let lastOp = Math.max(
    equation.lastIndexOf("+"),
    equation.lastIndexOf("-"),
    equation.lastIndexOf("*"),
    equation.lastIndexOf("/")
  );

  //if decimal appears before basic op then invalidate
  return lastOp < lastDecimal ? true : false;
}
