function sumFirstAndLastArrElements(arr) {
  return arr
    .slice()
    .filter((_, i) => i == 0 || i == arr.length - 1)
    .reduce((acc, n) => acc + n, 0);
}

console.log(sumFirstAndLastArrElements([10, 17, 22, 33]));

// 39
`---------------`
// Old Solution
`---------------`
function solve(input) {
  let firstNum = input[0];
  let lastNum = input[input.length - 1];

  console.log(firstNum + lastNum);
}
solve([20, 30, 40]);
