function solve(arr) {
  let sum = arr[0].reduce((a, b) => a + b, 0);
  let isMagic = true;

  for (let i = 0; i < arr.length; i++) {
    let sumRow = arr[i].reduce((a, b) => a + b, 0);
    let sumCol = arr.map((row) => row[i]).reduce((a, b) => a + b, 0);

    // A matrix is magical if the sums of the cells of every row
    // and every column are equal.
    if (sumRow !== sum || sumCol !== sum) {
      isMagic = false;
      break;
    }
  }

  console.log(isMagic);
}

solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
