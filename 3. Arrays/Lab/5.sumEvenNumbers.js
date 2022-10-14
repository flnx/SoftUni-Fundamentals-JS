function sumEvenNumbers(arr) {
  return arr.map(Number)
    .filter((x) => x % 2 == 0)
    .reduce((acc, n) => acc + n, 0);
}
console.log(sumEvenNumbers(['1', '2', '3', '4', '5', '6'])); // 12
console.log(sumEvenNumbers(['3', '5', '7', '9'])); // 0
console.log(sumEvenNumbers(['2', '4', '6', '8', '10'])); // 30




// Old Solution

function solve(arr) {
  let result = 0;

  for (el of arr) {
    if (el % 2 === 0) {
      result += Number(el);
    }
  }

  console.log(result);
}

solve(['3', '5', '7', '9']);
