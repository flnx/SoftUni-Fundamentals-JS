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

// Updated Solution

function solve(numOne, numTwo, operator) {
  const calculator = {
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
  }

  const result = calculator[operator]
  console.log(result(numOne, numTwo));
}

solve(5, 5, 'add');



