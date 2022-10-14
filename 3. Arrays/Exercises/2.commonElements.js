// Solution 1
function commonElements(arrOne, arrTwo) {
  arrOne.forEach((x) => {
    if (arrTwo.includes(x)) {
      console.log(x);
    }
  });
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2']);

// Solution 2
function solve2(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrTwo.includes(arrOne[i])) {
      console.log(arrOne[i]);
    }
  }
}
// solve2(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);


// hello
// 4