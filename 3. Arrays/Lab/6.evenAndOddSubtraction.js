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
