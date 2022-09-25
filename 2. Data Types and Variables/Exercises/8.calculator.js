function solve(firstNum, operator, secondNum) {
  let result = 0;

  switch (operator) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    case '/':
      result = firstNum / secondNum;
      break;
    default:
      result = 'Invalid Operator';
      console.log(result);
      return;
  }

  console.log(result.toFixed(2));
}

solve(25, '-', 10);

// Output: 15.00
