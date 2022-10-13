function evenAndOddSubtraction(arr) {
  const evens = arr.filter((x) => x % 2 == 0).reduce((acc, x) => acc + x, 0);
  const odds = arr.filter((x) => x % 2 != 0).reduce((acc, x) => acc + x, 0);

  return evens - odds;
}
console.log(evenAndOddSubtraction([1, 2, 3, 4, 5, 6])); // 3
console.log(evenAndOddSubtraction([3, 5, 7, 9])); // -24
console.log(evenAndOddSubtraction([2, 4, 6, 8, 10])); // 30

`---------------`
// Old Solution
`---------------`

function solve(arr) {
  let sumOdd = 0;
  let sumEven = 0;

  for (el of arr) {
    if (el % 2 === 0) {
      sumEven += el;
    } else {
      sumOdd += el;
    }
  }

  console.log(sumEven - sumOdd);
}

solve([3, 5, 7, 9]);
