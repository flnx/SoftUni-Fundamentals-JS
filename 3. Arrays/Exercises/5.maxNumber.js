// function maxNumber(array) {
//   let newArray = [];
//   let arrayL = array.length;

//   for (let i = 0; i < arrayL; i++) {
//     let isTheBiggest = true;

//     for (let r = i + 1; r < arrayL; r++) {
//       if (array[i] <= array[r]) {
//         isTheBiggest = false;
//       }
//     }

//     if (isTheBiggest) {
//       newArray.push(array[i]);
//     }
//   }

//   console.log(newArray.join(' '));
// }

maxNumber = (arr) => arr.filter((x, i) => arr.slice(i + 1).every(y => x > y)).join(' ');

console.log(maxNumber([41, 41, 34, 20]));

maxNumber([41, 41, 34, 20]);
maxNumber([14, 24, 3, 19, 15, 17]);
