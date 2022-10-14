function addAndSubtract(arr) {
  let result = arr.map((x, i) => {
    if (x % 2 == 0) {
      return x + i;
    } else {
      return x - i;
    }
  });

  let output = result.reduce((acc, x) => acc + x, 0);
  let output1 = arr.reduce((acc, x) => acc + x, 0);

  console.log(result);
  console.log(`${output1}\n${output}`);
}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);

// [ 5, 14, 21, 59, 31 ]
// 130
// 134

// [ -5, 10, 1, 3, 6 ]
// 15
// 11

//`--------------`
// Old Solution:
//`--------------`

function solve(input) {
  let inputL = input.length;
  let sumOriginalInput = 0;
  let sumNewArray = 0;
  let newArray = [];

  for (let i = 0; i < inputL; i++) {
    sumOriginalInput += input[i];
    newArray.push(input[i]);

    if (newArray[i] % 2 === 0) {
      newArray[i] += i;
    } else {
      newArray[i] -= i;
    }
    sumNewArray += newArray[i];
  }

  console.log(newArray);
  console.log(sumOriginalInput);
  console.log(sumNewArray);
}
solve([5, 15, 23, 56, 35]);
