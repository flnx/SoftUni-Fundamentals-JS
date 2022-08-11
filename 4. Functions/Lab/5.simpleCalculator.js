// function solve(numOne, numTwo, operator) {
//     let res;

//     switch (operator) {
//         case 'multiply':
//             res = numOne * numTwo;
//             break;
//         case 'divide':
//             res = numOne / numTwo;
//             break;
//         case 'add':
//             res = numOne + numTwo;
//             break;
//         case 'subtract':
//             res = numOne - numTwo;
//             break;
//     }

//     console.log(res);
// }

function solve(numOne, numTwo, operator) {
  let res;

  switch (operator) {
    case 'multiply':
      res = (a, b) => a * b;
      break;
    case 'divide':
      res = (a, b) => a / b;
      break;
    case 'add':
      res = (a, b) => a + b;
      break;
    case 'subtract':
      res = (a, b) => a - b;
      break;
  }

  console.log(res(numOne, numTwo));
}

solve(5, 5, 'add');
