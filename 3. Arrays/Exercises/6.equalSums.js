// function solve(array) {
//     let leftSum = 0;
//     let isFound = false;
//     let counter = 0;

//     for (let i = 0; i < array.length; i++) {
//         counter++;
//         let rightSum = 0;
//         leftSum += array[i]

//         for (let r = i + 2; r < array.length; r++) {
//             rightSum += array[r];
//         }

//         if (leftSum === rightSum) {
//             isFound = true;
//             console.log(counter);
//             break;
//         }
//     }

//     if (array.length > 1) {
//         if (!isFound) {
//             console.log('no');
//         }
//     } else {
//         console.log('0');
//     }

// }
// solve([1])

// solve([1, 2, 3, 3])
// solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])

function solve(array) {
  let arrayL = array.length;
  let foundIndex = 'no';

  for (let i = 0; i < arrayL; i++) {
    let rightSum = 0;
    let leftSum = 0;

    for (let r = 0; r < i; r++) {
      leftSum += array[r];
    }

    for (let j = i + 1; j < arrayL; j++) {
      rightSum += array[j];
    }

    if (leftSum === rightSum) {
      foundIndex = i;
      break;
    }
  }

  console.log(foundIndex);
}

solve([1, 2, 3, 3]);
solve([2, 5]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
