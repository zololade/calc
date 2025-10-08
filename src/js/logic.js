function trydivision(a, b) {
  let result = a / b;
  if (result === Infinity) {
    return "Error";
  } else if (result % 1 !== 0) {
    return result.toFixed(2);
  } else {
    return result;
  }
}

function tryRemainder(a, b) {
  let result = a % b;
  if (isNaN(result)) {
    return "Error";
  } else {
    return result;
  }
}

export default function operate(a, b, operator) {
  switch (operator) {
    case "plus":
      return +a + +b;
      break;
    case "minus":
      return a - b;
      break;
    case "divide":
      return trydivision(a, b);
      break;
    case "multiply":
      return a * b;
      break;
    case "remainder":
      return tryRemainder(a, b);
      break;
    case "equals to":
      return;
      break;
    default:
      break;
  }
}

export function checkOperator(operator) {
  switch (operator) {
    case "+":
      return "plus";
      break;
    case "-":
      return "minus";
      break;
    case "/":
      return "divide";
      break;
    case "*":
      return "multiply";
      break;
    case "%":
      return "remainder";
      break;
    case "=":
      return "equals to";
      break;
    default:
      break;
  }
}
