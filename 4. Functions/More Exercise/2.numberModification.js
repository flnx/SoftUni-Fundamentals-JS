function solve(n) {
  let nToString = n
    .toString()
    .split('')
    .map((x) => Number(x));

  let average = 0;

  while (avg(average) < 5) {
    nToString.push(9);
  }

  function avg(num) {
    let sum = 0;

    for (let i = 0; i < nToString.length; i++) {
      sum += nToString[i];
    }
    average = sum / nToString.length;
    return average;
  }
  console.log(nToString.join(''));
}

solve(101);

// function numberModification(modifiedNumber) {

//     while (getAverage(modifiedNumber) < 5) {
//         modifiedNumber += '9';
//     }

//     console.log(modifiedNumber);

//     function getSum(n) {
//         let numToString = n.toString(); // 101
//         let sum = 0;
//         for (let i = 0; i < numToString.length; i++) {
//             sum += Number(numToString[i]); // 1 + 0 + 1 = 2  |  1 + 0 + 1 + 9 = 11  | 1 + 0 + 1 + 9 + 9 =20 || 1 + 0 +1 + 9 + 9 + 9 = 29
//         }
//         return sum; // 2, 11, 20, 29, 38
//     }

//     function getAverage(x) {;
//         // length - 3, 4, 5, 6, 7 // ? 2 / 3 = 0.65 , 11 / 4 = 2.75  , 20 / 5 = 4
//         return getSum(x) / x.toString().length; // 0.65 , 2.75, 4, 4.83, 5.42
//     }

// }

// numberModification(101)
