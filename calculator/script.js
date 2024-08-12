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

  if (prevType.isFirst && prevType.isZero) {
    if (opType.isNumber) {
      equation = [op];
    } else if (opType.isDecimal || opType.isPercent) {
      equation.push(op);
    } else {
      console.log("Invalid format");
    }
    return;
  }

  if (prevType.isZero) {
    if (opType.isZero) {
      console.log("Invalid format");
    } else {
      equation.push(op);
    }
    return;
  }

  if (prevType.isNumber) {
    if (prevType.isFirst && prevType.isZero) {
      //replace 0 with op
      equation[0] = op;
    } else {
      equation.push(op);
    }

    return;
  }

  if (prevType.isDecimal) {
    console.log(prevType.isPercent);
    if (opType.isDecimal || opType.isBasic) {
      console.log("Invalid format");
    } else {
      equation.push(op);
    }
    return;
  }

  if (prevType.isPercent) {
    if (opType.isNumber || opType.isDecimal || opType.isPercent) {
      console.log("invalid format");
    } else {
      equation.push(op);
    }
  }

  if (prevType.isBasic) {
    if (opType.isDecimal || opType.isPercent || opType.isBasic) {
      console.log("Invalid format");
    } else {
      equation.push(op);
    }
  }
}
