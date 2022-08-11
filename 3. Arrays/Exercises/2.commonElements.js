// function solve(arrOne, arrTwo) {

//     for (let i = 0; i < arrOne.length; i++) {

//         for (let r = 0; r < arrTwo.length; r++) {
//             if (arrOne[i] === arrTwo[r]) {
//                 console.log(arrOne[i]);
//             }
//         }

//     }

// }
// solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
//     ['Petar', 10, 'hey', 4, 'hello', '2'])

function solve(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrTwo.includes(arrOne[i])) {
      console.log(arrOne[i]);
    }
  }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
