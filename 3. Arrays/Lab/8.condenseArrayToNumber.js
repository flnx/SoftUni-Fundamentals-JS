function condenseArrayToNumber(arr) {
  while (arr.length > 1) {
    arr = arr.map((x, i, arr) => arr[i + 1] + arr[i]).filter((x) => !isNaN(x));
  }
  return arr.join('');
}
console.log(condenseArrayToNumber([2, 10, 3]));
console.log(condenseArrayToNumber([5, 0, 4, 1, 2]));
console.log(condenseArrayToNumber([1]));
/* ------------
Old Solution
*/
// function solve(arr) {
//   let result = [];

//   for (let el of arr) {
//     result.push(el);
//   }

//   while (result.length > 1) {
//     let temp = [];

//     for (let i = 0; i < result.length - 1; i++) {
//       temp[i] = result[i] + result[i + 1];
//     }

//     result = temp;
//   }

//   console.log(result.join(' '));
// }

// solve([1, 2, 3, 4, 5]);
