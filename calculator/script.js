const display = document.querySelector("#display");

const pad = document.querySelector("#pad");

//store each number or operator in this array
let equation = [0];

//init display with "0"
updateDisplay();

//pad listenes to any click events
pad.addEventListener("click", (e) => {
  //Check if button click
  if (e.target.tagName.toLowerCase() == "button") {
    let btnTxt = e.target.innerText;

    switch (btnTxt) {
      //clear all button
      case "CE":
        equation = [0];
        break;

      //backspace button
      case "<-":
        if (equation.length > 1) {
          equation.pop();
        } else {
          equation = [0];
        }
        break;

      case "=":
        //if last char is not a number, equation is not valid
        if (!parseFloat(equation.at(-1)) && equation.at(-1) != "0") {
          invalidate();
          break;
        }
        let wellFormed = consolidateEquation(); //merge array of chars to calculatable array
        let result = calculate(wellFormed); //calculate result
        equation = result.split(""); //turn numeric result back into array of chars
        if (equation.length >= 15) {
          equation.splice(14); //handles numbers too big to display
        }
        break;
      default: //neither of the above
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

function percentage(a) {
  return a / 100;
}

//operates give two numbers and an operant
function operate(a, op, b) {
  a = parseFloat(a);
  b = parseFloat(b);
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

    case "%":
      return percentage(a);
    default:
      break;
  }
}

//calculates the result of a well formed equation
//follows BEDMAS (DMAS)
function calculate(wellFormed) {
  //compute all instances of % operator
  wellFormed.forEach((char, index) => {
    if (char == "%") {
      wellFormed.splice(index - 1, 2, operate(wellFormed[index - 1], "%"));
    }
  });

  wellFormed.forEach((char, index) => {
    if (char == "*" || char == "/") {
      wellFormed.splice(
        index - 1,
        3,
        operate(wellFormed[index - 1], char, wellFormed[index + 1])
      );
    }
  });

  wellFormed.forEach((char, index) => {
    if (char == "+" || char == "-") {
      wellFormed.splice(
        index - 1,
        3,
        operate(wellFormed[index - 1], char, wellFormed[index + 1])
      );
    }
  });

  return `${wellFormed}`;
}

/**
 * Updates the HTML number display
 */
function updateDisplay() {
  display.innerText = equation.join("");
}

//tells the user the equation they entered cant be calculated
function invalidate() {
  window.alert("Format Invalid");
}

/**
 * Returns a well formed equation ready to be computed
 */
function consolidateEquation() {
  let wellFormed = equation.join("");

  //this regex splits and keeps the delimters "+-*/%"
  wellFormed = wellFormed.split(/(?=[\+\-\*\/\%])|(?<=[\+\-\*\/\%])/g);
  return wellFormed;
}

/**
 * Check if inserting a op is valid
 */
function insertOp(op) {
  //equation maximun 15 characters
  if (equation.length >= 15) {
    return;
  }

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

  //determines the type of operants

  //if trying to push the number 0
  if (opType.isZero) {
    //output error if
    //equation[] = [0], should not be [0,0], or
    //prev is "%" or
    (prevType.isZero && prevType.isFirst) || prevType.isPercent
      ? invalidate()
      : equation.push(op);
    return;
  }

  //if trying to push any number
  if (opType.isNumber) {
    if (prevType.isPercent) {
      invalidate();
    } else if (prevType.isFirst && prevType.isZero) {
      equation = [op];
    } else {
      equation.push(op);
    }
    return;
  }

  //if trying to push a decimal
  if (opType.isDecimal) {
    prevType.isDecimal ||
    prevType.isPercent ||
    prevType.isBasic ||
    notValidDecimal()
      ? invalidate()
      : equation.push(op);
    return;
  }

  //if trying to push a percentage operator
  if (opType.isPercent) {
    prevType.isBasic || prevType.isDecimal || prevType.isPercent
      ? invalidate()
      : equation.push(op);
    return;
  }

  //if trying to push a basic operator: +, - *, /
  if (opType.isBasic) {
    prevType.isBasic || prevType.isDecimal ? invalidate() : equation.push(op);
    return;
  }
}

//check if a valid decimal can be inserted at the end of equation[]
//decimal is only valid if
//no decimal exist in equation[] or,
//last decimal in equation[] is seperated by a basic op.
//Invalid examples: 1.2.3, 10%.5,
function notValidDecimal() {
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
