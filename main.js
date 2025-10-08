import operate from "./src/js/logic.js";
import { checkOperator } from "./src/js/logic.js";
let btn = document.querySelector(".btn");
let inputField = document.querySelector(".input");
let operatorState = null;
let currentOperator = null;
let equalState = false;
let oprandA = null;
let oprandB = false;
inputField.textContent = 0;

btn.addEventListener("click", (e) => {
  let value = Object.values(e.target.dataset)[0];
  populate(value);
});

// helper functions
function handleClear() {
  inputField.textContent = 0;
  operatorState = null;
  currentOperator = null;
  oprandA = null;
  oprandB = false;
}

function handleDecimal(value) {
  if (inputField.textContent.toString().includes(".")) {
    return;
  }
  inputField.textContent += value;
}

function handleDigit(value) {
  if (oprandA) {
    oprandB = true;
  }
  if (
    (inputField.textContent === "0" || operatorState) &&
    !equalState
  ) {
    inputField.textContent = value;
    operatorState = null;
  } else if (equalState === true) {
    inputField.textContent = value;
    operatorState = null;
    currentOperator = null;
    oprandA = null;
    oprandB = false;
    equalState = false;
  } else {
    inputField.textContent += value;
  }
}

function handleOperator(value) {
  let sign = checkOperator(value.toString());
  operatorState = value;

  //###########
  if (oprandA === null && sign !== "equals to") {
    oprandA = +inputField.textContent;
    currentOperator = sign;
  } else if ((oprandA || oprandA === 0) && oprandB) {
    if (sign !== "equals to" && equalState) {
      inputField.textContent = +inputField.textContent;
      currentOperator = sign;
      equalState = false;
      return;
    }
    inputField.textContent = operate(
      oprandA,
      +inputField.textContent,
      currentOperator
    );
    oprandA = +inputField.textContent;
    if (sign === "equals to") {
      equalState = true;
      return;
    }
  }
  //##########

  currentOperator = sign;
}

//input handler
function populate(value) {
  if (value) {
    if (value === "c") {
      handleClear();
    } else if (value === ".") {
      handleDecimal(value);
    } else if (/[0-9]/.test(+value)) {
      handleDigit(value);
    } else {
      handleOperator(value);
    }
  }
}
