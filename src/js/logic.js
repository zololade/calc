export default function operate(a, b, operator) {
  switch (operator) {
    case "plus":
      return +a + +b;
      break;
    case "minus":
      return a - b;
      break;
    case "divide":
      return a / b;
      break;
    case "multiply":
      return a * b;
      break;
    case "remainder":
      return a % b;
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
