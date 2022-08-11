function solve(array, rotationNumber) {
  for (let i = 0; i < rotationNumber; i++) {
    let takeCurrentElement = array.shift();
    array.push(takeCurrentElement);
  }
  console.log(array.join(' '));
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
