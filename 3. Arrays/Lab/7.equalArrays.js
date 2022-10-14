function equalArrays(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    if (+arrOne[i] != +arrTwo[i]) {
      return `Arrays are not identical. Found difference at ${i} index`;
    }
  }

  const sum = arrOne.map(Number).reduce((acc, x) => acc + x, 0);
  return `Arrays are identical. Sum: ${sum}`;
}
console.log(equalArrays(['10', '20', '30'], ['10', '20', '30'])); 
console.log(equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])); 
console.log(equalArrays(['1'], ['10'])); 

// Arrays are identical. Sum: 60
// Arrays are not identical. Found difference at 2 index
// Arrays are not identical. Found difference at 0 index

 // Old Solution

// function solve(arr1, arr2) {
//   let isEqual = true;
//   let sum = 0;

//   for (let i = 0; i < arr1.length; i++) {
//     arr1[i] = Number(arr1[i]);
//   }

//   for (let j = 0; j < arr2.length; j++) {
//     arr2[j] = Number(arr2[j]);
//   }

//   for (let k = 0; k < arr1.length; k++) {
//     if (arr1[k] !== arr2[k]) {
//       isEqual = false;
//       console.log(`Arrays are not identical. Found difference at ${k} index`);
//       break;
//     } else {
//       sum += arr1[k];
//     }
//   }

//   if (isEqual) {
//     console.log(`Arrays are identical. Sum: ${sum}`);
//   }
// }

// solve(['10', '20', '30'], ['10', '20', '30']);
// solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
// solve(['1'], ['10']);
